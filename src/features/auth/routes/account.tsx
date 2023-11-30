import { Button } from "@/components/ui/button";
import { cn } from "@/utils/merge";
import { icons } from "lucide-react";
import React, { useState } from "react";

const Account: React.FC = () => {
  const [number, setNumber] = useState(18);

  return (
    <div className="space-y-5">
      <div className="space-x-5">
        <Button onClick={() => setNumber((prev) => prev + 1)}>Increment</Button>
        <span>{number}</span>
        <Button
          onClick={() => setNumber((prev) => (prev > 10 ? prev - 1 : prev))}
        >
          Decrement
        </Button>
      </div>

      <div className="grid grid-cols-4 gap-5">
        <Loader name="RotateCw" size={number} />
        <Loader name="CircleDashed" size={number} />
        <Loader name="RefreshCcw" size={number} />
        <Loader name="Loader2" size={number} />
        <Loader name="Loader" size={number} />
        <Loader name="RotateCcw" size={number} />
        <Loader name="Airplay" className="animate-pulse" size={number} />
      </div>
    </div>
  );
};

export default Account;

export type IconName = keyof typeof icons;

interface IconProps {
  name: IconName;
  size?: number;
  color?: string;
  className?: string;
  strokeWidth?: string;
}

const Loader: React.FC<IconProps> = ({ size, name, className }) => {
  const LucideIcon = icons[name];
  return (
    <LucideIcon
      size={size}
      className={cn(`animate-spin text-zinc-500`, className)}
    />
  );
};
