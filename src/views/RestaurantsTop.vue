<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">人氣餐廳</h1>
    <hr />
    <RestaurantsTopCard :initialrestaurant="restaurant" v-for="restaurant in restaurants" :key="restaurant.id" />
  </div>
</template>

<script>
import NavTabs from "../components/NavTabs.vue";
import RestaurantsTopCard from "@/components/RestaurantsTopCard.vue";
import restaurantAPI from "../apis/restaurants";
import { Toast } from "@/utils/helpers";

export default {
  name: "RestaurantsTop",
  components: {
    NavTabs,
    RestaurantsTopCard,
  },
  data() {
    return {
      restaurants: []
    };
  },
  methods: {
    async fetchRestaurantsTop() {
      try {
        const response = await restaurantAPI.getRestaurantsTop();
        console.log(response)
        this.restaurants = response.data.data;
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法",
        });
      }
    },
  },
  created() {
    this.fetchRestaurantsTop();
  },
};
</script>