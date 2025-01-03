import { ref } from "@vue/reactivity"
import { defineStore } from 'pinia'


export const useUserStore = defineStore('user', () => {
  const isLoginUser = ref(Boolean(localStorage.getItem('token')));
  const user = ref(null);
  const setUser = (value) => {
    user.value = value
  }
  const setIsLoginUser = (value) => {
    isLoginUser.value = value
  }

  return { isLoginUser, setIsLoginUser, user, setUser}
})