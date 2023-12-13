import { Customer } from "@/features/order/routes/order-list/table-info/types";

export type Invoice = {
  customer: Customer;
  invoiceId: string;
  quantity: number;
  createdAt: string;
  due: string;
  price: string;
  status: "pending" | "paid" | "overdue";
};
