import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

import { Checkbox } from "@/components/ui/checkbox";

const ProductFilterVariants = cva(["rounded-lg border h-full overflow-y-auto"]);
export const ProductFilter = () => {
  const propertyType = [{ label: "Hotels" }, { label: "Apartments" }];
  const mealType = [{ label: "Breakfast" }];
  return (
    <div className={cn(ProductFilterVariants())}>
      {/* Header */}
      <p className="sticky top-0 bg-white py-2 px-4 rounded-t-lg font-bold border-b">Filter by:</p>

      {/* Meals */}
      <div className="flex flex-col gap-2 p-4 border-b">
        <p className="font-semibold text-sm">Meals</p>
        {mealType.map((item) => (
          <div key={item.label} className="flex items-center gap-2 text-xs">
            <Checkbox />
            <p>{item.label}</p>
            <p className="ml-auto">207</p>
          </div>
        ))}
      </div>

      {/* Rating */}
      <div className="flex flex-col gap-2 p-4 border-b">
        <p className="font-semibold text-sm">Property Rating</p>
        {[1, 2, 3, 4, 5].map((item, index) => (
          <div className="flex items-center gap-2 text-xs" key={index}>
            <Checkbox />
            <p>{item} star</p>
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
