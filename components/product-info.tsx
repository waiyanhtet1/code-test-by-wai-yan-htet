import { ChevronRight } from "lucide-react";
import { ProductLocaleContent } from "@/data/product-content";

type ProductInfoProps = {
  content: ProductLocaleContent;
};

export function ProductInfo({ content }: ProductInfoProps) {
  return (
    <section className="text-ink">
      <h1 className="border-b border-brand pb-4 text-2xl leading-snug tracking-[0.08em] text-brand sm:text-[28px]">
        {content.title}
      </h1>

      <p className="mt-4 text-base leading-8 tracking-[0.08em]">
        {content.description}
      </p>

      <div className="mt-6 border border-line px-5 py-4 sm:px-6">
        <h2 className="text-xl tracking-[0.08em] text-brand">
          {content.makerName}
        </h2>
        <p className="mt-3 text-sm leading-7 tracking-[0.08em]">
          {content.makerBio}
        </p>
      </div>

      <dl className="mt-8 border-y border-line text-sm">
        {content.detailRows.map(([label, value]) => (
          <div
            key={label}
            className="grid grid-cols-[7.5rem_1fr] border-b border-line py-3 last:border-b-0 sm:grid-cols-[8rem_1fr]"
          >
            <dt>{label}</dt>
            <dd>{value}</dd>
          </div>
        ))}
      </dl>

      <p className="mt-6 flex flex-wrap items-baseline gap-2">
        <span className="text-3xl text-brand">{content.price}</span>
        <span className="text-base">{content.tax}</span>
      </p>

      <a
        href="#"
        className="mt-10 flex min-h-14 items-center justify-center gap-5 bg-brand px-6 py-4 text-center text-lg font-semibold tracking-[0.08em] text-page-white transition hover:bg-brand-dark"
      >
        <span>{content.cta}</span>
        <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-surface text-brand">
          <ChevronRight aria-hidden="true" className="h-4 w-4" />
        </span>
      </a>
    </section>
  );
}
