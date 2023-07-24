<template>
  <div class="container py-5">
    <NavTabs />
    <SpinNer v-if="isLoading" />
    <template v-else>
      <h1 class="mt-5">最新動態</h1>
      <hr />
      <div class="row">
        <div class="col-md-6">
          <h3>最新餐廳</h3>
          <!-- 最新餐廳 NewestRestaurants -->
          <NewestRestaurantsVue v-bind:restaurants="restaurants" />
        </div>
        <div class="col-md-6">
          <!-- 最新評論 NewestComments-->
          <h3>最新評論</h3>
          <NewestCommentsVue v-bind:comments="comments" />
        </div>
      </div>
    </template>

  </div>
</template>

<script>
import NavTabs from "../components/NavTabs.vue";
import NewestRestaurantsVue from "@/components/NewestRestaurants.vue";
import NewestCommentsVue from "@/components/NewestComments.vue";
import { Toast } from "@/utils/helpers";
import restaurantsAPI from "@/apis/restaurants";
import SpinNer from '@/components/SpinNer'

export default {
  components: {
    NavTabs,
    NewestRestaurantsVue,
    NewestCommentsVue,
    SpinNer
  },
  data() {
    return {
      restaurants: [],
      comments: [],
      isLoading: true
    };
  },
  methods: {
    async fetchFeeds() {
      try {
        const response = await restaurantsAPI.getFeeds({});
        console.log(response)
        this.restaurants = response.data.data.restaurants;
        this.comments = response.data.data.comments.filter(
          (comment) => comment.Restaurant && comment.text
        );
        this.isLoading = false
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法取得資料",
        });
      }
    },
  },
  created() {
    this.fetchFeeds();
  },
};
</script>