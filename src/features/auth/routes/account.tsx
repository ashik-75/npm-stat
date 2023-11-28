import { Button } from "@/components/ui/button";
import { useUser } from "@/store/user";
import React, { useEffect, useState } from "react";

const Account: React.FC = () => {
	const { user, removeUser } = useUser();

	const [url, setUrl] = useState("");

	useEffect(() => {
		setTimeout(() => {
			setUrl("https://image.tmdb.org/t/p/w185/pNszmvyca2y3BUvDa9MtarvJ1rt.jpg");
		}, 5000);
	}, []);

	return (
		<div>
			<p>Name: {user?.name}</p>
			<br />
			<div className="space-x-2">
				<Button>save user</Button>
				<Button onClick={removeUser}>Delete Account</Button>
			</div>
			<div className="grid grid-cols-4 gap-5">
				<div className="relative aspect-[1/1.5]">
					<div className="absolute top-0 left-0 bg-rose-500"></div>
					<img
						src={url}
						alt=""
						className="w-full h-full absolute top-0 left-0"
					/>
				</div>
			</div>
		</div>
	);
};

export default Account;
