export interface StatItem {
  label: string;
  value: string | number;
  icon: string;
  color: string;
  bgColor: string;
}

export type ItemStatus = "processing" | "pending" | "completed" | "cancelled" | "shipped";

export interface Order {
  id: number;
  name: string;
  status: ItemStatus;
  order_date: string;
  customer_name: string;
  customer_email: string;
}

export interface Stats {
  users: number;
  collections: number;
  items: number;
  lastUpdated: string;
}
