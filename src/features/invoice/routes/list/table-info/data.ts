import { Invoice } from "./types";
import { faker } from "@faker-js/faker";

const generateRandomOrder = (): Invoice => ({
  invoiceId: faker.datatype.string(5),
  customer: {
    name: faker.person.fullName(),
    image: faker.image.avatar(),
    email: faker.internet.email(),
  },
  createdAt: faker.date.recent().toISOString(),
  due: faker.date.recent().toISOString(),
  quantity: faker.number.int(100),
  price: faker.commerce.price(),
  status: faker.helpers.arrayElement(["pending", "paid", "overdue"]),
});

const generateInvoice = (count: number): Invoice[] => {
  const orders: Invoice[] = [];
  for (let i = 0; i < count; i++) {
    orders.push(generateRandomOrder());
  }
  return orders;
};

export const InvoiceListData: Invoice[] = generateInvoice(50);

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
