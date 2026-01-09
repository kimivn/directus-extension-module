import type { Stats, Order } from "../types";

export const mockStats: Stats = {
  users: 42,
  collections: 12,
  items: 1337,
  lastUpdated: new Date().toLocaleDateString(),
};

export const mockOrders: Order[] = [
  { id: 1001, name: "ORD-2026-001", status: "completed", order_date: "2026-01-01", customer_name: "John Doe", customer_email: "john@example.com" },
  { id: 1002, name: "ORD-2026-002", status: "pending", order_date: "2026-01-02", customer_name: "Jane Smith", customer_email: "jane@smith.com" },
  { id: 1003, name: "ORD-2026-003", status: "shipped", order_date: "2026-01-03", customer_name: "Bob Wilson", customer_email: "bob@wilson.com" },
  { id: 1004, name: "ORD-2026-004", status: "processing", order_date: "2026-01-04", customer_name: "Alice Brown", customer_email: "alice@brown.com" },
  { id: 1005, name: "ORD-2026-005", status: "completed", order_date: "2026-01-05", customer_name: "Charlie Davis", customer_email: "charlie@davis.com" },
  { id: 1006, name: "ORD-2026-006", status: "cancelled", order_date: "2026-01-06", customer_name: "David Miller", customer_email: "david@miller.com" },
  { id: 1007, name: "ORD-2026-007", status: "pending", order_date: "2026-01-07", customer_name: "Eve Ward", customer_email: "eve@ward.com" },
  { id: 1008, name: "ORD-2026-008", status: "shipped", order_date: "2026-01-08", customer_name: "Frank Hill", customer_email: "frank@hill.com" },
  { id: 1009, name: "ORD-2026-009", status: "completed", order_date: "2026-01-09", customer_name: "Grace Wood", customer_email: "grace@wood.com" },
  { id: 1010, name: "ORD-2026-010", status: "processing", order_date: "2026-01-10", customer_name: "Hank Cook", customer_email: "hank@cook.com" },
  { id: 1011, name: "ORD-2026-011", status: "pending", order_date: "2026-01-11", customer_name: "Ivy Bell", customer_email: "ivy@bell.com" },
  { id: 1012, name: "ORD-2026-012", status: "shipped", order_date: "2026-01-12", customer_name: "Jack Gray", customer_email: "jack@gray.com" },
  { id: 1013, name: "ORD-2026-013", status: "completed", order_date: "2026-01-13", customer_name: "Kelly King", customer_email: "kelly@king.com" },
  { id: 1014, name: "ORD-2026-014", status: "cancelled", order_date: "2026-01-14", customer_name: "Liam Page", customer_email: "liam@page.com" },
  { id: 1015, name: "ORD-2026-015", status: "pending", order_date: "2026-01-15", customer_name: "Mona Ross", customer_email: "mona@ross.com" },
  { id: 1016, name: "ORD-2026-016", status: "processing", order_date: "2026-01-16", customer_name: "Noah Scott", customer_email: "noah@scott.com" },
  { id: 1017, name: "ORD-2026-017", status: "shipped", order_date: "2026-01-17", customer_name: "Olivia Young", customer_email: "olivia@young.com" },
  { id: 1018, name: "ORD-2026-018", status: "completed", order_date: "2026-01-18", customer_name: "Paul Reed", customer_email: "paul@reed.com" },
  { id: 1019, name: "ORD-2026-019", status: "pending", order_date: "2026-01-19", customer_name: "Quinn Long", customer_email: "quinn@long.com" },
  { id: 1020, name: "ORD-2026-020", status: "processing", order_date: "2026-01-20", customer_name: "Rose Hart", customer_email: "rose@hart.com" },
];
