<template>
  <div class="col-md-6 col-lg-4">
    <div class="card mb-4">
      <img class="card-img-top" :src="restaurant.image" alt="Card image cap" width="286px" height="180px" />
      <div class="card-body">
        <p class="card-text title-wrap">
          <router-link :to="{ name: 'restaurant', params: { id: restaurant.id } }">
            {{ restaurant.name }}
          </router-link>
        </p>
        <span class="badge badge-secondary">{{
          restaurant.Category.name ? restaurant.Category.name : "未分類"
        }}</span>
        <p class="card-text text-truncate">
          {{ restaurant.description }}
        </p>
      </div>
      <div class="card-footer">
        <button type="button" class="btn btn-danger btn-border favorite mr-2" v-if="restaurant.isFavorited"
          @click="deleteFavorited(restaurant.id)">
          移除最愛
        </button>
        <button type="button" class="btn btn-primary btn-border favorite mr-2" v-else
          @click.stop.prevent="addFavorited(restaurant.id)">
          加到最愛
        </button>
        <button type="button" class="btn btn-danger like mr-2" v-if="restaurant.isLiked"
          @click.stop.prevent="deleteLiked(restaurant.id)">
          Unlike
        </button>
        <button type="button" class="btn btn-primary like mr-2" v-else @click.stop.prevent="addLiked(restaurant.id)">
          Like
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import usersAPI from "../apis/users";
import { Toast } from "@/utils/helpers";

export default {
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
    async addFavorited(restaurantId) {
      try {
        const response = await usersAPI.addFavorite({ restaurantId });
        console.log(response);
        if (response.data.status === "error") {
          throw new Error(response.data.message);
        }
        this.restaurant = {
          ...this.restaurant,
          isFavorited: true,
        };
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法加入",
        });
      }
    },
    async deleteFavorited(restaurantId) {
      try {
        const response = await usersAPI.deleteFavorite({ restaurantId });
        console.log(response);
        if (response.data.status === "error") {
          throw new Error(response.data.message);
        }
        this.restaurant = {
          ...this.restaurant,
          isFavorited: false,
        };
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法加入",
        });
      }
    },
    async addLiked(restaurantId) {
      try {
        const response = await usersAPI.addLiked({ restaurantId });
        if (response.data.status === "error") {
          throw new Error(response.data.message);
        }
        (this.restaurant = {
          ...this.restaurant,
          isLiked: true,
        }),
          console.log(this.restaurant);
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法加入",
        });
      }
    },
    async deleteLiked(restaurantId) {
      try {
        const response = await usersAPI.deleteLiked({ restaurantId });
        if (response.data.status === "error") {
          throw new Error(response.data.message);
        }
        (this.restaurant = {
          ...this.restaurant,
          isLiked: false,
        }),
          console.log(this.restaurant);
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法加入",
        });
      }
    },
  },
};
</script>

<style scoped>
.badge.badge-secondary {
  padding: 0;
  margin: 8px 0;
  color: #bd2333;
  background-color: transparent;
}

.btn,
.btn-border.btn:hover {
  margin: 7px 14px 7px 0;
}

.card {
  margin-bottom: 2rem !important;
}

.card-img-top {
  background-color: #EFEFEF;
}

.card-body {
  padding: 17.5px;
}

.card-footer {
  padding: 9px 17.5px;
  border-color: rgb(232, 232, 232);
  background: white;
}
</style>