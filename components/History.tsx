"use client";
import Image from "next/image";
import { useState } from "react";
import HIST_1 from "../assets/HIST_1.jpg";
import HIST_2 from "../assets/HIST_2.jpg";
import HIST_3 from "../assets/HIST_3.jpg";

const historyImages = [HIST_1, HIST_2, HIST_3];

export default function HistorySection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? historyImages.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === historyImages.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="mx-auto max-w-7xl h-[80vh] px-6 py-20">
      <div className="grid grid-cols-1 h-full md:grid-cols-2 gap-12 items-center">
        {/* Left: Text content */}
        <div className="flex flex-col justify-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-stone-900 dark:text-stone-100">
            Historien om rislampor
          </h2>
          <p className="text-stone-700 dark:text-stone-300 leading-relaxed">
            Rislampor har använts i århundraden i olika kulturer, från
            ceremonier till vardagsbelysning. Deras unika design har påverkat
            både estetik och funktion, och de symboliserar ofta ljus, värme och
            gemenskap.
          </p>
          <p className="text-stone-700 dark:text-stone-300 leading-relaxed">
            Genom tiderna har rislampor inte bara varit ett praktiskt föremål
            utan också en konstform, och deras kulturella betydelse syns i allt
            från festivaler till modern inredning.
          </p>
        </div>

        {/* Right: Carousel */}
        <div className="relative w-full md:h-full rounded-lg overflow-hidden shadow-md">
          <Image
            src={historyImages[currentIndex]}
            alt={`Lamp image ${currentIndex + 1}`}
            fill
            className="object-cover object-top"
          />

          {/* Navigation */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-4 -translate-y-1/2 rounded-sm py-1 border border-stone-100 dark:border dark:border-stone-stone-900 px-4 text-stone-100 dark:text-stone-100 transition-colors backdrop-blur-xl"
          >
            &#8592;
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-4 -translate-y-1/2 rounded-sm py-1 border border-stone-100 dark:border dark:border-stone-stone-900 px-4 text-stone-100 dark:text-stone-100 transition-colors backdrop-blur-xl"
          >
            &#8594;
          </button>

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {historyImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 w-2 rounded-full ${
                  currentIndex === idx
                    ? "bg-red-500"
                    : "bg-stone-300 dark:bg-stone-500"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
