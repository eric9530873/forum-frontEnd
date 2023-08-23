<template>
  <div class="container py-5">
    <div class="row">
      <div class="col-md-12">
        <h1>{{ restaurant.name }}</h1>
        <span class="badge badge-secondary mt-1 mb-3">
          {{ restaurant.categoryName }}
        </span>
      </div>
      <div class="col-md-4">
        <img
          class="img-responsive center-block"
          :src="restaurant.image | emptyImage"
          style="width: 250px; margin-bottom: 25px"
        />
        <div class="well">
          <ul class="list-unstyled">
            <li>
              <strong>Opening Hour:</strong>
              {{ restaurant.openingHours }}
            </li>
            <li>
              <strong>Tel:</strong>
              {{ restaurant.tel }}
            </li>
            <li>
              <strong>Address:</strong>
              {{ restaurant.address }}
            </li>
          </ul>
        </div>
      </div>
      <div class="col-md-8">
        <p>{{ restaurant.description }}</p>
      </div>
    </div>
    <hr />
    <button type="button" class="btn btn-link" @click="$router.back()">
      回上一頁
    </button>
  </div>
</template>

<script>
import { emptyImageFilter } from "@/utils/mixins";
import adminAPI from "../apis/admin";
import { Toast } from "@/utils/helpers";

export default {
  name: "AdminRestaurant",
  mixins: [emptyImageFilter],
  data() {
    return {
      restaurant: {
        id: -1,
        name: "",
        categoryName: "",
        image: "",
        openingHours: "",
        tel: "",
        address: "",
        description: "",
      },
    };
  },
  methods: {
    async fetchRestaurant(restaurantId) {
      try {
        const response = await adminAPI.restaurants.getDetail({
          restaurantId,
        });
        console.log(response);
        this.restaurant = {
          ...this.restaurant,
          id: response.data.data.restaurant.id,
          name: response.data.data.restaurant.name,
          categoryName: response.data.data.restaurant.Category.name,
          image: response.data.data.restaurant.image,
          openingHours: response.data.data.restaurant.opening_hours,
          tel: response.data.data.restaurant.tel,
          address: response.data.data.restaurant.address,
          description: response.data.data.restaurant.description,
        };
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法顯示",
        });
      }
    },
  },
  beforeRouteUpdate(to, from, next) {
    console.log(to, from);
    this.fetchRestaurant(to.params.id);
    next();
  },
  mounted() {
    const { id: restaurantId } = this.$route.params;
    this.fetchRestaurant(restaurantId);
  },
};
</script>