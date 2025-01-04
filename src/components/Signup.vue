<script setup>
import { reactive } from 'vue';
import { signup } from '../requests/user';
import { useRouter } from 'vue-router';

const router = useRouter()
const form = reactive({
    name: "",
    emai: "",
    password: "",
    password_confirmation: ""
})

async function handleSignup() {
    const data = await signup(form);
}


</script>

<template>
    <div class="auth-form">
        <h2>Регистрация</h2>
        <div class="inputs-form">
            <el-input v-model="form.name" 
                size="large" 
                placeholder="ФИО" />
            <el-input 
                v-model="form.email" 
                size="large"
                type="email" 
                placeholder="email" />
            <el-input 
                v-model="form.password" 
                size="large" 
                placeholder="пароль" 
                type="password"
                show-password/>
            <el-input 
                v-model="form.password_confirmation" 
                size="large" 
                placeholder="Потверждение пароля" 
                type="password"
                show-password />
            <el-button @click="handleSignup" size="large" plain >Зарегистрироваться</el-button>
            <el-button @click="router.push('/auth')" size="large" plain >Войти</el-button>
        </div>
    </div>
</template>

<style scoped>

:global(.el-button + .el-button) {
    margin-left: 0;
}
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