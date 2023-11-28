import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ChevronRightSquare } from "lucide-react";
import { NavLink } from "react-router-dom";
import { docsConfig } from "./data/nav-data";
import { useState } from "react";

const MobileNav = () => {
	const [open, setOpen] = useState<boolean>(false);
	return (
		<Sheet open={open} onOpenChange={setOpen}>
			<SheetTrigger asChild>
				<button className="tablet:hidden">
					<ChevronRightSquare />
				</button>
			</SheetTrigger>
			<SheetContent side={"left"} className="pr-0">
				{docsConfig.sideNav.map((nav) => (
					<MobileLink
						key={nav.url}
						{...nav}
						onOpenChange={() => setOpen(false)}
					/>
				))}
			</SheetContent>
		</Sheet>
	);
};

export default MobileNav;

type MobileLinkProps = {
	url: string;
	title: string;
	onOpenChange: () => void;
};
const MobileLink: React.FC<MobileLinkProps> = ({
	url,
	title,
	onOpenChange,
}) => {
	return (
		<NavLink
			to={url}
			className={({ isActive }) =>
				`bg-slate-50 p-3 block border-l-4 ${
					isActive ? "border-l-violet-700" : "border-l-slate-50"
				} `
			}
			onClick={onOpenChange}
		>
			{title}
		</NavLink>
	);
};
