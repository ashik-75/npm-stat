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
      title: "Trends",
      url: "/",
      icon: "Airplay",
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
