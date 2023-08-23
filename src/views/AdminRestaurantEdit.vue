<template>
  <div class="container py-5">
    <AdminRestaurantForm
      :initialrestaurant="restaurant"
      @after-submit="handleAferSubmit"
      :isprocessing="isProcessing"
    />
  </div>
</template>

<script>
import AdminRestaurantForm from "@/components/AdminRestaurantForm.vue";
import adminAPI from "../apis/admin";
import { Toast } from "@/utils/helpers";

export default {
  name: "AdminRestaurantEdit",
  components: {
    AdminRestaurantForm,
  },
  data() {
    return {
      restaurant: {
        id: -1,
        name: "",
        categoryId: "",
        tel: "",
        address: "",
        description: "",
        image: "",
        openingHours: "",
      },
      isProcessing: false,
    };
  },
  beforeRouteUpdate(to, from, next) {
    console.log({ to, from, next });
    this.fetchRestaurant(to.params.id);
    next();
  },
  methods: {
    async fetchRestaurant(restaurantId) {
      try {
        const response = await adminAPI.restaurants.getDetail({ restaurantId });
        this.restaurant = {
          ...this.restaurant,
          id: response.data.data.restaurant.id,
          name: response.data.data.restaurant.name,
          tel: response.data.data.restaurant.tel,
          address: response.data.data.restaurant.address,
          openingHours: response.data.data.restaurant.opening_hours,
          description: response.data.data.restaurant.description,
          image: response.data.data.restaurant.image,
          categoryId: response.data.data[0],
        };
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法取得",
        });
      }
    },
    async handleAferSubmit(formData) {
      try {
        this.isProcessing = true;
        const response = await adminAPI.restaurants.upDate({
          restaurantId: this.restaurant.id,
          formData,
        });
        if (response.data.status !== "success") {
          throw new Error(response.data.message);
        }
        this.$router.push({ name: "admin-restaurants" });
      } catch (error) {
        this.isProcessing = false;
        Toast.fire({
          icon: "error",
          title: "無法更新餐廳資料",
        });
      }
    },
  },
  created() {
    const { id } = this.$route.params;
    this.fetchRestaurant(id);
  },
};
</script>