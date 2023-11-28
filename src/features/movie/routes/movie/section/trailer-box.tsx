import React, { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import ReactPlayer from "react-player";

interface TrailerBoxProps {
	trailerId?: string;
}

const TrailerBox: React.FC<TrailerBoxProps> = ({ trailerId }) => {
	const [open, setOpen] = useState(false);

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<Button
					disabled={!trailerId}
					variant="destructive"
					className="font-semibold"
				>
					<span>
						<Play />
					</span>
					Play Trailer
				</Button>
			</DialogTrigger>
			<DialogContent className="max-w-3xl">
				<ReactPlayer
					url={`https://www.youtube.com/watch?v=${trailerId}`}
					width={"100%"}
					controls
				/>
			</DialogContent>
		</Dialog>
	);
};

export default TrailerBox;
