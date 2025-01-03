<script setup>
import Aside from "./components/Aside.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Main from "./components/Main.vue";
import {ref, computed} from "@vue/reactivity"
import Cart from "./components/Cart.vue";
import { profile } from "./requests/user";
import { useUserStore } from "./store";

const tabs = reactive([
    {
        code: 'main',
        component: Main
    },
    {
        code: 'cart',
        component: Cart
    }
])

const activeTabCode = ref('main')
const isAuthUser = ref(false);
const userStore = useUserStore();
const getActiveTab = computed(() => {
    return tabs.find(tab => tab.code === activeTabCode.value)
})

async function handleProfile() {
    try {
        const data = await profile();
        userStore.setUser(data.data)
    } catch (e) {
        isAuthUser.value = false
    }
}

handleProfile();

</script>

<template>
    <el-container>
        <el-aside width="350px">
            <Aside/>
        </el-aside>
        <el-container>
            <el-header>
                <Header/>
            </el-header>
            <el-main>
                <router-view></router-view>
            </el-main>
            <el-footer>
                <Footer/>
            </el-footer>
        </el-container>
    </el-container>
</template>

<style scoped>

</style>
