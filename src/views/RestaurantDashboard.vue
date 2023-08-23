<template>
  <div class="container py-5">
    <div>
      <h1>{{ restaurant.name }}</h1>
      <span class="badge badge-secondary mt-1 mb-3">
        {{ restaurant.Category.name }}
      </span>
    </div>

    <hr />

    <ul>
      <li>評論數： {{ restaurant.Comments.length }}</li>
      <li>瀏覽次數： {{ restaurant.viewCount }}</li>
    </ul>

    <button type="button" class="btn btn-link" @click="$router.back()">
      回上一頁
    </button>
  </div>
</template>


<script>
import restaurantsAPI from '@/apis/restaurants';
import { Toast } from '@/utils/helpers';

export default {
  name: "RestaurantDashboard",
  data() {
    return {
      restaurant: [],
      restaurantComments: []
    };
  },
  methods: {
    async fetchRestaurantDashboard(restaurantId) {
      try {
        const response = await restaurantsAPI.getRestaurantDashboard({ restaurantId })
        console.log(response)
        if (response.data.status === 'error') {
          throw new Error(response.data.message)
        }
        this.restaurant = response.data.data;
        this.restaurantComments = response.data.data
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法顯示'
        })
      }

    },
  },
  created() {
    const { id: restaurantId } = this.$route.params
    this.fetchRestaurantDashboard(restaurantId);
  },
};
</script>