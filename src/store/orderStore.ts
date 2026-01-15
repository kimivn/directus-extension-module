import { defineStore } from 'pinia';
import type { Order } from '../types';
import { mockOrders } from '../mockup/mockData';

export const useOrderStore = defineStore('orders', {
	state: () => ({
		orders: mockOrders as Order[],
		searchQuery: '',
		statusFilter: null as string | null,
		limit: 20,
		loading: false,
	}),
	getters: {
		filteredOrders(state) {
			const query = (state.searchQuery || '').toLowerCase().trim();
			const status = state.statusFilter;

			return state.orders.filter((order) => {
				const matchesSearch =
					!query ||
					order.name.toLowerCase().includes(query) ||
					order.customer_name.toLowerCase().includes(query) ||
					order.customer_email.toLowerCase().includes(query);

				const matchesStatus = 
					!status || 
					status === 'all' || 
					order.status === status;

				return matchesSearch && matchesStatus;
			});
		},
		pagedOrders(state): Order[] {
			// Access filteredOrders getter via this
			return (this as any).filteredOrders.slice(0, state.limit);
		},
		hasMore(state): boolean {
			return state.limit < (this as any).filteredOrders.length;
		},
	},
	actions: {
		setSearchQuery(query: string) {
			this.searchQuery = query;
		},
		setStatusFilter(status: string | null) {
			this.statusFilter = status;
		},
		addOrder(order: Order) {
			const INITIAL_ID = 1001;
			const newId = this.orders.length > 0 ? Math.max(...this.orders.map((o) => o.id)) + 1 : INITIAL_ID;
			this.orders.unshift({
				...order,
				id: newId,
			});
		},
		updateOrder(order: Order) {
			const index = this.orders.findIndex((o) => o.id === order.id);
			if (index !== -1) {
				this.orders[index] = order;
			}
		},
		deleteOrder(id: number) {
			this.orders = this.orders.filter((order) => order.id !== id);
		},
		async loadMore() {
			if (this.loading || !this.hasMore) return;
			
			this.loading = true;
			// Giả lập delay mạng 500ms
			await new Promise(resolve => setTimeout(resolve, 1000));
			this.limit += 50;
			this.loading = false;
		},
	},
});
