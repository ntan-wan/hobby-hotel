import { cn } from "@/lib/utils";
import { match } from "ts-pattern";
import { utils } from "@/utils/util.index";
import { useMutation } from "@tanstack/react-query";
import { useCallback, useEffect, useState } from "react";
import { AccommodationFilters, Accommodation } from "@/types/type.index";

import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/product/ProductCard";
import { ChevronLeft, ChevronRight, XCircle } from "lucide-react";
import { ProductFilter } from "@/components/product/ProductFilter";
import { searchAccommodations } from "@/services/accommodation.service";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem } from "@/components/ui/pagination";

export const HomePage = () => {
  //# STATES
  const [selectedFilters, setSelectedFilters] = useState<AccommodationFilters>({
    priceRange: [0, 550],
  });
  const [currentPage, setCurrentPage] = useState(1);

  //# LIFE CYCLE
  useEffect(() => {
    debouncedSearch(selectedFilters);
  }, []);

  //# DATA FETCHING
  const {
    data: accommodations,
    mutateAsync: mutateSearchAccommodations,
    isPending: accommodationIsLoading,
    isError: accommodationIsError,
  } = useMutation<Accommodation[], Error, AccommodationFilters>({
    mutationKey: ["searchAccommodations"],
    mutationFn: searchAccommodations,
  });

  //# METHODS
  const calculatePageRange = (currentPage: number, totalPages: number) => {
    let startPage = Math.max(1, currentPage - 2);
    const endPage = Math.min(startPage + 4, totalPages);

    if (endPage - startPage < 4) {
      startPage = Math.max(1, endPage - 4);
    }

    return { startPage, endPage };
  };
  const renderPageButton = (pageNum: number, currentPage: number, onClick: (page: number) => void) => (
    <PaginationItem key={pageNum}>
      <Button
        className={cn(currentPage === pageNum && "bg-blue-600 text-white hover:bg-blue-700 hover:text-white transition-colors")}
        variant="ghost"
        onClick={() => onClick(pageNum)}>
        {pageNum}
      </Button>
    </PaginationItem>
  );
  const debouncedSearch = useCallback(
    utils.debounce((filters: AccommodationFilters) => {
      mutateSearchAccommodations(filters);
      setSelectedFilters(filters);
    }, 500),
    []
  );

  //# EVENT HANDLERS
  const handleNextPage = () => {
    if (currentPage < accommodations?.meta?.pages) {
      onClickPage(currentPage + 1);
    }
  };
  const handleFilterChange = (filters: AccommodationFilters) => {
    debouncedSearch(filters);
  };
  const onClickPage = (page: number) => {
    mutateSearchAccommodations({ ...selectedFilters, page });
    setCurrentPage(page);
  };

  return (
    <div>
      {/* Products */}
      <div className="flex gap-4">
        <div className="w-3/12 sticky top-[140px] self-start h-screen">
          <ProductFilter onFilterChange={handleFilterChange} />
        </div>
        <div className="w-9/12 flex flex-col gap-4">
          {/* Properties Count */}
          <h1 className="text-xl font-bold">
            Kuala Lumpur: <span>{accommodations?.meta?.total.toLocaleString()}</span> properties found
          </h1>
          {match({ accommodationIsLoading, accommodationIsError })
            .with({ accommodationIsLoading: true }, () => {
              return (
                <>
                  {Array.from({ length: 10 }).map((_, index) => (
                    <ProductCard key={index} isLoading={true} />
                  ))}
                </>
              );
            })
            .with({ accommodationIsError: true }, () => {
              return (
                <div className="flex flex-col items-center justify-center p-8 text-center">
                  <XCircle className="w-16 h-16 text-red-500 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Error Loading Properties</h3>
                  <p className="text-gray-600 mb-4">We encountered an issue while fetching the properties. Please try again.</p>
                  <Button variant="outline" onClick={() => mutateSearchAccommodations(selectedFilters)}>
                    Try Again
                  </Button>
                </div>
              );
            })
            .otherwise(() => {
              return (
                <>
                  {accommodations?.data?.map((accommodation, index) => (
                    <ProductCard key={index} product={accommodation} />
                  ))}

                  {/* Pagination */}

                  <div className="text-center mt-2">
                    <Pagination>
                      <PaginationContent>
                        <PaginationItem>
                          <Button variant="ghost" disabled={currentPage === 1} onClick={() => onClickPage(currentPage - 1)}>
                            <ChevronLeft /> Previous
                          </Button>
                        </PaginationItem>

                        {accommodations?.meta?.pages > 1 &&
                          (() => {
                            const { startPage, endPage } = calculatePageRange(currentPage, accommodations.meta.pages);
                            return Array.from({ length: endPage - startPage + 1 }, (_, i) => renderPageButton(startPage + i, currentPage, onClickPage));
                          })()}

                        <PaginationItem>
                          <PaginationEllipsis />
                        </PaginationItem>

                        <PaginationItem>
                          <Button variant="ghost" disabled={currentPage === accommodations?.meta?.pages} onClick={() => handleNextPage()}>
                            Next <ChevronRight />
                          </Button>
                        </PaginationItem>
                      </PaginationContent>
                    </Pagination>
                  </div>
                </>
              );
            })}
        </div>
      </div>
    </div>
  );
};
