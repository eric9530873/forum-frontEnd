<template>
  <div class="container py-5">
    <form class="w-100" @submit.prevent.stop="handleSubmit">
      <div class="text-center mb-4">
        <h1 class="h3 mb-3 font-weight-normal">Sign In</h1>
      </div>

      <div class="form-label-group mb-2">
        <label for="email">email</label>
        <input id="email" v-model="email" name="email" type="email" class="form-control" placeholder="email"
          autocomplete="username" required autofocus />
      </div>

      <div class="form-label-group mb-3">
        <label for="password">Password</label>
        <input id="password" v-model="password" name="password" type="password" class="form-control"
          placeholder="Password" autocomplete="current-password" required />
      </div>

      <button :disabled="isProcessing" class="btn btn-lg btn-primary btn-block mb-3" type="submit">
        Submit
      </button>

      <div class="text-center mb-3">
        <p>
          <router-link to="/signup"> Sigh Up </router-link>
        </p>
      </div>

      <p class="mt-5 mb-3 text-muted text-center">&copy; 2017-2018</p>
    </form>
  </div>
</template>

<script>
import authorizationAPI from "@/apis/authorization";
import { Toast } from "../utils/helpers";

export default {
  data() {
    return {
      email: "",
      password: "",
      isProcessing: false,
    };
  },
  methods: {
    async handleSubmit() {
      try {
        if (!this.email || !this.password) {
          Toast.fire({
            icon: "warning",
            title: "請填入 email 和 password",
          });
          return;
        }

        //防止連按
        this.isProcessing = true;

        const response = await authorizationAPI.signIn({
          email: this.email,
          password: this.password,
        });

        const { data } = response;
        console.log(response)
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        localStorage.setItem("token", data.data.token);

        this.$store.commit("setcurrentuser", data.data.user);

        this.$router.push("/restaurants");
      } catch (error) {
        //改回false
        this.isProcessing = false;
        this.password = "";
        Toast.fire({
          icon: "warning",
          title: "輸入的帳號密碼有誤",
        });

        console.log("error", error);
      }
    },
  },
};
</script>