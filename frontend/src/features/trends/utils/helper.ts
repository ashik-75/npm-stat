import { ChartEntry, NpmDownload } from "@/features/trends/types";
import { format, subMonths } from "date-fns";

export const formatDataForChart = (list: NpmDownload[]): ChartEntry[] => {
  return list?.reduce((result: ChartEntry[], packageData) => {
    const packageName = packageData?.package as string;
    packageData?.downloads.forEach(({ downloads, day }) => {
      const existingEntry = result.find((entry) => entry.date === day);
      if (existingEntry) {
        existingEntry[packageName] = downloads;
      } else {
        result.push({ date: day, [packageName]: downloads });
      }
    });
    return result;
  }, []);
};

export const getUniqueArray = (packet?: string) => {
  return packet === undefined ? [] : [...new Set(packet.split("-vs-"))];
};

export const valueFormatter = (number: number) =>
  Intl.NumberFormat("us").format(number).toString();

export const dateDiff = (month: number) => {
  const today = new Date(); // current date
  const monthAgo = subMonths(today, month);

  const formattedToday = format(today, "yyyy-MM-dd"); // format today's date
  const formattedPastMonth = format(monthAgo, "yyyy-MM-dd");

  return `${formattedPastMonth}:${formattedToday}`;
};

export const formatDate = (date: string) => {
  const currentDate = new Date(date);

  return format(currentDate, "LLL dd");
};
