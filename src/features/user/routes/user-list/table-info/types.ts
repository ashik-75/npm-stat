type Status = "banned" | "active" | "pending" | "rejected";

export type User = {
  id: number;
  name: string;
  image?: string;
  email?: string;
  phone: string;
  company: string;
  role: string;
  status: Status;
};
