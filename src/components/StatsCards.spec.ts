import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import StatsCards from './StatsCards.vue';
import type { Order } from '../types';

// Mock Directus v-icon component
const VIconMock = {
  template: '<span class="v-icon-mock"></span>',
  props: ['name', 'color']
};

describe('StatsCards.vue', () => {
  const mockOrders: Order[] = [
    { id: 1, name: 'O1', status: 'completed', order_date: '', customer_name: '', customer_email: '' },
    { id: 2, name: 'O2', status: 'pending', order_date: '', customer_name: '', customer_email: '' },
    { id: 3, name: 'O3', status: 'completed', order_date: '', customer_name: '', customer_email: '' },
  ];

  it('renders correctly with orders', () => {
    const wrapper = mount(StatsCards, {
      props: {
        orders: mockOrders
      },
      global: {
        stubs: {
          'v-icon': VIconMock
        }
      }
    });

    // Check if total orders card shows correct value
    const totalCardValue = wrapper.find('.stat-card:first-child .stat-value').text();
    expect(totalCardValue).toBe('3');

    // Check if completed orders card shows correct value
    // find index 1 is completed
    const completedCardValue = wrapper.findAll('.stat-card')[1]?.find('.stat-value').text();
    expect(completedCardValue).toBe('2');
  });

  it('renders zeros when no orders provided', () => {
    const wrapper = mount(StatsCards, {
      props: {
        orders: []
      },
      global: {
        stubs: {
          'v-icon': VIconMock
        }
      }
    });

    const values = wrapper.findAll('.stat-value');
    values.forEach(value => {
      expect(value.text()).toBe('0');
    });
  });
});
