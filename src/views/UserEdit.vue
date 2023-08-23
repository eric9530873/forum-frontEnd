<template>
  <div class="container py-5">
    <form @submit.stop.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">Name</label>
        <input v-model="currentUser.name" id="name" type="text" name="name" class="form-control" placeholder="Enter Name"
          required />
      </div>

      <div class="form-group">
        <label for="image">Image</label>
        <img v-if="currentUser.image" :src="currentUser.image" class="d-block img-thumbnail" width="200px" height="200px"
          alt="" />
        <input id="image" type="file" name="image" accept="image/*" class="form-control-file"
          @change="handleFileChange" />
      </div>

      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>


<script>
import { mapState } from 'vuex';
import { Toast } from '@/utils/helpers';
import usersAPI from '../apis/users'

export default {
  name: "UserEdit",

  methods: {
    handleFileChange(e) {
      console.log(e.target.files);
      if (e.target.length === 0) {
        this.currentUser.image = "";
      } else {
        const imageURL = window.URL.createObjectURL(e.target.files[0]);
        this.currentUser.image = imageURL;
      }
    },
    async handleSubmit(e) {
      try {
        if (!this.currentUser.name) {
          Toast.fire({
            icon: 'warning',
            title: '您尚未填寫姓名'
          })
          return
        }
        const form = e.target
        console.log(e.target)
        const formData = new FormData(form)

        const response = await usersAPI.upDate({ userId: this.currentUser.id, formData })

        if (response.data.status === 'error') {
          throw new Error(response.data.message)
        }

        this.$router.push({ name: 'user', params: { id: this.currentUser.id } })
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法送出'
        })
      }
    }
  },
  computed: {
    ...mapState(['currentUser'])
  }
};
</script>