import * as React from "react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import Icon from "@/components/ui/icon";
import clsx from "clsx";
import { NavLink, useLocation } from "react-router-dom";
import { MenuProps } from "./menu";

export const CollapsibleDemo: React.FC<MenuProps> = ({
  item,
  onOpenChange,
}) => {
  const location = useLocation();
  const [isOpen, setIsOpen] = React.useState(
    location.pathname.includes(item.url),
  );

  const active = location.pathname.includes(item.url);

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-full space-y-2"
    >
      <CollapsibleTrigger
        asChild
        className={clsx(
          "flex items-center gap-2 rounded border border-transparent px-4 py-2 font-semibold  ",
          {
            "bg-green-300/10 text-green-500 hover:bg-green-300/20": active,
            "hover:bg-zinc-100": !active,
          },
        )}
      >
        <div className="flex w-full cursor-pointer items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name={item?.icon || "Activity"} size={20} />
            <span className="block capitalize">{item.title}</span>
          </div>
          <Icon
            className="transition-all duration-200"
            name={isOpen ? "ChevronDown" : "ChevronRight"}
          />
        </div>
      </CollapsibleTrigger>

      <CollapsibleContent>
        {item.children?.map((sub) => (
          <NavLink
            key={sub.url}
            to={sub.url}
            className={clsx(
              "flex list-disc items-center gap-4 rounded border border-transparent px-6 py-2  hover:bg-zinc-100 ",
            )}
            onClick={() => {
              onOpenChange && onOpenChange();
            }}
          >
            <span
              className={clsx("h-1.5 w-1.5 rounded-full", {
                " bg-green-400": location.pathname === sub.url,
                " bg-slate-400": !(location.pathname === sub.url),
              })}
            ></span>
            <span
              className={clsx("text-zinc-500", {
                " font-medium text-zinc-900": location.pathname === sub.url,
              })}
            >
              {sub.title}
            </span>
          </NavLink>
        ))}
      </CollapsibleContent>
    </Collapsible>
  );
};
