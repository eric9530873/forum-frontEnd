<template>
  <div class="container py-5">
    <!-- 1. 使用先前寫好的 AdminNav -->
    <AdminNav />

    <form class="my-4">
      <div class="form-row">
        <div class="col-auto">
          <input type="text" class="form-control" placeholder="新增餐廳類別..." v-model="newCategoryName" />
        </div>
        <div class="col-auto">
          <button @click.stop.prevent="createCategory()" type="button" class="btn btn-primary">
            新增
          </button>
        </div>
      </div>
    </form>
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col" width="60">#</th>
          <th scope="col">Category Name</th>
          <th scope="col" width="210">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="category in categories" :key="category.id">
          <th scope="row">
            {{ category.id }}
          </th>
          <td class="position-relative">
            <div v-show="!category.isEditing" class="category-name">
              {{ category.name }}
            </div>
            <input v-show="category.isEditing" v-model="category.name" type="text" class="form-control" />
            <span v-show="category.isEditing" @click="handleCancle(category.id)" class="cancel">
              ✕
            </span>
          </td>
          <td class="d-flex justify-content-between">
            <button v-show="!category.isEditing" type="button" class="btn btn-link mr-2"
              @click.stop.prevent="toggleIsEditing(category.id)">
              Edit
            </button>
            <button v-show="category.isEditing" type="button" class="btn btn-link mr-2" @click="
              updateCategory({ categoryId: category.id, name: category.name })
              ">
              Save
            </button>
            <button type="button" class="btn btn-link mr-2" @click.stop.prevent="deleteCategory(category.id)">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import AdminNav from "@/components/AdminNav";
// import { v4 as uuidv4 } from "uuid";
import adminAPI from "../apis/admin";
import { Toast } from "@/utils/helpers";

export default {
  name: "AdminCategories",
  components: {
    AdminNav,
  },
  data() {
    return {
      categories: [],
      newCategoryName: "",
    };
  },
  methods: {
    async fetchCategories() {
      try {
        const response = await adminAPI.categories.get();
        console.log(response)
        this.categories = response.data.data[0].map((category) => {
          return {
            ...category,
            isEditing: false,
            nameCached: "",
          };
        });
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法取得",
        });
      }
    },
    async createCategory() {
      try {
        const response = await adminAPI.categories.create({
          name: this.newCategoryName,
        });
        if (response.data.status !== "success") {
          throw new Error(response);
        }
        this.categories.push({
          id: response.data.categoryId,
          name: this.newCategoryName,
        });
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法新增",
        });
      }
    },
    async deleteCategory(categoryId) {
      try {
        const response = await adminAPI.categories.delete({ categoryId });
        if (response.data.status !== "success") {
          throw new Error(response.data.message);
        }
        this.categories = this.categories.filter(
          (category) => category.id !== categoryId
        );
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法刪除",
        });
      }
    },
    async updateCategory({ categoryId, name }) {
      try {
        const response = await adminAPI.categories.upDate({ categoryId, name });
        if (response.data.status !== "success") {
          throw new Error(response.data.message);
        }
        this.toggleIsEditing(categoryId);
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法更改",
        });
      }
    },
    toggleIsEditing(categoryId) {
      this.categories = this.categories.map((category) => {
        if (categoryId === category.id) {
          return {
            ...category,
            isEditing: !category.isEditing,
            nameCached: category.name,
          };
        }
        return category;
      });
    },
    handleCancle(categoryId) {
      this.categories = this.categories.map((category) => {
        if (category.id === categoryId) {
          return {
            ...category,
            name: category.nameCached,
          };
        }
        return category;
      });
      this.toggleIsEditing(categoryId);
    },
  },
  created() {
    this.fetchCategories();
  },
};
</script>

<style scoped>
.category-name {
  padding: 0.375rem 0.75rem;
  border: 1px solid transparent;
  outline: 0;
  cursor: auto;
}

.btn-link {
  width: 62px;
}

.cancel {
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  border: 1px solid #aaaaaa;
  border-radius: 50%;
  user-select: none;
  cursor: pointer;
  font-size: 12px;
}
</style>