<template>
  <div class="card mb-3">
    <div class="row no-gutters">
      <div class="col-md-6">
        <img :src="profile.image" width="300px" height="300px" />
      </div>
      <div class="col-md-6">
        <div class="card-body">
          <h5 class="card-title">{{ profile.name }}</h5>
          <p class="card-text">{{ profile.email }}</p>
          <ul class="list-unstyled list-inline">
            <li>
              <strong>{{ profile.Comments.length ? profile.Comments.length : '0' }}</strong>
              已評論餐廳
            </li>
            <li>
              <strong>{{ profile.FavoritedRestaurants.length ? profile.FavoritedRestaurants.length : '0' }}</strong>
              收藏的餐廳
            </li>
            <li>
              <strong>{{ profile.Followers.length ? profile.Followers.length : '0' }}</strong>
              followings (追蹤者)
            </li>
            <li>
              <strong>{{ profile.Followings.length ? profile.Followings.length : '0' }}</strong>
              followers (追隨者)
            </li>
          </ul>
          <p></p>
          <template>
            <div style="display: contents" v-if="this.currentUser.id === this.profile.id">
              <router-link :to="{ name: 'user-edit', params: { id: profile.id } }" class="btn btn-primary mb-4">
                EDIT
              </router-link>
            </div>
            <form style="display: contents" v-else>
              <button v-if="isFollowed" type="submit" class="btn btn-danger" @click="deleteFollow(profile.id)">
                取消追蹤
              </button>
              <button v-else @click="addFollow(profile.id)" type="submit" class="btn btn-primary">
                追蹤
              </button>
            </form>
          </template>
          <p></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import usersAPI from '../apis/users'
import { mapState } from 'vuex';
import { Toast } from '@/utils/helpers';
export default {
  name: "UserProfileCard",
  props: {
    initialprofile: {
      type: Object,
      require: true,
    },
    initialisfollowed: {
      type: Boolean,
      require: true
    },
  },
  data() {
    return {
      profile: this.initialprofile,
      isFollowed: this.initialisfollowed,
    };
  },

  methods: {
    async deleteFollow() {
      try {
        const response = await usersAPI.deleteFollowing({ userId: this.profile.id })
        if (response.data.status === 'error') {
          throw new Error(response.data.message)
        }
        this.profile = {
          ...this.profile,
          isFollowed: false,
        };
        this.isFollowed = false
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法取消追蹤'
        })
      }

    },
    async addFollow() {
      try {
        const response = await usersAPI.addFollowing({ userId: this.profile.id })
        if (response.data.status === 'error') {
          throw new Error(response.data.message)
        }
        this.profile = {
          ...this.profile,
          isFollowed: true,
        };
        this.isFollowed = true
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法追蹤'
        })
      }

    },
  },
  computed: {
    ...mapState(["currentUser"]),
  },
};
</script>