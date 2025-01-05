<template >
  <div class="orders">
    <div class="orders-wrapper">
      <div v-for="order in orderData" :key="order.id" class="orders-item">
        <el-card style="max-width: 480px">
          <template #header>
            <div class="orders-header">
              <span>№ {{ order.id }}</span>
              <el-button 
                v-if="userStore.isAdmin && getStatus(order.status)" 
                :type="getStatus(order.status).typeBtn"
                @click="handleUpdateOrderStatus(order.id, getStatus(order.status).status)">
                {{ getStatus(order.status).textBtn }}
              </el-button>
              <span class="orders-header__price">₽ {{ order.total_price}}</span>
            </div>
          </template>
          <el-timeline>
          <el-timeline-item :timestamp="dayjs(order.created_at).format('DD.MM.YYYY hh:mm')" placement="top">
            <el-card>
              <h4>Заказ создан</h4>
              <p>{{ userStore.user.name }} создал заказ {{ dayjs(order.created_at).format('DD.MM.YYYY hh:mm') }}</p>
            </el-card>
          </el-timeline-item>
          <el-timeline-item v-if="order.status == 'pending'" timestamp="2018/4/3" placement="top">
            <el-card>
              <h4>Update Github template</h4>
              <p>Tom committed 2018/4/3 20:46</p>
            </el-card>
          </el-timeline-item>
          <el-timeline-item v-if="false" timestamp="2018/4/2" placement="top">
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
import { orders, updateOrderStatus } from '../requests/orders';
import dayjs from 'dayjs';
import { useUserStore } from '../store';

const orderData = ref([]);

const userStore = useUserStore()

const getStatus = (status) => {
    switch (status) {
      case 'created':
        return {
          textBtn: 'Ожидает',
          typeBtn: 'warning',
          status: 'pending'
        };
      case 'pending':
        return {
          textBtn: 'Завершить',
          typeBtn: 'success',
          status: 'completed',
        };
      case 'completed':
        return null;
      case 'canceled':
        return {
          textBtn: 'Отменить',
          typeBtn: 'danger',
          status: 'canceled',
        };
      default:
        return null;
    }
}

async function handleOrders() {
  const {data} = await orders();

  orderData.value = data.data
}

async function handleUpdateOrderStatus(id, status) {
  await updateOrderStatus(id, {
    status: status
  })

  await handleOrders()
}

handleOrders();
</script>
<style lang="scss" scoped>
  .orders {
    &-header {
      display: flex;
      width: 100%;
      gap: 0.5rem;
      align-items: center;
      &__price {
        margin-left: auto;
      }
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