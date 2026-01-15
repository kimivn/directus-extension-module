<template>
  <div class="data-section">
    <div class="section-header">
      <div class="header-left">
        <h2>Recent Orders</h2>
        <div class="filters">
          <v-input
            :model-value="search"
            placeholder="Search orders..."
            small
            class="search-input"
            @update:model-value="$emit('update:search', $event)"
          >
            <template #prepend>
              <v-icon name="search" />
            </template>
          </v-input>

          <v-select
            :model-value="status"
            :items="statusOptions"
            placeholder="Filter by Status"
            small
            inline
            clearable
            class="status-filter"
            @update:model-value="$emit('update:status', $event)"
          />
        </div>
      </div>
      <v-button small @click="$emit('add')">
        <v-icon name="add" left />
        Add Order
      </v-button>
    </div>

    <div class="virtual-table">
      <div class="table-header">
        <div class="col-id">ID</div>
        <div class="col-name">Order Name</div>
        <div class="col-customer">Customer</div>
        <div class="col-status">Status</div>
        <div class="col-date">Date</div>
        <div class="col-actions">Actions</div>
      </div>

      <RecycleScroller
        v-if="orders.length > 0"
        class="scroller"
        :items="orders"
        :item-size="64"
        key-field="id"
        v-slot="{ item }"
        @scroll-end="$emit('load-more')"
      >
        <div class="table-row">
          <div class="col-id">{{ item.id }}</div>
          <div class="col-name">{{ item.name }}</div>
          <div class="col-customer">
            <div class="customer-info">
              <div class="customer-name">{{ item.customer_name }}</div>
              <div class="customer-email">{{ item.customer_email }}</div>
            </div>
          </div>
          <div class="col-status">
            <span class="status-badge" :class="item.status">
              {{ item.status }}
            </span>
          </div>
          <div class="col-date">{{ item.order_date }}</div>
          <div class="col-actions">
            <v-button x-small icon @click="$emit('edit', item.id)">
              <v-icon name="edit" small />
            </v-button>
            <v-button x-small icon @click="$emit('delete', item.id)">
              <v-icon name="delete" small />
            </v-button>
          </div>
        </div>
      </RecycleScroller>

      <div v-if="orders.length === 0" class="no-results">
        No orders found matching your criteria.
      </div>

      <div v-if="loading" class="loading-more">
        <v-progress-circular indeterminate x-small />
        <span>Loading more orders...</span>
      </div>
      
      <div v-if="!hasMore && orders.length > 0" class="end-message">
        You've reached the end of the list.
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RecycleScroller } from 'vue-virtual-scroller';
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css';
import type { Order } from "../types";

defineProps<{
  orders: Order[];
  search: string;
  status: string | null;
  loading: boolean;
  hasMore: boolean;
}>();

defineEmits<{
  (e: "add"): void;
  (e: "edit", id: number): void;
  (e: "delete", id: number): void;
  (e: "update:search", value: string): void;
  (e: "update:status", value: string | null): void;
  (e: "load-more"): void;
}>();

const statusOptions = [
  { text: "All", value: "all" },
  { text: "Processing", value: "processing" },
  { text: "Pending", value: "pending" },
  { text: "Completed", value: "completed" },
  { text: "Shipped", value: "shipped" },
  { text: "Cancelled", value: "cancelled" },
];
</script>

<style scoped>
.virtual-table {
  border: 1px solid var(--theme--border-color-subdued);
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 600px;
}

.table-header {
  display: grid;
  grid-template-columns: 80px 150px 1fr 120px 120px 100px;
  background: var(--theme--background-normal);
  padding: 12px 16px;
  font-weight: 600;
  color: var(--theme--foreground-subdued);
  border-bottom: 2px solid var(--theme--border-color);
  font-size: 14px;
}

.scroller {
  flex: 1;
}

.table-row {
  display: grid;
  grid-template-columns: 80px 150px 1fr 120px 120px 100px;
  padding: 12px 16px;
  border-bottom: 1px solid var(--theme--border-color-subdued);
  align-items: center;
  height: 64px;
  box-sizing: border-box;
}

.table-row:hover {
  background: var(--theme--background-normal);
}

.col-actions {
  display: flex;
  gap: 8px;
}

.loading-more, .end-message {
  padding: 16px;
  text-align: center;
  font-size: 14px;
  color: var(--theme--foreground-subdued);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: var(--theme--background-normal);
  border-top: 1px solid var(--theme--border-color-subdued);
}

.no-results {
  padding: 40px;
  text-align: center;
  font-style: italic;
  color: var(--theme--foreground-subdued);
}
</style>
