<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">美食達人</h1>
    <hr />
    <div class="row text-center">
      <UsersCardVue v-for="user in users" :key="user.id" :initialuser="user" />
    </div>
  </div>
</template>


<script>
import NavTabs from "../components/NavTabs.vue";
import UsersCardVue from "@/components/UsersCard.vue";
import usersAPI from "../apis/users";
import { Toast } from "@/utils/helpers";

export default {
  components: {
    NavTabs,
    UsersCardVue,
  },
  data() {
    return {
      users: [],
    };
  },
  methods: {
    async fetchUsers() {
      try {
        const response = await usersAPI.getTopUsers();
        console.log(response)
        this.users = response.data.data.users;
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法取得美食達人",
        });
      }
    },
  },
  created() {
    this.fetchUsers();
  },
};
</script>