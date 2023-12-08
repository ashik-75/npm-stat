import React from "react";
import { useUser } from "@/store/user";
import LazyImage from "@/components/ui/LazyImage";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const ProfileAvatar: React.FC = () => {
  const { user } = useUser();

  if (!user) {
    return null;
  }

  return (
    <div className="">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <span className="cursor-pointer">
            <LazyImage
              height={40}
              className="rounded-full border object-center ring-2"
              src="https://source.unsplash.com/boys-face-close-up-photography-n4KewLKFOZw"
              alt=""
            />
          </span>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-40" align="end">
          <div className="p-2">
            <h1 className="font-semibold">Alex</h1>
            <p className="text-sm">alex@gmail.com</p>
          </div>
          <DropdownMenuSeparator />
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuGroup>
            <DropdownMenuItem>
              Profile
              <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              Billing
              <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              Settings
              <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default ProfileAvatar;
