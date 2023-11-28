import React from "react";
import Spinner from "@/components/ui/Spinner";
import EmptyState from "@/components/ui/EmptyState";

export interface ListItem {
	id: number;
}

export interface ListItemProps<T> {
	resource: T;
	className?: string;
}

interface CardListProps<T> {
	items?: T[];
	component: React.ComponentType<ListItemProps<T>>;
	isLoading: boolean;
}

const CardList = <T extends ListItem>({
	items = [],
	component: Component,
	isLoading,
}: CardListProps<T>) => {
	if (isLoading) return <Spinner />;

	if (items.length === 0) {
		return <EmptyState />;
	}

	return (
		<div className="grid grid-cols-1 tablet:grid-cols-3 laptop:grid-cols-4 desktop:grid-cols-5 gap-3">
			{items?.map((item) => (
				<Component resource={item} key={item.id} className="" />
			))}
		</div>
	);
};

export default CardList;
