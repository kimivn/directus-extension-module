<template>
  <div class="data-section">
    <div class="section-header">
      <h2>Recent Orders</h2>
      <v-button small @click="$emit('add')">
        <v-icon name="add" left />
        Add Order
      </v-button>
    </div>

    <div class="data-table">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Order Name</th>
            <th>Customer</th>
            <th>Status</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="order in orders" :key="order.id">
            <td>{{ order.id }}</td>
            <td>{{ order.name }}</td>
            <td>
              <div class="customer-info">
                <div class="customer-name">{{ order.customer_name }}</div>
                <div class="customer-email">{{ order.customer_email }}</div>
              </div>
            </td>
            <td>
              <span class="status-badge" :class="order.status">
                {{ order.status }}
              </span>
            </td>
            <td>{{ order.order_date }}</td>
            <td class="actions">
              <v-button x-small icon @click="$emit('edit', order.id)">
                <v-icon name="edit" small />
              </v-button>
              <v-button x-small icon @click="$emit('delete', order.id)">
                <v-icon name="delete" small />
              </v-button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Order } from "../types";

defineProps<{
  orders: Order[];
}>();

defineEmits<{
  (e: "add"): void;
  (e: "edit", id: number): void;
  (e: "delete", id: number): void;
}>();
</script>
