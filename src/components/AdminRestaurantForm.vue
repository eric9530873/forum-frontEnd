<template>
  <form @submit.stop.prevent="handleSubmit" v-if="!isLoading">
    <div class="form-group">
      <label for="name">Name</label>
      <input id="name" v-model="restaurant.name" type="text" class="form-control" name="name" placeholder="Enter name"
        required />
    </div>

    <div class="form-group">
      <label for="categoryId">Category</label>
      <select id="categoryId" class="form-control" name="categoryId" v-model="restaurant.categoryId" required>
        <option value="" selected disabled>--請選擇--</option>
        <option v-for="category in categories" :key="category.id" :value="category.id">
          {{ category.name }}
        </option>
      </select>
    </div>

    <div class="form-group">
      <label for="tel">Tel</label>
      <input id="tel" v-model="restaurant.tel" type="text" class="form-control" name="tel"
        placeholder="Enter telephone number" />
    </div>

    <div class="form-group">
      <label for="address">Address</label>
      <input id="address" v-model="restaurant.address" type="text" class="form-control" placeholder="Enter address"
        name="address" />
    </div>

    <div class="form-group">
      <label for="opening-hours">Opening Hours</label>
      <input id="opening-hours" v-model="restaurant.openingHours" type="time" class="form-control" name="opening_hours" />
    </div>

    <div class="form-group">
      <label for="description">Description</label>
      <textarea id="description" v-model="restaurant.description" class="form-control" rows="3" name="description" />
    </div>

    <div class="form-group">
      <label for="image">Image</label>
      <img v-if="restaurant.image" :src="restaurant.image" class="d-block mb-3 image-thumbnail" width="200px"
        height="200px" />
      <input id="image" type="file" name="image" accept="image/*" class="form-control-file" @change="handleFileChange" />
    </div>

    <button type="submit" class="btn btn-primary" :disabled="isprocessing">
      {{ isprocessing ? "處理中" : "送出" }}
    </button>
  </form>
</template>


<script>
import adminAPI from "../apis/admin";
import { Toast } from "@/utils/helpers";

export default {
  name: "AdminRestaurantForm",
  props: {
    initialrestaurant: {
      type: Object,
      default: () => {
        return {
          name: "",
          categoryId: "",
          tel: "",
          address: "",
          description: "",
          image: "",
          openingHours: "",
        };
      },
    },
    isprocessing: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      categories: [],
      restaurant: {
        ...this.initialrestaurant,
      },
      isLoading: true,
    };
  },
  watch: {
    initialrestaurant(newvalue, oldvalue) {
      console.log({ newvalue, oldvalue });
      this.restaurant = {
        ...this.restaurant,
        ...newvalue,
      };
    },
  },
  methods: {
    async fetchCategories() {
      try {
        const response = await adminAPI.categories.get();
        console.log(response)
        this.categories = response.data.data[0];
        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
        Toast.fire({
          icon: "error",
          title: "無法取得餐廳類別",
        });
      }
    },
    handleFileChange(e) {
      console.log(e.target.files);
      if (e.target.files.length == 0) {
        this.restaurant.image = "";
        return;
      }
      this.restaurant.image = window.URL.createObjectURL(e.target.files[0]);
    },
    handleSubmit(e) {
      if (!this.restaurant.name || !this.restaurant.description || !this.restaurant.openingHours || !this.restaurant.address || !this.restaurant.tel) {
        Toast.fire({
          icon: "warning",
          title: "請填寫空白欄位",
        });
        return;
      }

      const formData = new FormData(e.target);
      this.$emit("after-submit", formData);
    },
  },
  created() {
    this.fetchCategories();
  },
};
</script>