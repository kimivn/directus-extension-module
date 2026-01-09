<template>
  <div class="stats-grid">
    <div v-for="stat in computedStats" :key="stat.label" class="stat-card">
      <div class="stat-icon" :style="{ background: stat.bgColor }">
        <v-icon :name="stat.icon" :color="stat.color" />
      </div>
      <div class="stat-content">
        <div class="stat-label">{{ stat.label }}</div>
        <div class="stat-value">{{ stat.value }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { Order, StatItem } from "../types";

const props = defineProps<{
  orders: Order[];
}>();

const computedStats = computed<StatItem[]>(() => {
  const total = props.orders.length;
  const completed = props.orders.filter(o => o.status === 'completed').length;
  const pending = props.orders.filter(o => o.status === 'pending').length;
  const processing = props.orders.filter(o => o.status === 'processing').length;
  const cancelled = props.orders.filter(o => o.status === 'cancelled').length;
  const shipped = props.orders.filter(o => o.status === 'shipped').length;

  return [
    {
      label: "Total Orders",
      value: total,
      icon: "shopping_cart",
      color: "#6644ff",
      bgColor: "#6644ff22",
    },
    {
      label: "Completed",
      value: completed,
      icon: "check_circle",
      color: "#00c897",
      bgColor: "#00c89722",
    },
    {
      label: "Shipped",
      value: shipped,
      icon: "local_shipping",
      color: "#2196f3",
      bgColor: "#2196f322",
    },
    {
      label: "pending",
      value: pending,
      icon: "pause",
      color: "#ffa500",
      bgColor: "#ffa50022",
    },
    {
      label: "Processing",
      value: processing,
      icon: "sync",
      color: "#2196f3",
      bgColor: "#2196f322",
    },
    {
      label: "Cancelled",
      value: cancelled,
      icon: "cancel",
      color: "#f44336",
      bgColor: "#f4433622",
    }
  ];
});
</script>
