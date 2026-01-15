<template>
  <div class="data-section chart-section">
    <div class="section-header">
      <h2>Order Status Distribution</h2>
    </div>
    <div class="chart-container">
      <PolarArea v-if="chartData.datasets?.[0]?.data?.length" :data="chartData" :options="chartOptions" />
      <div v-else class="no-results">No data available for the chart</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  RadialLinearScale,
} from 'chart.js';
import { PolarArea } from 'vue-chartjs';
import type { Order } from '../types';

ChartJS.register(Title, Tooltip, Legend, ArcElement, RadialLinearScale);

const props = defineProps<{
  orders: Order[];
}>();

const statusConfig = {
  completed: { label: 'Completed', color: '#6644ff' },
  processing: { label: 'Processing', color: '#00c897' },
  pending: { label: 'Pending', color: '#ffa500' },
  shipped: { label: 'Shipped', color: '#3498db' },
  cancelled: { label: 'Cancelled', color: '#e74c3c' },
} as const;

const chartData = computed(() => {
  const counts: Record<string, number> = {
    completed: 0,
    processing: 0,
    pending: 0,
    shipped: 0,
    cancelled: 0,
  };

  props.orders.forEach(order => {
    const count = counts[order.status] ?? 0;
    counts[order.status] = count + 1;
  });

  const labels = Object.values(statusConfig).map(c => c.label);
  const backgroundColor = Object.values(statusConfig).map(c => `${c.color}CC`); // CC is ~80% opacity
  const data: number[] = Object.keys(statusConfig).map(status => counts[status] ?? 0);

  return {
    labels,
    datasets: [
      {
        data,
        backgroundColor,
        borderWidth: 1,
        borderColor: '#fff',
      },
    ],
  };
});

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: true,
      position: 'right' as const,
      labels: {
        usePointStyle: true,
        padding: 20,
      }
    },
    tooltip: {
      backgroundColor: '#1e1e1e',
      padding: 12,
    }
  },
  scales: {
    r: {
      ticks: {
        display: false,
      },
      grid: {
        color: 'rgba(0, 0, 0, 0.05)',
      }
    }
  }
} as const;
</script>

<style scoped>
.chart-section {
  margin-bottom: 32px;
}

.chart-container {
  height: 250px;
  position: relative;
  padding: 10px;
}

.no-results {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>
