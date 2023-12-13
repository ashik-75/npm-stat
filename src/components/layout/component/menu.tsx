import React from "react";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import Icon from "@/components/ui/icon";
import { Menu as MenuType } from "../data/nav-data";
import { CollapsibleDemo } from "./collapse";

export type MenuProps = {
  item: MenuType;
  onOpenChange?: () => void;
};

const Menu: React.FC<MenuProps> = ({ item, onOpenChange }) => {
  return !item.children ? (
    <NavLink
      to={item.url}
      className={({ isActive }) =>
        clsx(
          "flex items-center gap-2 rounded border border-transparent px-4 py-2 font-semibold  ",
          {
            "bg-green-300/10 text-green-500 hover:bg-green-300/20": isActive,
            "hover:bg-zinc-100": !isActive,
          },
        )
      }
      onClick={onOpenChange}
    >
      <Icon name={item?.icon || "Activity"} size={20} />
      <span>{item.title}</span>
    </NavLink>
  ) : (
    <CollapsibleDemo item={item} onOpenChange={onOpenChange} />
  );
};

export default Menu;
