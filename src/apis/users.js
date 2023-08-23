import { apiHelper } from "@/utils/helpers";


export default {
    getCurrentUser() {
        return apiHelper.get('/get_current_user')
    },
    get({ userId }) {
        return apiHelper.get(`/users/${userId}`)
    },
    addFavorite({ restaurantId }) {
        return apiHelper.post(`/favorite/${restaurantId}`, null)
    },
    deleteFavorite({ restaurantId }) {
        return apiHelper.delete(`/favorite/${restaurantId}`)
    },
    addLiked({ restaurantId }) {
        return apiHelper.post(`/like/${restaurantId}`, null)
    },
    deleteLiked({ restaurantId }) {
        return apiHelper.delete(`/like/${restaurantId}`)
    },
    addFollowing({ userId }) {
        return apiHelper.post(`/following/${userId}`, null)
    },
    deleteFollowing({ userId }) {
        return apiHelper.delete(`/following/${userId}`)
    },
    getTopUsers() {
        return apiHelper.get('/users/top')
    },
    upDate({ userId, formData }) {
        return apiHelper.put(`/users/${userId}`, formData)
    }

}