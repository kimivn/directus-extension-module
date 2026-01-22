import { describe, it, expect, beforeEach } from 'vitest';
import { setActivePinia, createPinia } from 'pinia';
import { useOrderStore } from './orderStore';
import type { Order } from '../types';

describe('Order Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it('should initialize with mock orders', () => {
    const store = useOrderStore();
    expect(store.orders.length).toBeGreaterThan(0);
  });

  it('should filter orders by search query', () => {
    const store = useOrderStore();
    store.setSearchQuery('test-order');
    
    // Create a specific order to find
    const newOrder: Order = {
      id: 9999,
      name: 'test-order',
      status: 'pending',
      order_date: new Date().toISOString(),
      customer_name: 'Test User',
      customer_email: 'test@example.com'
    };
    store.addOrder(newOrder);
    
    expect(store.filteredOrders.length).toBe(1);
    expect(store.filteredOrders[0]?.name).toBe('test-order');
  });

  it('should filter orders by status', () => {
    const store = useOrderStore();
    
    // Clear existing or just filter
    store.setStatusFilter('completed');
    
    const allCompleted = store.filteredOrders.every(o => o.status === 'completed');
    expect(allCompleted).toBe(true);
  });

  it('should add a new order', () => {
    const store = useOrderStore();
    const initialCount = store.orders.length;
    
    const newOrder: Order = {
      id: 0, // ID will be generated
      name: 'New Order',
      status: 'pending',
      order_date: new Date().toISOString(),
      customer_name: 'John Doe',
      customer_email: 'john@example.com'
    };
    
    store.addOrder(newOrder);
    
    expect(store.orders.length).toBe(initialCount + 1);
    expect(store.orders[0]?.name).toBe('New Order');
    expect(store.orders[0]?.id).toBeGreaterThan(0);
  });

  it('should update an existing order', () => {
    const store = useOrderStore();
    const orderToUpdate = { ...store.orders[0] } as Order;
    orderToUpdate.name = 'Updated Name';
    
    store.updateOrder(orderToUpdate);
    
    expect(store.orders[0]?.name).toBe('Updated Name');
  });

  it('should delete an order', () => {
    const store = useOrderStore();
    const initialCount = store.orders.length;
    const idToDelete = store.orders[0]!.id;
    
    store.deleteOrder(idToDelete);
    
    expect(store.orders.length).toBe(initialCount - 1);
    expect(store.orders.find(o => o.id === idToDelete)).toBeUndefined();
  });
});
