<template>
    <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        :collapse="isCollapse"
        @open="handleOpen"
        @close="handleClose"
    >
        <el-menu-item @click="router.push('/')">
            <template #title>
                <el-icon><HomeFilled /></el-icon>
                <span>Каталог</span>
            </template>
        </el-menu-item>
        <el-menu-item @click="router.push('/cart')">
            <template #title>
                <el-icon><ShoppingCart /></el-icon>
                <span>Корзина</span>
            </template>
        </el-menu-item>
        <el-menu-item @click="router.push('/favorites')">
            <template #title>
                <el-icon><heart-icon /></el-icon>
                <span>Избранное</span>
            </template>
        </el-menu-item>
        <el-menu-item @click="router.push('/orders')">
            <template #title>
                <el-icon><clipboard-document-check-icon /></el-icon>
                <span>Мои заказы</span>
            </template>
        </el-menu-item>
    </el-menu>
</template>
<script setup>
import {useRouter} from "vue-router";
import {HeartIcon, ClipboardDocumentCheckIcon} from "@heroicons/vue/24/solid/index.js";

const router = useRouter();
</script>
<style scoped>

</style>