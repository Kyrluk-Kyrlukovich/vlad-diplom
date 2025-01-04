<script setup>
import { reactive } from 'vue';
import { auth } from '../requests/user';
import { useUserStore } from '../store';
import { useRouter } from 'vue-router';
import { getToken, instance } from '../axios/axios';

const userStore = useUserStore();
const router = useRouter()

const form = reactive({
    email: "",
    password: ""
})

async function handleAuth() {
    const data = await auth(form);
    localStorage.setItem('token', data.data.access_token)

    console.log('instance.headers.Authorization', instance.defaults.headers.Authorization)

    if (instance.defaults.headers && instance.defaults.headers.Authorization)  {
        instance.defaults.headers.Authorization = `Bearer ${getToken()}`;
    }

    userStore.setIsLoginUser(Boolean(localStorage.getItem('token')))
    router.push('/')
}
</script>

<template>
    <div class="auth-form">
        <h2>Авторизация</h2>
        <div class="inputs-form">
            <el-input v-model="form.email" size="large" placeholder="email" />
            <el-input
                v-model="form.password" 
                size="large" 
                type="password" 
                show-password 
                placeholder="пароль" />
            <el-button @click="handleAuth" size="large" plain >Авторизоваться</el-button>
            <el-button @click="router.push('/signup')" size="large" plain >Зарегистрироваться</el-button>
        </div>
    </div>
</template>

<style scoped>
.auth-form {
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.inputs-form {
    margin-top: 2rem;
    min-width: 250px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
</style>