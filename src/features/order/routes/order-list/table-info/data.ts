import { Order } from "./types";
import { faker } from "@faker-js/faker";

const generateRandomOrder = (): Order => ({
  id: faker.datatype.number(5),
  customer: {
    name: faker.person.fullName(),
    image: faker.image.avatar(),
    email: faker.internet.email(),
  },
  category: faker.commerce.product(),
  image: faker.image.food(),
  createdAt: faker.date.recent().toISOString(),
  quantity: faker.datatype.number({ min: 1, max: 10 }),
  price: faker.commerce.price(),
  status: faker.helpers.arrayElement([
    "refunded",
    "completed",
    "cancelled",
    "pending",
  ]),
});

const generateOrders = (count: number): Order[] => {
  const orders: Order[] = [];
  for (let i = 0; i < count; i++) {
    orders.push(generateRandomOrder());
  }
  return orders;
};

export const orderList: Order[] = generateOrders(50);

export const orderStatus = [
  {
    label: "Refunded",
    value: "refund",
  },
  {
    label: "Completed",
    value: "completed",
  },
  {
    label: "Cancelled",
    value: "cancelled",
  },
  {
    label: "Pending",
    value: "pending",
  },
];
