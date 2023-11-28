import React from "react";
import SearchBar from "./section/search-bar";
import ProfileAvatar from "./section/profile-avatar";

import MobileNav from "./mobile-nav";
import MainNav from "./main-nav";

const Navbar: React.FC = () => {
	return (
		<nav
			id="navbar"
			className="flex items-center justify-between p-5 border-b border-b-slate-100 sticky top-0 z-30 backdrop-blur-md"
		>
			<MobileNav />
			<MainNav />

			<div className="flex  gap-5 items-center">
				<SearchBar />
				<ProfileAvatar />
			</div>
		</nav>
	);
};

export default Navbar;
