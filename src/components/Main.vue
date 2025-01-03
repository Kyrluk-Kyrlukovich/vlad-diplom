<script setup>
import { HeartIcon } from "@heroicons/vue/24/solid"
import { HeartIcon as HeartIconOutline  } from "@heroicons/vue/24/outline"
import { addToFavorites, products } from "../requests/products";
import { ref } from "vue";
import { addToCart } from "../requests/cart";

const productsData = ref([])

async function handleProducts() {
    const data = await products();

    productsData.value = data.data.data;
}

async function handleAddToCart(id, count = 1) {
    await addToCart({
        product_id: id,
        quantity: count
    });
    await handleProducts();
}

async function handleAddToFavorites(id) {
    await addToFavorites(id, {product_id: id});
}

handleProducts();
</script>

<template>
    <h2>Каталог</h2>
    <div class="products-list">
        <el-card v-for="product in productsData" :key="product.slug" class="products-item with-sale">
            <template #header>
                <div class="card-header">
                    <span>{{ product.name }}</span>
                    <span class="products-stock">50%</span>
                </div>
            </template>
            <div class="products-body">
                <el-image src="https://avatars.mds.yandex.net/i?id=ca9cf06436fde06a800e87bb3711d167_l-10599899-images-thumbs&n=13" />
                <div>Описание:</div>
                <div>
                    {{ product.description }}
                </div>
            </div>
            <template #footer>
                <div class="products-footer">
                    <div class="products-price">₽ {{ product.price }}</div>
                    <div class="favorites">
                        <heart-icon-outline v-if="true" @click="handleAddToFavorites(product.id)"/>
                        <heart-icon v-else/>
                    </div>
                    <div class="products-cart" @click="handleAddToCart(product.id)">
                        <el-icon><Plus /></el-icon>
                        <el-icon><ShoppingCart /></el-icon>
                    </div>
                </div>
            </template>
        </el-card>
    </div>
</template>

<style scoped>

.card-header {
    display: flex;
    justify-content: space-between;
}

.products-list {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
}

.products-item {
    width: calc(33% - 1rem);
    display: flex;
    flex-direction: column;
}

.products-footer {
    display: flex;
}

.favorites {
    width: 20px;
    display: flex;
    align-items: center;
    margin-right: 10px;
}

.products-price {
    margin-right: auto;
    font-weight: bold;
}

.products-stock {
    background-color: greenyellow;
    color: rgb(0, 0, 0);
    padding: 6px 12px;
    border-radius: 15px;
    font-size: 0.75em;
    font-weight: 500;
}

.products-cart {
    display: flex;
    gap: 5px;
    cursor: pointer;
    padding: 5px 7.5px;
    border: 1px solid black;
    border-radius: 15px ;
}

:deep(.el-card__footer) {
    border: none;
    margin-top: auto;
}

:deep(.el-image__inner) {
    border-radius: var(--el-border-radius-base);
}
</style>