import React from "react";
import Spinner from "@/components/ui/Spinner";
import EmptyState from "@/components/ui/EmptyState";
import ErrorMessage from "../ui/ErrorMessage";

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
	isLoading?: boolean;
	isError?: boolean;
}

const CardList = <T extends ListItem>({
	items,
	component: Component,
	isLoading,
	isError,
}: CardListProps<T>) => {
	if (isError) {
		return <ErrorMessage message="Something went wrong" />;
	}

	if (isLoading && !items) return <Spinner />;

	if (!items || items?.length === 0) {
		return <EmptyState message="Nothing found!" />;
	}

	return (
		<div className="grid grid-cols-1 tablet:grid-cols-3 laptop:grid-cols-4 desktop:grid-cols-5 gap-3">
			{items.map((item) => (
				<Component resource={item} key={item.id} className="" />
			))}
		</div>
	);
};

export default CardList;
