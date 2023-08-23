<template>
  <div class="container py-5">
    <!-- 餐廳資訊頁 RestaurantDetail -->
    <RestaurantDetail :initialuserrestaurant="restaurant" :key="restaurant.id" />
    <hr />
    <!-- 餐廳評論 RestaurantComments -->
    <RestaurantCommentsVue :restaurantComments="restaurantComments" @after-delete-comment="afterDeleteComment" />
    <!-- 新增評論 CreateComment -->
    <CreateCommentVue :restaurantId="restaurant.id" @after-create-comment="afterCreateComment" />
  </div>
</template>

<script>
import RestaurantDetail from "../components/RestaurantDetail.vue";
import RestaurantCommentsVue from "@/components/RestaurantComments.vue";
import CreateCommentVue from "@/components/CreateComment.vue";
import restaurantAPI from "../apis/restaurants";
import { Toast } from "@/utils/helpers";
import { mapState } from "vuex";

export default {
  name: "RestaurantModal",
  components: {
    RestaurantDetail,
    RestaurantCommentsVue,
    CreateCommentVue,
  },
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
        isFavorited: false,
        isLiked: false,
      },
      restaurantComments: [],
    };
  },
  methods: {
    async fetchRestaurantModal({ restaurantId }) {
      try {
        const response = await restaurantAPI.getRestaurant({ restaurantId });
        console.log(response)
        this.restaurant = {
          id: response.data.data.restaurant.id,
          name: response.data.data.restaurant.name,
          categoryName: response.data.data.restaurant.Category
            ? response.data.data.restaurant.Category.name
            : "未分類",
          image: response.data.data.restaurant.image,
          openingHours: response.data.data.restaurant.opening_hours,
          tel: response.data.data.restaurant.tel,
          address: response.data.data.restaurant.address,
          description: response.data.data.restaurant.description,
          isFavorited: response.data.data.isFavorited,
          isLiked: response.data.data.isLiked,
        },
          this.restaurantComments = response.data.data.restaurant.Comments;
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法取得餐廳資料",
        });
      }
    },
    afterDeleteComment(commentId) {
      this.restaurantComments = this.restaurantComments.filter(
        (comment) => commentId !== comment.id
      );
    },
    afterCreateComment(payload) {
      const { commentId, restaurantId, text } = payload;
      this.restaurantComments.push({
        id: commentId,
        RestaurantId: restaurantId,
        User: {
          id: this.currentUser.id,
          name: this.currentUser.name,
        },
        text,
        createdAt: new Date(),
      });
    },
  },
  // beforeRouteUpdate(to, from, next) {
  //   this.fetchRestaurantModal(to.params.id);
  //   next();
  // },
  computed: {
    ...mapState(["currentUser"]),
  },
  created() {
    const { id: restaurantId } = this.$route.params
    this.fetchRestaurantModal({ restaurantId });
  }
};
</script>