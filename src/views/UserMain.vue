<template>
  <div class="main">
    <div class="album py-5">
      <div class="container">
        <UserProfileCard :initialprofile="profile" :initialisfollowed="isFollowed" :key="profile.id" />
        <div class="row">
          <div class="col-md-4">
            <UserFollowingsCard :profile="profile" />
            <br />
            <UserFollowersCard :profile="profile" />
          </div>
          <div class="col-md-8">
            <UserCommentsCard :profile="profile" />
            <br />
            <UserFavoritedRestaurantsCard :profile="profile" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>




<script>
import UserProfileCard from "@/components/UserProfileCard.vue";
import UserFollowersCard from "@/components/UserFollowersCard.vue";
import UserFollowingsCard from "@/components/UserFollowingsCard.vue";
import UserCommentsCard from "@/components/UserCommentsCard.vue";
import UserFavoritedRestaurantsCard from "@/components/UserFavoritedRestaurantsCard.vue";
import usersAPI from '../apis/users'
import { Toast } from "@/utils/helpers";
import { mapState } from "vuex";


export default {
  name: "UserMain",
  components: {
    UserProfileCard,
    UserFollowersCard,
    UserFollowingsCard,
    UserCommentsCard,
    UserFavoritedRestaurantsCard,
  },
  data() {
    return {
      profile: {},
      isFollowed: '',
    };
  },
  methods: {
    async fetchProfile(userId) {
      try {
        const response = await usersAPI.get(userId)
        this.profile = response.data.data
        this.isFollowed = response.data.data.isFollowed
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法取得'
        })
      }

    },
  },
  created() {
    const { id: userId } = this.$route.params
    this.fetchProfile({ userId });
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  beforeRouteUpdate(to, from, next) {
    const { id: userId } = to.params
    this.fetchProfile({ userId })
    next()
  },
};
</script>