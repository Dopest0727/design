"use client";
import Image from "next/image";
import { StaticImageData } from "next/image";

interface ProductCardProps {
  name: string;
  image: string | StaticImageData;
  price: number;
  oldPrice?: number;
  availableOnline?: boolean;
  availableInStore?: boolean;
}

export default function ProductCard({
  name,
  image,
  price,
  oldPrice,
  availableOnline = true,
  availableInStore = false,
}: ProductCardProps) {
  return (
    <div className="group rounded-xs border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-900 p-3 shadow-sm transition-all hover:shadow-md hover:-translate-y-1">
      {/* Product image */}
      <div className="relative aspect-square w-full overflow-hidden rounded-xs bg-stone-100 dark:bg-stone-800">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Product info */}
      <div className="mt-2 space-y-1">
        <h3 className="text-lg font-medium text-stone-900 dark:text-stone-100 truncate">
          {name}
        </h3>

        {/* Price */}
        <div className="flex items-baseline gap-4">
          <p
            className={`text-base font-semibold ${
              oldPrice ? "text-red-500" : "text-stone-100"
            }`}
          >
            kr {price.toFixed(2)}
          </p>

          {oldPrice && (
            <p className="text-sm text-stone-700 dark:text-stone-500 line-through">
              kr {oldPrice.toFixed(2)}
            </p>
          )}
        </div>

        {/* Availability */}
        <p className="text-xs text-stone-500 dark:text-stone-400">
          {availableOnline && "Online"}
          {availableOnline && availableInStore && " & "}
          {availableInStore && "Varuhus"}
        </p>
      </div>
    </div>
  );
}
