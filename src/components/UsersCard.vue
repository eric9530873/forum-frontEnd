<template>
  <div class="col-3">
    <router-link :to="{ name: 'user', params: { id: user.id } }">
      <img :src="user.image" width="140px" height="140px" />
    </router-link>
    <h2>{{ user.name }}</h2>
    <span class="badge badge-secondary">追蹤人數：{{ user.followerCount }}</span>
    <p class="mt-3">
      <button type="button" class="btn btn-danger" v-if="user.isFollowed" @click="deletdFollowed(user.id)">
        取消追蹤
      </button>
      <button type="button" class="btn btn-primary" v-else @click="addFollowed(user.id)">
        追蹤
      </button>
    </p>
  </div>
</template>

<script>
import userAPI from "../apis/users";
import { Toast } from "@/utils/helpers";

export default {
  name: "UserCard",
  props: {
    initialuser: {
      type: Object,
      require: true,
    },
  },
  data() {
    return {
      user: this.initialuser,
    };
  },
  methods: {
    async addFollowed(userId) {
      try {
        const response = await userAPI.addFollowing({ userId });
        if (response.data.status !== "success") {
          throw new Error(response.data.message);
        }
        console.log(this.user.FollowerCount);
        this.user = {
          ...this.user,
          isFollowed: true,
          FollowerCount: this.user.FollowerCount + 1,
        };
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法執行",
        });
      }
    },
    async deletdFollowed(userId) {
      try {
        const response = await userAPI.deleteFollowing({ userId });
        console.log(response);
        if (response.data.status !== "success") {
          throw new Error(response.data.message);
        }
        console.log(this.user.FollowerCount);
        this.user = {
          ...this.user,
          isFollowed: false,
          FollowerCount: this.user.FollowerCount - 1,
        };
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法執行",
        });
      }
    },
  },
};
</script>i