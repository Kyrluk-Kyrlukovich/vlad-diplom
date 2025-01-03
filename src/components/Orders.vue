<template >
  <div class="orders">
    <div class="orders-wrapper">
      <div v-for="order in orderData" :key="order" class="orders-item">
        <el-card style="max-width: 480px">
          <template #header>
            <div class="orders-header">
              <span>{{ order.product.name }}</span>
              <span>₽ {{ order.product.price * order.quantity}}</span>
            </div>
          </template>
          <el-timeline>
          <el-timeline-item :timestamp="dayjs(order.created_at).format('DD.MM.YYYY hh:mm')" placement="top">
            <el-card>
              <h4>Заказ создан</h4>
              <p>{{ userStore.user.name }} создал заказ {{ dayjs(order.created_at).format('DD.MM.YYYY hh:mm') }}</p>
            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp="2018/4/3" placement="top">
            <el-card>
              <h4>Update Github template</h4>
              <p>Tom committed 2018/4/3 20:46</p>
            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp="2018/4/2" placement="top">
            <el-card>
              <h4>Update Github template</h4>
              <p>Tom committed 2018/4/2 20:46</p>
            </el-card>
          </el-timeline-item>
        </el-timeline>
        </el-card>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import { orders } from '../requests/orders';
import dayjs from 'dayjs';
import { useUserStore } from '../store';

const orderData = ref([]);

const userStore = useUserStore()

async function handleOrders() {
  const data = await orders ();

  orderData.value = data.data
}

handleOrders();
</script>
<style lang="scss" scoped>
  .orders {
    &-header {
      display: flex;
      width: 100%;
      justify-content: space-between;
    }

    &-wrapper {
      display: flex;
      flex-direction: column;
      gap: 2rem;

      :deep(.el-card) {
        width: 100%;
        max-width: 100% !important;
      }
    }
  }
</style>