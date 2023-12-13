import { Product } from "./types";
import { faker } from "@faker-js/faker";

const generateRandomOrder = (): Product => ({
  id: faker.datatype.string(5),
  title: faker.commerce.productName(),
  category: faker.commerce.product(),
  image: faker.image.url(),
  createdAt: faker.date.recent().toISOString(),
  stock: faker.number.int(100),
  price: faker.commerce.price(),
  status: faker.helpers.arrayElement(["draft", "published"]),
});

const generateOrders = (count: number): Product[] => {
  const orders: Product[] = [];
  for (let i = 0; i < count; i++) {
    orders.push(generateRandomOrder());
  }
  return orders;
};

export const productListData: Product[] = generateOrders(50);

export const productStatus = [
  {
    label: "Draft",
    value: "draft",
  },
  {
    label: "Published",
    value: "published",
  },
];
