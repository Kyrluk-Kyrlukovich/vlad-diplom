<script setup>
import {ref} from "vue";

const searchValue = ref('')
</script>

<template>
    <div class="header">
        <el-input
            v-model="searchValue"
            clearable
            placeholder="Type something"
        >
            <template #prefix>
                <el-icon class="el-input__icon">
                    <search/>
                </el-icon>
            </template>
        </el-input>
        <router-link to="/cart" class="cart">
                <el-icon :size="17"><ShoppingCartFull /></el-icon>
        </router-link>
        <div class="profile">
            <el-avatar shape="square" size="40" src="https://i.pinimg.com/736x/ab/30/db/ab30db21e95215bdfbabb8010e357298.jpg" />
            <div>
                Влад Лыков
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.header {
    display: flex;
    align-items: center;
    height: 100%;

    & :deep(.el-input) {
        width: 70%;
        margin-right: auto;
    }

    .cart {
        margin-right: 10px;
        display: flex;
        align-items: center;

        cursor: pointer;
        padding: 5px 15px;
        border: 1px solid black;
        border-radius: 15px;
    }

    .profile {
        display: flex;
        align-items: center;
        gap: 10px;

        & :deep(.el-avatar) {
            flex-shrink: 0;
        }
    }
}
</style>