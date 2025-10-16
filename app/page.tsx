import ProductCard from "@/components/ProductCard";

export default function Home() {
  const products = [
    {
      name: "Minimal Chair",
      image: "/images/chair.jpg",
      price: 249,
      oldPrice: 299,
      availableOnline: true,
      availableInStore: true,
    },
    {
      name: "Luxury Lamp",
      image: "/images/lamp.jpg",
      price: 179,
      availableOnline: true,
      availableInStore: false,
    },
    {
      name: "Luxury Lamp",
      image: "/images/lamp.jpg",
      price: 179,
      availableOnline: true,
      availableInStore: false,
    },
    {
      name: "Luxury Lamp",
      image: "/images/lamp.jpg",
      price: 179,
      availableOnline: true,
      availableInStore: false,
    },
    {
      name: "Luxury Lamp",
      image: "/images/lamp.jpg",
      price: 179,
      availableOnline: true,
      availableInStore: false,
    },
  ];

  return (
    <section className="mx-auto max-w-5xl px-6 py-10">
      <h2 className="mb-6 text-lg font-semibold text-stone-900 dark:text-stone-100">
        Product Cards
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((p) => (
          <ProductCard key={p.name} {...p} />
        ))}
      </div>
    </section>
  );
}
