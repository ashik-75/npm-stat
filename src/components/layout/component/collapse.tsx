import * as React from "react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import Icon from "@/components/ui/icon";
import clsx from "clsx";
import { NavLink } from "react-router-dom";
import { MenuProps } from "./menu";

export const CollapsibleDemo: React.FC<MenuProps> = ({
  item,
  onOpenChange,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-full space-y-2"
    >
      <CollapsibleTrigger
        asChild
        className={clsx(
          "flex cursor-pointer items-center gap-2 rounded-xl border border-transparent px-4 py-2 font-semibold hover:border-zinc-200 hover:bg-white",
        )}
      >
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name={item?.icon || "Activity"} size={20} />
            <span className="block  capitalize">{item.title}</span>
          </div>
          <Icon
            className="transition-all duration-200"
            name={isOpen ? "ChevronDown" : "ChevronRight"}
          />
        </div>
      </CollapsibleTrigger>

      <CollapsibleContent className="space-y-2">
        {item.children?.map((sub) => (
          <NavLink
            key={sub.url}
            to={sub.url}
            className={({ isActive }) =>
              clsx(
                "flex items-center gap-2 rounded-xl border border-transparent px-11 py-2 hover:border-zinc-200 hover:bg-white",
                {
                  "border-zinc-200 bg-white": isActive,
                },
              )
            }
            onClick={() => {
              console.log("clicked", onOpenChange);
              onOpenChange && onOpenChange();
            }}
          >
            <span className="text-sm font-medium  tracking-wider">
              {sub.title}
            </span>
          </NavLink>
        ))}
      </CollapsibleContent>
    </Collapsible>
  );
};
