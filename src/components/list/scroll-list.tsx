import React from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { ListItem, ListItemProps } from "./card-list";
import EmptyState from "@/components/ui/EmptyState";
import ErrorMessage from "../ui/ErrorMessage";
import Icon from "@/components/ui/icon";

interface ScrollListProps<T> {
  items?: T[];
  component: React.ComponentType<ListItemProps<T>>;
  isLoading?: boolean;
  isError?: boolean;
  title: string;
}

const ScrollList = <T extends ListItem>({
  items,
  component: Component,
  isLoading,
  isError,
  title,
}: ScrollListProps<T>) => {
  if (isError) {
    return <ErrorMessage message="Something went wrong" />;
  }

  if (isLoading && !items) {
    return <Icon name="Loader" className="animate-spin" />;
  }

  if (items?.length === 0 || !items) {
    return <EmptyState />;
  }

  return (
    <div className="space-y-3">
      <h1 className="mb-5 text-2xl font-bold">{title}</h1>

      <ScrollArea>
        <div className="flex gap-x-5">
          {items.map((item) => (
            <Component key={item.id} resource={item} className="w-[200px]" />
          ))}
        </div>

        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};

export default ScrollList;
