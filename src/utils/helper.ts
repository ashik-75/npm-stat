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

export const formatPrice = (number: number) =>
  `$ ${new Intl.NumberFormat("us").format(number).toString()}`;

export const formatDateAndTime = (date: string) => {
  const dateObject = new Date(date);

  return {
    date: dateObject.toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    }),
    time: dateObject.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    }),
  };
};
