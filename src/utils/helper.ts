export const formatDate = (payload: string) => {
	const date = new Date(payload);
	return date.toLocaleDateString("en-US", {
		day: "2-digit",
		year: "numeric",
		month: "long",
	});
};

export const movieDuration = (duration: number) => {
	const hour = parseInt(String(duration / 60));
	const minutes = parseInt(String(duration % 60));
	const seconds = parseInt(String((duration * 60) % 60));
	return `${hour} h ${minutes}m ${seconds}s`;
};
