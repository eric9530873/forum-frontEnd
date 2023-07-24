<template>
  <div class="container py-5">
    <NavTabs />
    <!-- 餐廳類別標籤 RestaurantsNavPills -->
    <RestaurantsNavPillsVue :categories="categories" />

    <div class="row">
      <!-- 餐廳卡片 RestaurantCard-->
      <RestaurantCardVue v-for="restaurant in restaurants" v-bind:key="restaurant.id" :initialrestaurant="restaurant" />
    </div>

    <!-- 分頁標籤 RestaurantPagination -->
    <RestaurantsPagination :currentPage="currentPage" :totalPage="totalPage" :previouPage="previouPage"
      :nextPage="nextPage" :categoryId="categoryId" />
  </div>
</template>


<script>
import NavTabs from "../components/NavTabs.vue";
import RestaurantCardVue from "@/components/RestaurantCard.vue";
import RestaurantsNavPillsVue from "@/components/RestaurantsNavPills.vue";
import RestaurantsPagination from "../components/RestaurantsPagination.vue";
import restaurantAPI from "../apis/restaurants";
import { Toast } from "@/utils/helpers";

export default {
  name: "RestaurantMain",
  components: {
    NavTabs,
    RestaurantCardVue,
    RestaurantsNavPillsVue,
    RestaurantsPagination,
  },
  data() {
    return {
      restaurants: [],
      categories: [],
      categoryId: -1,
      currentPage: 1,
      totalPage: [],
      previouPage: -1,
      nextPage: -1,
    };
  },
  methods: {
    async fetchRestaurants({ page, categoryId }) {
      try {
        const response = await restaurantAPI.getRestaurants({
          page: page,
          categoryId: categoryId,
        });
        console.log(response)
        this.restaurants = response.data.data.restaurants;
        this.categories = response.data.data.categories;
        this.categoryId = response.data.data.categoryId;
        this.currentPage = response.data.data.pagination.currentPage;
        this.totalPage = response.data.data.pagination.pages;
        this.previouPage = response.data.data.pagination.prev;
        this.nextPage = response.data.data.pagination.next;
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法取得餐廳資料,請稍後再試",
        });
      }
    },
  },
  created() {
    const { page = "", categoryId = "" } = this.$route.query;
    this.fetchRestaurants({ page, categoryId });
  },
  beforeRouteUpdate(to, from, next) {
    const { page = "", categoryId = "" } = to.query;
    this.fetchRestaurants({ page, categoryId });
    next();
  },
};
</script>