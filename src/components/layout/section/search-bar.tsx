import React, { FormEvent, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const SearchBar: React.FC = () => {
	const [open, setOpen] = useState(false);
	const navigate = useNavigate();
	const [searchParams, setSearch] = useSearchParams();
	const [searchValue, setSearchValue] = useState(searchParams.get("q") ?? "");

	const handleSearch = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (searchValue.length > 0) {
			setSearch((prev) => {
				prev.set("q", searchValue);
				return prev;
			});
			navigate("/search?" + searchParams.toString());
		}
		setOpen(false);
	};

	useEffect(() => {
		const down = (e: KeyboardEvent) => {
			if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
				e.preventDefault();
				setOpen(true);
			}
		};

		document.addEventListener("keydown", down);
		return () => document.removeEventListener("keydown", down);
	}, []);
	return (
		<div className="flex-1">
			<Dialog open={open} onOpenChange={setOpen}>
				<DialogTrigger asChild>
					<Button onClick={() => setOpen(true)}>
						<span className="hidden laptop:inline-block">
							Search movies ...
						</span>
						<span className="laptop:hidden">Search ...</span>
						<kbd className="ml-10 pointer-events-none">
							<span className="text-xs">⌘</span>K
						</kbd>

						<span></span>
					</Button>
				</DialogTrigger>
				<DialogContent className="laptop:max-w-[425px]">
					<DialogHeader>
						<DialogTitle>Movie searching</DialogTitle>
						<DialogDescription>
							Enter movie name and find your favourite movie
						</DialogDescription>
					</DialogHeader>
					<div className="grid gap-4 py-4">
						<form onSubmit={handleSearch}>
							<div>
								<Input
									id="search"
									value={searchValue}
									onChange={(e) => setSearchValue(e.target.value)}
									type="search"
									placeholder="Enter movie name ..."
								/>
							</div>
						</form>
					</div>
				</DialogContent>
			</Dialog>
		</div>
	);
};

export default SearchBar;
