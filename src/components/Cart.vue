<script setup>

</script>

<template>
    <div>
        <el-checkbox
            :indeterminate="true"
        >
            Выбрать все
        </el-checkbox>
    </div>
    <div class="cart-list">
        <div v-for="item in 10" class="cart-item">
            <el-checkbox

                :indeterminate="true"
            >
            </el-checkbox>
            <el-image src="https://avatars.mds.yandex.net/i?id=ca9cf06436fde06a800e87bb3711d167_l-10599899-images-thumbs&n=13" />
            <div class="cart-description">
                <div>Описание:</div>
                <div>Описание Описание Описание Описание Описание Описание Описание Описание</div>
            </div>
            <div class="cart-price">
                ₽ 12500
            </div>
            <div>
                <el-input-number  :min="1" :max="10" />
            </div>
            <div class="cart-delete">
                <el-icon><Delete /></el-icon>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

.cart-list {
    display: flex;
    gap: 1.5rem;
    flex-direction: column;
    height: 100%;
    width: 100%;
}

.cart-item {
    position: relative;
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 20px;
    height: 120px;
    border-radius: 16px;
    border: 1px solid black;
}

:deep(.el-image) {
    width: 200px;
    border-radius: 16px;
    overflow: hidden;
}

.cart-price {
    flex-shrink: 0;
}

.cart-delete {
    position: absolute;
    right: 20px;
    top: 10px;
    cursor: pointer;

    :hover :deep(path) {
       fill: red;
    }
}
</style>