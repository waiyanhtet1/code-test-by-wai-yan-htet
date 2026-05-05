"use client";

import { useState } from "react";
import { CategoryNav } from "@/components/category-nav";
import { ListHero } from "@/components/list-hero";
import { ProductListSection } from "@/components/product-list-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { listContent } from "@/data/list-content";
import { Locale, productContent } from "@/data/product-content";

export function ProductListScreen() {
  const [locale, setLocale] = useState<Locale>("ja");
  const headerContent = productContent[locale];
  const content = listContent[locale];

  return (
    <div className="min-h-screen bg-surface text-foreground">
      <SiteHeader
        content={headerContent}
        locale={locale}
        onLocaleChange={setLocale}
        activePath="/list"
      />
      <main>
        <ListHero title={content.title} />
        <CategoryNav categories={content.categories} />
        {content.sections.map((section, index) => (
          <ProductListSection
            key={section.title}
            index={index}
            section={section}
            allProductsLabel={content.allProductsLabel}
          />
        ))}
      </main>
      <SiteFooter content={headerContent} />
    </div>
  );
}
