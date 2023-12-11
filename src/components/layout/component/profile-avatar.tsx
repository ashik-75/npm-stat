import React from "react";
import { useUser } from "@/store/user";
import LazyImage from "@/components/ui/LazyImage";

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";

const ProfileAvatar: React.FC = () => {
  const { user } = useUser();

  if (!user) {
    return null;
  }

  return (
    <div className="">
      <Popover>
        <PopoverTrigger asChild>
          <span className="cursor-pointer">
            <LazyImage
              height={40}
              className="rounded-full border object-center ring-2"
              src="https://source.unsplash.com/boys-face-close-up-photography-n4KewLKFOZw"
              alt=""
            />
          </span>
        </PopoverTrigger>
        <PopoverContent className="w-40" align="end">
          <div className="p-2">
            <h1 className="font-semibold">Alex</h1>
            <p className="text-sm">alex@gmail.com</p>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default ProfileAvatar;
