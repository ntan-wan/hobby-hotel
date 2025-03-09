import { axiosInstance } from "@/utils/util.axios";

export const getAccommodations = async () => {
  const url = `/accommodations`;
  return await axiosInstance.get(url);
};
