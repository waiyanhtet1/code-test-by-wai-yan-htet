import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProductListContent } from "@/data/list-content";

type ProductListSectionProps = {
  index: number;
  section: ProductListContent["sections"][number];
  allProductsLabel: (category: string) => string;
};

export function ProductListSection({
  index,
  section,
  allProductsLabel,
}: ProductListSectionProps) {
  return (
    <section id={`section-${index}`} className="relative py-16 sm:py-20">
      <div className="pointer-events-none absolute right-4 top-6 hidden text-[104px] leading-none text-surface-soft md:block">
        {section.title}
      </div>

      <div className="relative mx-auto max-w-[1180px] px-4 lg:px-0">
        <h2 className="mb-12 text-center text-4xl tracking-[0.12em] text-brand">
          {section.title}
        </h2>

        <div className="grid grid-cols-2 gap-x-7 gap-y-12 md:grid-cols-3 lg:grid-cols-5">
          {section.products.map((product) => (
            <article
              key={`${section.title}-${product.code}`}
              className="text-center"
            >
              <Link href="/" className="group block">
                <div className="relative mx-auto aspect-square max-w-[180px] overflow-hidden rounded-full bg-surface-image">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 45vw, 180px"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <p className="mt-5 text-xs tracking-[0.08em] text-ink-muted">
                  {product.code}
                </p>
                <h3 className="mt-1 text-sm leading-6 tracking-[0.06em]">
                  {product.name}
                </h3>
                <p className="mt-1 text-sm tracking-[0.04em] text-brand">
                  {product.price}
                </p>
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-flex min-h-12 items-center justify-center gap-3 border border-brand px-7 py-3 text-sm tracking-[0.12em] text-brand transition hover:bg-brand hover:text-page-white"
          >
            {allProductsLabel(section.title)}
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
