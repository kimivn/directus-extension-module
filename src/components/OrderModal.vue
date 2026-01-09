<template>
  <v-dialog 
    :model-value="active" 
    @update:model-value="$emit('close')" 
    @esc="$emit('close')"
    :max-width="600"
  >
    <v-card v-if="formData">
      <v-card-title>
        {{ isEdit ? "Edit Order" : "Add New Order" }}
      </v-card-title>

      <v-card-text>
        <div class="custom-form">
          <div class="form-group">
            <label>Order Name</label>
            <v-input v-model="formData.name" placeholder="ORD-2026-XXX" />
          </div>

          <div class="form-group">
            <label>Customer Name</label>
            <v-input v-model="formData.customer_name" placeholder="John Doe" />
          </div>

          <div class="form-group">
            <label>Customer Email</label>
            <v-input v-model="formData.customer_email" type="email" placeholder="john@example.com" />
          </div>

          <div class="form-group">
            <label>Status</label>
            <v-select
              v-model="formData.status"
              :items="statusOptions"
            />
          </div>

          <div class="form-group">
            <label>Order Date</label>
            <v-input v-model="formData.order_date" type="date" />
          </div>
        </div>
      </v-card-text>

      <v-card-actions>
        <v-button secondary @click="$emit('close')">Cancel</v-button>
        <v-button @click="save">{{ isEdit ? "Update" : "Create" }}</v-button>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { ref, watch, computed } from "vue";
import type { Order } from "../types";

const props = defineProps<{
  active: boolean;
  order: Order | null;
}>();

const emit = defineEmits<{
  (e: "close"): void;
  (e: "save", order: Order): void;
}>();

const isEdit = computed(() => !!props.order);

const formData = ref<Order>({
  id: 0,
  name: "",
  status: "pending",
  order_date: new Date().toISOString().split("T")[0] || "",
  customer_name: "",
  customer_email: "",
});

const statusOptions = [
  { text: "Processing", value: "processing" },
  { text: "Pending", value: "pending" },
  { text: "Completed", value: "completed" },
  { text: "Shipped", value: "shipped" },
  { text: "Cancelled", value: "cancelled" },
];

watch(
  () => props.order,
  (newOrder) => {
    if (newOrder) {
      formData.value = { ...newOrder };
    } else {
      formData.value = {
        id: 0,
        name: "",
        status: "pending",
        order_date: new Date().toISOString().split("T")[0] || "",
        customer_name: "",
        customer_email: "",
      };
    }
  },
  { immediate: true }
);

const save = () => {
  emit("save", { ...formData.value });
};
</script>

<style scoped>
.custom-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 10px 0;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-group label {
  font-size: 14px;
  font-weight: 600;
  color: var(--v-list-item-title-color, var(--theme--foreground-subdued));
}
</style>
