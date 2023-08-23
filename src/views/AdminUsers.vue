<template>
    <div class="container py-5">
        <!-- AdminNav Component -->
        <AdminNav />
        <table class="table">
            <thead class="thead-dark">
                <tr>
                    <th scope="col">
                        #
                    </th>
                    <th scope="col">
                        Email
                    </th>
                    <th scope="col">
                        Role
                    </th>
                    <th scope="col" width="140">
                        Action
                    </th>
                </tr>
            </thead>
            <tbody v-for="user in users" :key="user.id">
                <tr>
                    <th scope="row">
                        1
                    </th>
                    <td>{{ user.email }}</td>
                    <td>{{ user.isAdmin ? 'admin' : 'user' }}</td>
                    <td>
                        <button v-if="currentUser.id !== user.id"
                            @click="addAdmin({ userId: user.id, isAdmin: user.isAdmin })" type="button"
                            class="btn btn-link">
                            {{ user.isAdmin ? 'set as user' : 'set as admin' }}
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import AdminNav from '@/components/AdminNav.vue';
import adminAPI from '../apis/admin'
import { Toast } from '@/utils/helpers';
import { mapState } from 'vuex';
export default {
    name: 'AdminUsers',
    components: {
        AdminNav
    },
    data() {
        return {
            users: [],
        }
    },
    methods: {
        async fetchUsers() {
            try {
                const response = await adminAPI.users.get()
                console.log(response)
                if (response.data.status === 'error') {
                    throw new Error(response.data.message)
                }
                this.users = response.data.data
            } catch (error) {
                Toast.fire({
                    icon: 'error',
                    title: '無法取得使用者資料'
                })
            }
        },
        async addAdmin({ userId, isAdmin }) {
            try {
                const response = await adminAPI.users.upDate({ userId, isAdmin: (!isAdmin).toString() })
                if (response.data.status === 'error') {
                    throw new Error(response.data.message)
                }
                this.users = this.users.map(user => {
                    if (user.id === userId) {
                        return {
                            ...user,
                            isAdmin: !isAdmin
                        }
                    }
                    return user
                })
            } catch (error) {
                Toast.fire({
                    icon: 'error',
                    title: '無法變更管理員'
                })
            }
        }
    },
    created() {
        this.fetchUsers()
    },
    computed: {
        ...mapState(["currentUser"]),
    }
}
</script>