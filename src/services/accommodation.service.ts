import { axiosInstance } from "@/utils/util.axios";
import { AccommodationFilters } from "@/types/type.index";
export const getAccommodations = async () => {
  const url = `/api/v1/accommodations`;
  return await axiosInstance.get(url);
};

export const searchAccommodations = async (query: AccommodationFilters) => {
  const { rating, priceRange, page, limit } = query ?? {};
  const url = `/api/v1/accommodations/search`;
  const res = await axiosInstance.post(url, {
    rating,
    priceRange: {
      min: priceRange?.[0],
      max: priceRange?.[1],
    },
	page,
	limit
  });

  return res.data;
};
