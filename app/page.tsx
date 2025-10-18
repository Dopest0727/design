import Hero from "@/components/Hero";
import BestSellers from "@/components/BestSellers";
import Footer from "@/components/Footer";
import HistorySection from "@/components/History";

export default function Home() {
  return (
    <h1>
      <Hero />
      <BestSellers />
      <HistorySection />
      <Footer />
    </h1>
  );
}
