<script setup>
import { HeartIcon } from "@heroicons/vue/24/solid"
import { HeartIcon as HeartIconOutline  } from "@heroicons/vue/24/outline"
</script>

<template>
    <h2>Каталог</h2>
    <div class="products-list">
        <el-card v-for="idx in 10" class="products-item with-sale">
            <template #header>
                <div class="card-header">
                    <span>Card name</span>
                    <span class="products-stock">50%</span>
                </div>
            </template>
            <div class="products-body">
                <el-image src="https://avatars.mds.yandex.net/i?id=ca9cf06436fde06a800e87bb3711d167_l-10599899-images-thumbs&n=13" />
                <div>Описание:</div>
                <div>
                    description description description description description description description description description description description
                </div>
            </div>
            <template #footer>
                <div class="products-footer">
                    <div class="products-price">₽ 12500</div>
                    <div class="favorites">
                        <heart-icon-outline v-if="true"/>
                        <heart-icon v-else/>
                    </div>
                    <div class="products-cart">
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
}

:deep(.el-image__inner) {
    border-radius: var(--el-border-radius-base);
}
</style>