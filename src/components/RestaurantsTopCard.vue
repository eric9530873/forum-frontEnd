<template>
  <div class="card mb-3" style="max-width: 540px; margin: auto">
    <div class="row no-gutters">
      <div class="col-md-4">
        <router-link :to="{ name: 'restaurant', params: { id: restaurant.id } }">
          <img class="card-img" :src="restaurant.image" />
        </router-link>
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{ restaurant.name }}</h5>
          <span class="badge badge-secondary">收藏數：{{ restaurant.FavoritedUsers.length }}</span>
          <p class="card-text">
            {{ restaurant.description }}
          </p>
          <router-link :to="{ name: 'restaurant', params: { id: restaurant.id } }"
            class="btn btn-primary mr-2">Show</router-link>

          <button v-if="restaurant.isFavorited" @click="deleteFavorite(restaurant.id)" type="button"
            class="btn btn-danger mr-2">
            移除最愛
          </button>
          <button @click="addFavorite(restaurant.id)" v-else type="button" class="btn btn-primary">
            加到最愛
          </button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import usersAPI from "../apis/users";
import { Toast } from "@/utils/helpers";
export default {
  name: "RestaurantsTopCard",
  props: {
    initialrestaurant: {
      type: Object,
      require: true,
    },
  },
  data() {
    return {
      restaurant: this.initialrestaurant,
    };
  },
  methods: {
    async deleteFavorite(restaurantId) {
      try {
        const response = await usersAPI.deleteFavorite({ restaurantId });
        if (response.data.status === "error") {
          throw new Error(response.data.message);
        }
        this.restaurant = {
          ...this.restaurant,
          isFavorited: false,
          FavoriteCount: this.restaurant.FavoriteCount - 1,
        };
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法",
        });
      }
    },
    async addFavorite(restaurantId) {
      try {
        const response = await usersAPI.addFavorite({ restaurantId });
        if (response.data.status === "error") {
          throw new Error(response.data.message);
        }
        this.restaurant = {
          ...this.restaurant,
          isFavorited: true,
          FavoriteCount: this.restaurant.FavoriteCount + 1,
        };
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法",
        });
      }
    },
  },
};
</script>