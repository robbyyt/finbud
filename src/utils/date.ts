import { format } from "date-fns";

export const convertDateToUnixTimestamp = (date: string | Date) =>
  Math.floor(new Date(date).getTime() / 1000);

export const formatDate = (date: Date) => {
  return format(date, "yyyy-MM-dd");
};
