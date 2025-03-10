import { match } from "ts-pattern";
import { utils } from "@/utils/util.index";
import { useCallback, useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { AccommodationFilters, Accommodation } from "@/types/type.index";

import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/product/ProductCard";
import { ProductFilter } from "@/components/product/ProductFilter";
import { searchAccommodations } from "@/services/accommodation.service";

export const HomePage = () => {
  //# LIFE CYCLE
  useEffect(() => {
    debouncedSearch({
      priceRange: [0, 550],
    });
  }, []);

  //# REACT QUERIES
  const {
    data: accommodations,
    mutateAsync: executeSearch,
    isPending: accommodationIsLoading,
  } = useMutation<Accommodation[], Error, AccommodationFilters>({
    mutationKey: ["searchAccommodations"],
    mutationFn: searchAccommodations,
  });

  //# METHODS
  const debouncedSearch = useCallback(
    utils.debounce((filters: AccommodationFilters) => {
      executeSearch(filters);
    }, 500),
    []
  );
  //# EVENT HANDLERS
  const handleFilterChange = (filters: AccommodationFilters) => {
    debouncedSearch(filters);
  };
  const onClickLoadMore = () => {};

  return (
    <div>
      {/* Products */}
      <div className="flex gap-4">
        <div className="w-3/12 sticky top-[140px] self-start h-screen">
          <ProductFilter onFilterChange={handleFilterChange} />
        </div>
        <div className="w-9/12 flex flex-col gap-4">
          {match({ accommodationIsLoading })
            .with({ accommodationIsLoading: true }, () => {
              return (
                <>
                  {Array.from({ length: 10 }).map((_, index) => (
                    <ProductCard key={index} isLoading={true} />
                  ))}
                </>
              );
            })
            .otherwise(() => {
              return (
                <>
                  {accommodations?.map((accommodation, index) => (
                    <ProductCard key={index} product={accommodation} />
                  ))}
                </>
              );
            })}

          <div className="text-center mt-2">
            <Button
              onClick={() => onClickLoadMore()}
              variant="outline"
              className="transition-colors p-4 border-blue-600 text-blue-600 hover:border-blue-500 hover:bg-blue-50 hover:text-blue-500">
              Load More Results
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
