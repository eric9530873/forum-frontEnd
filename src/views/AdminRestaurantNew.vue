<template>
  <div class="container py-5">
    <!-- 餐廳表單 AdminRestaurantForm -->
    <AdminRestaurantFormVue @after-submit="handleAferSubmit" :isprocessing="isProcessing" />
  </div>
</template>

<script>
import AdminRestaurantFormVue from "@/components/AdminRestaurantForm.vue";
import adminApi from "../apis/admin";
import { Toast } from "@/utils/helpers";

export default {
  name: "AdminRestaurantNew",
  components: {
    AdminRestaurantFormVue,
  },
  data() {
    return {
      isProcessing: false,
    };
  },
  methods: {
    async handleAferSubmit(formData) {
      try {
        this.isProcessing = true;
        const response = await adminApi.restaurants.create({ formData });
        console.log(response)
        if (response.data.status !== "success") {
          throw new Error(response.data.message);
        }
        this.$router.push({ name: "admin-restaurants" });
      } catch (error) {
        this.isProcessing = false;
        Toast.fire({
          icon: "error",
          title: "無法建立餐廳",
        });
      }
    },
  },
};
</script>