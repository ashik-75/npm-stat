export type Product = {
  id: string;
  title: string;
  category: string;
  image: string;
  createdAt: string;
  stock: number;
  price: string;
  status: "draft" | "published";
};
