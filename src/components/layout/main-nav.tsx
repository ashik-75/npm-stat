import React from "react";
import { Link } from "react-router-dom";

const MainNav: React.FC = () => {
	return (
		<div className="hidden tablet:inline-block">
			<Link to={"/"}>
				<img src="/amd.png" className="w-10 h-10" alt="" />
			</Link>
		</div>
	);
};

export default MainNav;
