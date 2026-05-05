"use client";

import { CategoryNav } from "@/components/category-nav";
import { ListHero } from "@/components/list-hero";
import { ProductListSection } from "@/components/product-list-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { listContent } from "@/data/list-content";
import { productContent } from "@/data/product-content";
import { useCart } from "@/hooks/use-cart";
import { usePersistedLocale } from "@/hooks/use-persisted-locale";

export function ProductListScreen() {
  const [locale, setLocale] = usePersistedLocale();
  const { addToCart, cart, cartCount, removeFromCart } = useCart();
  const headerContent = productContent[locale];
  const content = listContent[locale];

  return (
    <div className="min-h-screen bg-surface text-foreground">
      <SiteHeader
        content={headerContent}
        locale={locale}
        onLocaleChange={setLocale}
        activePath="/list"
        cartItems={cart}
        cartCount={cartCount}
        onRemoveFromCart={removeFromCart}
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
            addToCartLabel={headerContent.cart.add}
            onAddToCart={addToCart}
          />
        ))}
      </main>
      <SiteFooter content={headerContent} />
    </div>
  );
}
