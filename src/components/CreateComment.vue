<template>
  <form @submit.prevent="handleSubmit">
    <div class="form-group mb-4">
      <label for="text">留下評論：</label>
      <textarea v-model="text" class="form-control" rows="3" name="text" />
    </div>
    <div class="d-flex align-items-center justify-content-between">
      <button type="button" class="btn btn-link" @click="$router.back()">
        回上一頁
      </button>
      <button type="submit" class="btn btn-primary mr-0">Submit</button>
    </div>
  </form>
</template>

<script>

import commentsAPI from "@/apis/comments";
import { Toast } from "@/utils/helpers";

export default {
  name: "CreateComment",
  props: {
    restaurantId: {
      type: Number,
      require: true,
    },
  },
  data() {
    return {
      text: "",
    };
  },
  methods: {
    async handleSubmit() {
      console.log(this.restaurantId)
      try {
        if (!this.text) {
          Toast.fire({
            icon: 'warning',
            title: '您尚未填寫任何評論'
          })
          return
        }
        const response = await commentsAPI.creat({ restaurantId: this.restaurantId, text: this.text })

        if (response.data.status === 'error') {
          throw new Error(response.data.message)
        }
        this.$emit("after-create-comment", {
          commentId: response.data.commentId,
          restaurantId: this.restaurantId,
          text: this.text,
        }),
          (this.text = "");
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法新增評論'
        })
      }

    },
  },
};
</script>

<style scoped>
.form-group {
  margin: 21px 0 8px;
}
</style>