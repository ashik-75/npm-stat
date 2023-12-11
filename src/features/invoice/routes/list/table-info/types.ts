export type Invoice = {
  title: string;
  invoiceId: string;
  quantity: number;
  createdAt: string;
  due: string;
  price: string;
  status: "pending" | "paid" | "overdue";
};
