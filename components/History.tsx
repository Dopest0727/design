"use client";
import Image from "next/image";
import HIST_1 from "../assets/HIST_1.jpg";
import HIST_2 from "../assets/HIST_2.jpg";
import HIST_3 from "../assets/HIST_3.jpg";

export default function HistoryBento() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 auto-rows-[300px] md:auto-rows-[250px]">
        {/* TEXT (Top left) */}
        <div className="md:row-span-1 flex flex-col justify-center space-y-4 rounded-lg bg-white dark:bg-stone-900 p-8 shadow-sm border border-stone-200 dark:border-stone-700">
          <h2 className="text-2xl md:text-3xl font-semibold text-stone-900 dark:text-stone-100">
            Historien om rislampor
          </h2>
          <p className="text-stone-700 dark:text-stone-300 leading-relaxed">
            Rislampor har använts i århundraden i olika kulturer, från
            ceremonier till vardagsbelysning. Deras unika design har påverkat
            både estetik och funktion, och de symboliserar ofta ljus, värme och
            gemenskap.
          </p>
        </div>

        {/* IMAGE 1 — Large, 50% width, full height on right */}
        <div className="md:col-span-1 md:row-span-3 relative overflow-hidden rounded-lg shadow-sm">
          <Image
            src={HIST_1}
            alt="Traditional rice lamp hanging"
            fill
            className="object-cover brightness-95 object-top"
          />
        </div>

        {/* IMAGE 2 */}
        <div className="relative overflow-hidden rounded-lg shadow-sm">
          <Image
            src={HIST_2}
            alt="Lanterns during festival"
            fill
            className="object-cover brightness-95"
          />
        </div>

        {/* IMAGE 3 */}
        <div className="relative overflow-hidden rounded-lg shadow-sm">
          <Image
            src={HIST_3}
            alt="Modern interior with rice lamp"
            fill
            className="object-cover brightness-95"
          />
        </div>
      </div>
    </section>
  );
}
