"use client";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { HeroCarousel } from "@/components/hero-carousel";
import { ProductInfo } from "@/components/product-info";
import { RelatedProducts } from "@/components/related-products";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Locale, productContent } from "@/data/product-content";
import { ChevronLeft } from "lucide-react";
import { useState } from "react";

export function ProductDetailScreen() {
  const [locale, setLocale] = useState<Locale>("ja");
  const content = productContent[locale];

  return (
    <div className="min-h-screen bg-surface text-foreground">
      <SiteHeader
        content={content}
        locale={locale}
        onLocaleChange={setLocale}
        activePath="/"
      />
      <Breadcrumbs items={content.breadcrumb} />

      <main>
        <section className="mx-auto grid max-w-[1180px] gap-10 px-4 py-10 md:grid-cols-[1.04fr_0.9fr] md:gap-10 lg:px-0">
          <HeroCarousel />
          <ProductInfo content={content} />
        </section>

        <section className="mx-auto max-w-[1180px] px-4 pt-8 lg:px-0">
          <div className="border-y border-line py-4">
            <a
              href="#"
              className="inline-flex items-center gap-3 text-sm transition hover:text-brand"
            >
              <span className="grid h-5 w-5 place-items-center rounded-full bg-dark-control text-page-white">
                <ChevronLeft aria-hidden="true" className="h-3.5 w-3.5" />
              </span>
              {content.back}
            </a>
          </div>
        </section>

        <RelatedProducts content={content} />
      </main>

      <SiteFooter content={content} />
    </div>
  );
}
