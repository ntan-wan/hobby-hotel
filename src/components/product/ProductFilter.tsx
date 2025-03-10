import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { HTMLAttributes, useState } from "react";

import { Label } from "@radix-ui/react-label";
import { Checkbox } from "@/components/ui/checkbox";
import { AccommodationFilters } from "@/types/type.index";
import { CustomRangeSlider } from "@/components/ui/RangeSlider";

const ProductFilterVariants = cva(["rounded-lg border h-full overflow-y-auto"]);
interface ProductFilterProps extends HTMLAttributes<HTMLDivElement> {
  onFilterChange: (filters: AccommodationFilters) => void;
}
export const ProductFilter = ({ onFilterChange, className, ...props }: ProductFilterProps) => {
  //# VARIALBES
  const propertyType = [{ label: "Hotels" }, { label: "Apartments" }];
  const mealType = [{ label: "Breakfast" }];

  //# STATES
  const [filters, setFilters] = useState<AccommodationFilters>({
    rating: 0.0,
    priceRange: [0, 550],
    amenities: [],
    type: null,
  });

  //# EVENT HANDLERS
  const handleFilterChange = <K extends keyof AccommodationFilters>(key: K, value: AccommodationFilters[K]) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <div className={cn(ProductFilterVariants(), className)} {...props}>
      {/* Header */}
      <p className="sticky top-0 bg-white py-2 px-4 rounded-t-lg font-bold border-b">Filter by:</p>

      {/* Budget */}
      <div className="flex flex-col gap-2 p-4 border-b">
        <p className="font-semibold text-sm">Your budget (per night)</p>
        <p className="text-xs mt-2">
          MYR {filters.priceRange?.[0]} - MYR {filters.priceRange?.[1]}
        </p>
        <CustomRangeSlider className="mt-2" onChange={(value) => handleFilterChange("priceRange", value)} />
      </div>

      {/* Meals */}
      <div className="flex flex-col gap-2 p-4 border-b">
        <p className="font-semibold text-sm">Meals</p>
        {mealType.map((item) => (
          <div key={item.label} className="flex items-center gap-2 text-xs">
            <Checkbox id={item.label} />
            <Label htmlFor={item.label}>{item.label}</Label>
            <p className="ml-auto">207</p>
          </div>
        ))}
      </div>

      {/* Rating */}
      <div className="flex flex-col gap-2 p-4 border-b">
        <p className="font-semibold text-sm">Property Rating</p>
        {[1, 2, 3, 4, 5].map((rating, index) => (
          <div className="flex items-center gap-2 text-xs" key={index}>
            <Checkbox id={`${index}`} onCheckedChange={() => handleFilterChange("rating", rating)} />
            <Label htmlFor={`${index}`}>{rating} star</Label>
            <p className="ml-auto">207</p>
          </div>
        ))}
      </div>

      {/* Property type */}
      <div className="flex flex-col gap-2 p-4">
        <p className="font-semibold text-sm">Property type</p>
        {propertyType.map((item) => (
          <div key={item.label} className="flex items-center gap-2 text-xs">
            <Checkbox />
            <p>{item.label}</p>
            <p className="ml-auto">207</p>
          </div>
        ))}
      </div>
    </div>
  );
};
