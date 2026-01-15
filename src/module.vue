<template>
  <private-view title="Orders">
    <template #headline>
      <v-breadcrumb :items="[{ name: 'Orders', to: '/orders' }]" />
    </template>

    <template #title-outer:prepend>
      <v-button class="header-icon" rounded disabled icon secondary>
        <v-icon name="orders" />
      </v-button>
    </template>

    <div class="orders-container">
      <StatsCards :orders="orders" />
      <OrderChart :orders="orders" />

      <RecentOrders
        :orders="pagedOrders"
        :loading="loading"
        :has-more="hasMore"
        v-model:search="searchQuery"
        v-model:status="statusFilter"
        @add="openAddModal"
        @edit="openEditModal"
        @delete="deleteOrder"
        @load-more="orderStore.loadMore"
      />

      <OrderModal
        :active="isModalActive"
        :order="editingOrder"
        @close="isModalActive = false"
        @save="handleSave"
      />
    </div>
  </private-view>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useOrderStore } from "./store/orderStore";
import type { Order } from "./types";
import StatsCards from "./components/StatsCards.vue";
import OrderChart from "./components/OrderChart.vue";
import RecentOrders from "./components/RecentOrders.vue";
import OrderModal from "./components/OrderModal.vue";
import "./styles/order-module.css";

const orderStore = useOrderStore();
const { orders, searchQuery, statusFilter, pagedOrders, loading, hasMore } = storeToRefs(orderStore);

const isModalActive = ref(false);
const editingOrder = ref<Order | null>(null);

const openAddModal = () => {
  editingOrder.value = null;
  isModalActive.value = true;
};

const openEditModal = (id: number) => {
  const order = orders.value.find((o) => o.id === id);
  if (order) {
    editingOrder.value = { ...order };
    isModalActive.value = true;
  }
};

const handleSave = (order: Order) => {
  if (editingOrder.value) {
    orderStore.updateOrder(order);
  } else {
    orderStore.addOrder(order);
  }
  isModalActive.value = false;
};

const deleteOrder = (id: number) => {
  orderStore.deleteOrder(id);
};
</script>
