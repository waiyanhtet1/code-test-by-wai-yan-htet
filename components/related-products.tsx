import Image from "next/image";
import { ProductLocaleContent } from "@/data/product-content";

type RelatedProductsProps = {
  content: ProductLocaleContent;
};

const relatedImages = [
  "/products/related-1.png",
  "/products/related-2.png",
  "/products/related-3.png",
  "/products/related-4.png",
  "/products/related-5.png",
];

export function RelatedProducts({ content }: RelatedProductsProps) {
  return (
    <section className="mx-auto max-w-[1180px] px-4 py-16 lg:px-0">
      <div className="relative mb-14 text-center">
        <span className="absolute left-1/2 top-1/2 -z-0 -translate-x-1/2 -translate-y-1/2 border-2 border-line-faint px-7 py-3 text-xs text-line">
          APPI
        </span>
        <h2 className="relative text-3xl tracking-[0.08em] text-brand">
          {content.relatedTitle}
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
        {content.related.map((product, index) => (
          <article key={product.name} className="text-center">
            <div className="relative mx-auto aspect-square max-w-[172px] overflow-hidden rounded-full bg-band">
              <Image
                src={relatedImages[index]}
                alt={product.name}
                fill
                sizes="(max-width: 640px) 45vw, 172px"
                className="object-cover transition duration-500 hover:scale-105"
              />
            </div>
            <h3 className="mt-4 text-sm leading-6 tracking-[0.04em]">
              {product.name}
            </h3>
            <p className="mt-1 text-sm tracking-[0.04em] text-brand">
              {product.price}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
