import { User } from "./types";
import { faker } from "@faker-js/faker";

const generateRandomOrder = (): User => ({
  id: faker.datatype.number(5),
  name: faker.person.fullName(),
  image: faker.image.avatar(),
  email: faker.internet.email(),
  status: faker.helpers.arrayElement([
    "banned",
    "active",
    "pending",
    "rejected",
  ]),
  phone: faker.phone.imei(),
  role: faker.helpers.arrayElement(["User", "Admin", "Editor", "Maintainer"]),
  company: faker.company.name(),
});

const generateOrders = (count: number): User[] => {
  const users: User[] = [];
  for (let i = 0; i < count; i++) {
    users.push(generateRandomOrder());
  }
  return users;
};

export const userList: User[] = generateOrders(50);

export const orderStatus = [
  {
    label: "Banned",
    value: "banned",
  },
  {
    label: "Active",
    value: "active",
  },
  {
    label: "Rejeceted",
    value: "rejected",
  },
  {
    label: "Pending",
    value: "pending",
  },
];
