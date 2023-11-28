import React from "react";

import { useUser } from "@/store/user";
import { useNavigate } from "react-router-dom";
import LazyImage from "@/components/ui/LazyImage";

const ProfileAvatar: React.FC = () => {
	const { user, removeUser } = useUser();
	const navigate = useNavigate();

	if (!user) {
		return null;
	}

	return (
		<div className="">
			<LazyImage
				height={50}
				className="rounded-full object-center"
				src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
				alt=""
			/>
		</div>
	);
};

export default ProfileAvatar;
