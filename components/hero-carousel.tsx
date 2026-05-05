"use client";

import { productImages } from "@/data/product-content";
import Image from "next/image";
import { useEffect, useState } from "react";

export function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % productImages.length);
    }, 2000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section aria-label="Product images" className="w-full">
      <div className="relative aspect-[560/372] overflow-hidden bg-surface-image">
        {productImages.map((image, index) => (
          <Image
            key={image.src}
            src={image.src}
            alt={image.alt}
            fill
            priority={index === 0}
            sizes="(max-width: 1024px) 100vw, 560px"
            className={`object-cover transition duration-700 ease-out ${
              activeIndex === index
                ? "translate-x-0 opacity-100"
                : "translate-x-4 opacity-0"
            }`}
          />
        ))}
      </div>

      <div className="mt-4 flex justify-center gap-4">
        {productImages.map((image, index) => (
          <button
            key={image.src}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`h-3 w-3 rounded-full transition ${
              activeIndex === index
                ? "scale-110 bg-brand"
                : "bg-dark-control hover:bg-brand"
            }`}
            aria-label={`Show image ${index + 1}`}
            aria-pressed={activeIndex === index}
          />
        ))}
      </div>
    </section>
  );
}
