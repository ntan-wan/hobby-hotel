import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { Property } from "@/types/type.index";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import imgPlaceholder from "@/assets/imgs/img-placeholder.jpg";
import { ChevronRight, Check, Heart, Star } from "lucide-react";

const productCardVariants = cva(["border", "rounded-lg", "p-4", "shadow-md"]);
interface ProductCardProps extends React.HTMLAttributes<HTMLDivElement> {
  isLoading?: boolean;
  product: Property;
}
export const ProductCard = ({ product, className, isLoading = false, ...props }: ProductCardProps) => {
  const isFavourite = false;
  const { thumbnail, name, rating, ammenities } = product ?? {};

  if (isLoading) {
    return (
      <div className={productCardVariants()}>
        <div className="flex gap-4">
          <Skeleton className="w-[240px] h-[240px] rounded-lg"></Skeleton>
          <div>
            <Skeleton className="w-[440px] h-[24px] rounded-lg"></Skeleton>
            <Skeleton className="w-[240px] h-[24px] rounded-lg mt-3"></Skeleton>
            <Skeleton className="w-[240px] h-[24px] rounded-lg mt-3"></Skeleton>

            <div className="mt-10">
              <Skeleton className="w-[200px] h-[24px] rounded-lg mt-3"></Skeleton>
              <Skeleton className="w-[200px] h-[24px] rounded-lg mt-3"></Skeleton>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={cn(productCardVariants(), className)} {...props}>
      <div className="flex gap-4">
        {/* Img */}
        <div className="relative">
          <Button variant="ghost" size="icon" className="absolute top-2 right-2 bg-white rounded-full">
            <Heart fill={isFavourite ? "red" : "white"} stroke={isFavourite ? "red" : "black"} />
          </Button>
          <img className="object-cover rounded-lg w-[240px] h-[240px]" src={thumbnail ? thumbnail : imgPlaceholder} width={240} height={240} />
        </div>

        {/* Details */}
        <div className="flex flex-col gap-4 flex-1">
          <div className="flex justify-between gap-4">
            <div className="">
              <h1 className="text-xl font-bold text-blue-600 flex items-center gap-2">
                {name}
                <Badge variant="outline" className="border-gray-500 rounded-sm font-normal">
                  Featured
                </Badge>
              </h1>
              <p className="text-xs mt-1 flex items-center gap-2">
                <span className="text-blue-600 underline font-medium">Pudu, Kuala Lumpur</span> <span>3.3 km from center</span>
              </p>
            </div>
            <div className="text-right flex flex-col gap-1">
              <div>
                <p className="flex items-center gap-2 justify-end">
                  <Star className="text-yellow-400" size={16} /> <span className="text-sm">{rating?.toFixed(1) ?? 0.0}</span>
                </p>
                <p className="text-xs text-gray-500">7 external reviews</p>
              </div>
              <div className="text-right">
                <Badge className="bg-yellow-400 text-black rounded-sm font-normal">New to Booking.com</Badge>
              </div>
            </div>
          </div>

          <div className="flex justify-between gap-4 pl-2 border-l-2">
            <div className="text-xs flex flex-col gap-2">
              <p className="font-bold">One-Bedroom Apartment</p>
              <p>{ammenities?.join(" . ")}</p>
              <p className="flex items-center gap-1 text-green-700">
                <Check size={16} />
                <span className="font-semibold">Free cancellation</span>
              </p>
              <p className="flex items-center gap-1 text-green-700">
                <Check size={16} />
                <span className="font-semibold">No prepayment needed - pay at the property</span>
              </p>
            </div>
            <div className="text-right text-xs flex flex-col gap-1">
              <p className=" text-gray-500">1 night, 2 adults</p>
              <p className="text-xl">
                <span className="text-xs text-red-500 line-through mr-1">MYR 199</span>MYR 100
              </p>
              <p className="text-gray-700 text-nowrap"> Addtional charge may apply</p>
              <div className="mt-auto">
                <Button className=" mt-3 bg-blue-600 hover:bg-blue-500">
                  See availability <ChevronRight />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
