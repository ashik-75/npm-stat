import { Invoice } from "./types";

const generateRandomInvoice = (id: number): Invoice => ({
  title: `Invoice ${id}`,
  invoiceId: `INV-${id.toString().padStart(3, "0")}`,
  quantity: Math.floor(Math.random() * 10) + 1, // Random quantity between 1 and 10
  createdAt: new Date().toISOString(),
  due: new Date(
    Date.now() + Math.floor(Math.random() * 30) * 24 * 60 * 60 * 1000,
  ).toISOString(), // Random due date within 30 days
  price: (Math.random() * 1000).toFixed(2), // Random price with 2 decimal places
  status: id % 3 === 0 ? "overdue" : id % 2 === 0 ? "paid" : "pending", // Alternating between "pending," "paid," and "overdue"
});

const generateArrayOfInvoices = (num: number): Invoice[] => {
  const invoices = [];
  for (let i = 1; i <= num; i++) {
    invoices.push(generateRandomInvoice(i));
  }
  return invoices;
};

export const invoiceData = generateArrayOfInvoices(100);

export const InvoiceStatus = [
  {
    label: "Pending",
    value: "pending",
  },
  {
    label: "Paid",
    value: "paid",
  },
  {
    label: "Overdue",
    value: "overdue",
  },
];
