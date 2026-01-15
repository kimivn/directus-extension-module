import type { Order, ItemStatus } from "../types";

const statuses = ["completed", "pending", "shipped", "processing", "cancelled"] as const;
const firstNames = ["John", "Jane", "Bob", "Alice", "Charlie", "David", "Eve", "Frank", "Grace", "Hank", "Ivy", "Jack", "Kelly", "Liam", "Mona", "Noah", "Olivia", "Paul", "Quinn", "Rose", "Sam", "Tina", "Ulysses", "Victor", "Wendy", "Xavier", "Yara", "Zane"];
const lastNames = ["Doe", "Smith", "Wilson", "Brown", "Davis", "Miller", "Ward", "Hill", "Wood", "Cook", "Bell", "Gray", "King", "Page", "Ross", "Scott", "Young", "Reed", "Long", "Hart", "Black", "White", "Green", "Taylor", "Anderson", "Thomas", "Jackson", "White"];

const generateMockOrders = (count: number): Order[] => {
  const orders: Order[] = [];
  for (let i = 1; i <= count; i++) {
    const id = 1000 + i;
    const name = `ORD-2026-${String(i).padStart(3, '0')}`;
    const status = statuses[Math.floor(Math.random() * statuses.length)] as ItemStatus;
    const date = `2026-01-${String((i % 31) + 1).padStart(2, '0')}`;
    const fName = firstNames[Math.floor(Math.random() * firstNames.length)] ?? "John";
    const lName = lastNames[Math.floor(Math.random() * lastNames.length)] ?? "Doe";
    
    const customer_name = `${fName} ${lName}`;
    const customer_email = `${fName.toLowerCase()}.${lName.toLowerCase()}${i}@example.com`;

    orders.push({
      id, 
      name,
      status,
      order_date: date,
      customer_name,
      customer_email,
    });
  }
  return orders;
};

export const mockOrders: Order[] = generateMockOrders(300);
