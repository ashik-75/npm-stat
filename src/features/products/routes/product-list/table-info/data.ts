import { Product } from "./types";

const generateRandomProduct = (id: number): Product => ({
  id: id.toString(),
  title: `Product ${id}`,
  category: `Category ${id % 5}`, // Assuming 5 categories
  image: `https://example.com/image${id}.jpg`,
  createdAt: new Date().toISOString(),
  stock: Math.floor(Math.random() * 100) + 1, // Random stock between 1 and 100
  price: (Math.random() * 100).toFixed(2), // Random price with 2 decimal places
  status: id % 2 === 0 ? "draft" : "published", // Alternating between "draft" and "published"
});

const generateArrayOfProducts = (num: number): Product[] => {
  const products = [];
  for (let i = 1; i <= num; i++) {
    products.push(generateRandomProduct(i));
  }
  return products;
};

export const productListData = generateArrayOfProducts(100);
