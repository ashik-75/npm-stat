export type Category = {
  title: string;
  metric: string;
  value: number;
  target: string;
};

export const categories: Category[] = [
  {
    title: "Sales",
    metric: "$ 12,699",
    value: 15.9,
    target: "$ 80,000",
  },
  {
    title: "Profit",
    metric: "$ 45,564",
    value: 36.5,
    target: "$ 125,000",
  },
  {
    title: "Customers",
    metric: "1,072",
    value: 53.6,
    target: "2,000",
  },
];

export type Person = {
  name: string;
  photo: string;
  email: string;
  redirectTo: {
    title: string;
    url: string;
  };
};

export const persons: Person[] = [
  {
    name: "Simon Jones",
    email: "simon@gmail.com",
    photo:
      "https://source.unsplash.com/a-woman-with-long-hair-smiling-at-the-camera-7_bjPo2XgIs",
    redirectTo: {
      title: "Landing Page",
      url: "/",
    },
  },
  {
    name: "Jina Wilson",
    email: "wilson@gmail.com",
    photo:
      "https://source.unsplash.com/woman-staring-directly-at-camera-near-pink-wall-bqe0J0b26RQ",
    redirectTo: {
      title: "Landing Page",
      url: "/",
    },
  },
  {
    name: "Jones",
    email: "simon@gmail.com",
    photo:
      "https://source.unsplash.com/grayscale-photography-of-man-smiling-rriAI0nhcbc",
    redirectTo: {
      title: "Landing Page",
      url: "/",
    },
  },
];
