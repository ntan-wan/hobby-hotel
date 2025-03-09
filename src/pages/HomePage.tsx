import { match } from "ts-pattern";
import { useQuery } from "@tanstack/react-query";

import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/product/ProductCard";
import { ProductFilter } from "@/components/product/ProductFilter";
import { getAccommodations } from "@/services/accommodation.service";

export const HomePage = () => {
  //# STATES

  //# REACT QUERY
  const {
    data: accommodations,
    isLoading: accommodationIsLoading,
    isError: accommodationIsError,
    refetch: refetchAccommodations,
  } = useQuery({
    queryKey: ["accommodations"],
    queryFn: () => getAccommodations(),
    select: (res) => res.data,
  });

  //# EVENT HANDLERS
  const onClickLoadMore = () => {
    refetchAccommodations();
  };

  return (
    <div className="">
      {/* Products */}
      <div className="flex gap-4">
        <div className="w-3/12 sticky top-[140px] self-start h-screen">
          <ProductFilter />
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
