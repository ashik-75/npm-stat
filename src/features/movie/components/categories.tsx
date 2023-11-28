import { Badge } from "@/components/ui/badge";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Category } from "@/features/movie/types";

interface CategoriesProps {
	items: Category[];
}

const Categories: React.FC<CategoriesProps> = ({ items }) => {
	const navigate = useNavigate();
	const location = useLocation();

	if (items.length === 0) return null;

	return (
		<div className="flex gap-2 flex-wrap">
			{items.map((cat) => (
				<Badge
					variant={location.pathname === cat.url ? "default" : "outline"}
					className="cursor-pointer"
					onClick={() => navigate(cat.url)}
					key={cat.url}
				>
					{cat.title}
				</Badge>
			))}
		</div>
	);
};

export default Categories;
