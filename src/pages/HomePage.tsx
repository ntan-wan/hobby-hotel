import { useState } from "react";
import { match } from "ts-pattern";
import dummyProperties from "@/assets/jsons/dummy-properties.json";

import { ProductCard } from "@/components/product/ProductCard";
import { ProductFilter } from "@/components/product/ProductFilter";
import { Button } from "@/components/ui/button";

export const HomePage = () => {
  //# STATES
  const [isLoading, setIsLoading] = useState(false);
  const properties = dummyProperties;

  //# EVENT HANDLERS
  const onClickLoadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="">
      {/* Products */}
      <div className="flex gap-4">
        <div className="w-3/12 sticky top-[140px] self-start h-screen">
          <ProductFilter />
        </div>
        <div className="w-9/12 flex flex-col gap-4">
          {match({ isLoading })
            .with({ isLoading: true }, () => {
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
                  {properties.map((property, index) => (
                    <ProductCard key={index} product={property} />
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
