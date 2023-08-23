<template>
  <table class="table">
    <thead class="thead-dark">
      <tr>
        <th scope="col">#</th>
        <th scope="col">Category</th>
        <th scope="col">Name</th>
        <th scope="col" width="300">操作</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="restaurant in restaurants" :key="restaurant.id">
        <th scope="row">
          {{ restaurant.id }}
        </th>
        <td>{{ restaurant.Category ? restaurant.Category.name : "未分類" }}</td>
        <td>{{ restaurant.name }}</td>
        <td class="d-flex justify-content-between">
          <router-link :to="{ name: 'admin-restaurant', params: { id: restaurant.id } }"
            class="btn btn-link">Show</router-link>

          <router-link :to="{
            name: 'admin-restaurant-edit',
            params: { id: restaurant.id },
          }" class="btn btn-link">Edit</router-link>

          <button @click.prevent="deleteRestaurant(restaurant.id)" type="button" class="btn btn-link">
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import adminAPI from "../apis/admin";
import { Toast } from "@/utils/helpers";

export default {
  data() {
    return {
      restaurants: [],
    };
  },
  methods: {
    async fetchRestaurants() {
      try {
        const response = await adminAPI.restaurants.get();
        console.log(response)
        this.restaurants = response.data.data.restaurants;
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法取得",
        });
      }
    },
    async deleteRestaurant(restaurantId) {
      try {
        const response = await adminAPI.restaurants.deleteRestaurant({
          restaurantId,
        });
        if (response.data.status !== "success") {
          throw new Error(response.data.message);
        }
        this.restaurants = this.restaurants.filter(
          (restaurant) => restaurant.id !== restaurantId
        );
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法刪除",
        });
      }
    },
  },
  created() {
    this.fetchRestaurants();
  },
};
</script>