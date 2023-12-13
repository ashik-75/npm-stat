import { IconName } from "@/components/ui/icon";

export type Menu = {
  title: string;
  url: string;
  icon?: IconName;
  external?: boolean;
  children?: CommonInfo[];
};

type CommonInfo = {
  title: string;
  url: string;
  icon?: IconName;
  external?: boolean;
};

type DocsConfig = {
  sideNav: Menu[];
  footerNav: Menu[];
};

export const docsConfig: DocsConfig = {
  sideNav: [
    {
      title: "Dashboard",
      url: "/",
      icon: "Home",
    },
    {
      title: "Product",
      url: "/product",
      icon: "FolderKanban",
      children: [
        {
          title: "List",
          url: "/product",
        },
        {
          title: "Details",
          url: "/product/87238238",
        },
        {
          title: "Create",
          url: "/product/create",
        },
        {
          title: "Edit",
          url: "/product/update",
        },
      ],
    },
    {
      title: "Order",
      url: "/order",
      icon: "ShoppingCart",
      children: [
        {
          title: "List",
          url: "/order/list",
        },
        {
          title: "Details",
          url: "/order/details",
        },
      ],
    },
    {
      title: "User",
      url: "/user",
      icon: "User",
      children: [
        {
          title: "List",
          url: "/user/list",
        },
        {
          title: "Create",
          url: "/user/create",
        },
        {
          title: "Delete",
          url: "/user/delete",
        },
        {
          title: "Update",
          url: "/user/update",
        },
      ],
    },
    {
      title: "Invoice",
      url: "/invoice",
      icon: "FileBarChart2",
      children: [
        {
          title: "List",
          url: "/invoice/list",
        },
        {
          title: "Create",
          url: "/invoice/create",
        },
        {
          title: "Delete",
          url: "/invoice/delete",
        },
        {
          title: "Update",
          url: "/invoice/update",
        },
      ],
    },
    {
      title: "Support",
      url: "/support",
      icon: "Globe",
    },
  ],
  footerNav: [
    {
      title: "Settings",
      url: "/settings",
      icon: "Settings",
    },
    {
      title: "Logout",
      url: "/logout",
      icon: "LogOut",
    },
  ],
};
