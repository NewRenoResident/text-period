import dayjs from "dayjs";
import ru from "dayjs/locale/ru";

export const formatDate = (date: string) => {
  return dayjs(date).locale(ru).format("DD MMMM YYYY");
};
