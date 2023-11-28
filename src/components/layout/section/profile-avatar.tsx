import React from "react";
import { useUser } from "@/store/user";
import LazyImage from "@/components/ui/LazyImage";

const ProfileAvatar: React.FC = () => {
	const { user } = useUser();

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
