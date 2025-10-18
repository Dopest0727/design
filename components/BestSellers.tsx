"use client";

import ProductCard from "./ProductCard";
import BEST_1 from "../assets/BEST_SELLERS_1.avif";
import BEST_2 from "../assets/BEST_SELLERS_2.avif";
import BEST_3 from "../assets/BEST_SELLERS_3.avif";

export default function BestSellers() {
  const products = [
    {
      name: "Tokyo Lamp",
      image: BEST_1,
      price: 899,
      oldPrice: 1699,
      availableOnline: true,
      availableInStore: true,
    },
    {
      name: "Okinawa Lamp",
      image: BEST_2,
      price: 2299,
      availableOnline: true,
      availableInStore: false,
    },
    {
      name: "Kyoto Lamp",
      image: BEST_3,
      price: 1399,
      availableOnline: true,
      availableInStore: true,
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-10">
      <h2 className="mb-6 text-xl font-semibold text-stone-900 dark:text-stone-100">
        Bästsäljare
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((p) => (
          <ProductCard key={p.name} {...p} />
        ))}
      </div>
    </section>
  );
}
