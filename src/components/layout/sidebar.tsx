import React from "react";
import { NavLink } from "react-router-dom";
import { docsConfig } from "./data/nav-data";

const Sidebar: React.FC = () => {
	return (
		<nav id="sidebar">
			<div className="hidden h-[calc(100vh-96px)] bg-zinc-50 tablet:block tablet:sticky top-[98px] left-0 shrink-0">
				{docsConfig.sideNav.map((route) => (
					<NavLink
						key={route.url}
						to={route.url}
						className={({ isActive }) =>
							`p-3 block  ${
								isActive
									? "border-l-violet-700 border-l-4"
									: "border-l-4 border-l-transparent"
							} `
						}
					>
						{route.title}
					</NavLink>
				))}
			</div>
		</nav>
	);
};

export default Sidebar;
