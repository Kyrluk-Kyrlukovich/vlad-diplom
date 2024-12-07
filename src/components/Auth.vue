<script setup>

</script>

<template>
    <div class="auth-form">
        <h2>Авторизация</h2>
        <div class="inputs-form">
            <el-input size="large" placeholder="email" />
            <el-input size="large" placeholder="пароль" />
            <el-button size="large" plain >Авторизоваться</el-button>
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