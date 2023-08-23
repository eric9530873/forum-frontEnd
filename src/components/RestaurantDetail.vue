<template>
  <div class="row">
    <div class="col-md-12 mb-3">
      <h1>{{ restaurant.name }}</h1>
      <p class="badge badge-secondary mt-1 mb-3">
        {{ restaurant.categoryName }}
      </p>
    </div>
    <div class="col-lg-4">
      <img class="img-responsive center-block" :src="restaurant.image" style="width: 250px; margin-bottom: 25px" />
      <div class="contact-info-wrap">
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
    <div class="col-lg-8">
      <p>{{ restaurant.description }}</p>
      <router-link class="btn btn-primary btn-border mr-2"
        :to="{ name: 'restaurant-dashboard', params: { id: restaurant.id } }">Dashboard</router-link>


      <button type="button" class="btn btn-danger btn-border mr-2" v-if="restaurant.isFavorited" @click="deleteFavorite">
        移除最愛
      </button>
      <button type="button" class="btn btn-primary btn-border mr-2" v-else @click="addFavorite">
        加到最愛
      </button>
      <button type="button" class="btn btn-danger like mr-2" v-if="restaurant.isLiked" @click="deleteLike">
        Unlike
      </button>
      <button type="button" class="btn btn-primary like mr-2" v-else @click="addLike">
        Like
      </button>
    </div>
  </div>
</template>

<script>
import userAPI from '../apis/users'
import { Toast } from '@/utils/helpers';
export default {
  name: "RestaurantDetail",
  props: {
    initialuserrestaurant: {
      type: Object,
      require: true,
    },
  },
  data() {
    return {
      restaurant: this.initialuserrestaurant,
    };
  },
  watch: {
    initialuserrestaurant(newvalue) {
      this.restaurant = {
        ...this.restaurant,
        ...newvalue,
      };
    },
  },
  methods: {
    async addFavorite() {
      try {
        const response = await userAPI.addFavorite({ restaurantId: this.restaurant.id })
        if (response.data.status === 'error') {
          throw new Error(response.data.message)
        }
        this.restaurant = {
          ...this.restaurant,
          isFavorited: true,
        };
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法加入最愛'
        })
      }

    },
    async deleteFavorite() {
      try {
        const response = await userAPI.deleteFavorite({ restaurantId: this.restaurant.id })
        if (response.data.status === 'error') {
          throw new Error(response.data.message)
        }
        this.restaurant = {
          ...this.restaurant,
          isFavorited: false,
        };
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法移除最愛'
        })
      }

    },
    async addLike() {
      try {
        const response = await userAPI.addLiked({ restaurantId: this.restaurant.id })
        if (response.data.status === 'error') {
          throw new Error(response.data.message)
        }
        this.restaurant = {
          ...this.restaurant,
          isLiked: true,
        };
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法新增like'
        })
      }

    },
    async deleteLike() {
      try {
        const response = await userAPI.deleteLiked({ restaurantId: this.restaurant.id })
        if (response.data.status === 'error') {
          throw new Error(response.data.message)
        }
        this.restaurant = {
          ...this.restaurant,
          isLiked: false,
        };
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法移除like'
        })
      }

    },
  },
};
</script>

<style scoped>
.col-lg-8 p,
.contact-info-wrap li,
.contact-info-wrap strong {
  font-family: serif;
  font-size: 17px;
}
</style>