export type Customer = {
  name: string;
  image?: string;
  email?: string;
};

type Status = "refunded" | "completed" | "cancelled" | "pending";

export type Order = {
  id: number;
  customer: Customer;
  category: string;
  image: string;
  createdAt: string;
  quantity: number;
  price: string;
  status: Status;
};
