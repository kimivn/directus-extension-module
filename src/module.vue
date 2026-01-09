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

      <RecentOrders
        :orders="orders"
        @add="openAddModal"
        @edit="openEditModal"
        @delete="deleteOrder"
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
import type { Stats, Order } from "./types";
import { mockStats, mockOrders } from "./mockup/mockData";
import StatsCards from "./components/StatsCards.vue";
import RecentOrders from "./components/RecentOrders.vue";
import OrderModal from "./components/OrderModal.vue";
import "./styles/order-module.css";

const stats = ref<Stats>(mockStats);
const orders = ref<Order[]>(mockOrders);

const isModalActive = ref(false);
const editingOrder = ref<Order | null>(null);

const refreshData = () => {
  stats.value.users = Math.floor(Math.random() * 100);
  stats.value.items = Math.floor(Math.random() * 2000);
  stats.value.lastUpdated = new Date().toLocaleDateString();
};

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
    const index = orders.value.findIndex((o) => o.id === order.id);
    if (index !== -1) {
      orders.value[index] = order;
    }
  } else {
    const newId = orders.value.length > 0 ? Math.max(...orders.value.map((o) => o.id)) + 1 : 1001;
    orders.value.unshift({
      ...order,
      id: newId,
    });
  }
  isModalActive.value = false;
};

const deleteOrder = (id: number) => {
  orders.value = orders.value.filter((order) => order.id !== id);
};
</script>
