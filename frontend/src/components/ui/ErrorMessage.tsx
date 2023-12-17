import React from "react";
import { FileWarning } from "lucide-react";

type ErrorMessageProps = {
	message?: string;
};
const ErrorMessage: React.FC<ErrorMessageProps> = ({
	message = "Something went wrong, please try again.",
}) => {
	return (
		<div className="max-w-xl overflow-auto mx-auto p-5 border rounded text-center space-y-3">
			<div className="flex justify-center">
				<FileWarning size={30} className="text-rose-500" />
			</div>
			<div className="space-y-2">
				<p className="text-rose-500">Something went wrong, please try again</p>
				<pre className="border rounded px-2   inline-block">{message}</pre>
			</div>
		</div>
	);
};

export default ErrorMessage;
