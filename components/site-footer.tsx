import { Share2 } from "lucide-react";
import { ProductLocaleContent } from "@/data/product-content";

type SiteFooterProps = {
  content: ProductLocaleContent;
};

export function SiteFooter({ content }: SiteFooterProps) {
  return (
    <footer className="bg-band-footer">
      <div className="mx-auto grid max-w-[1180px] gap-8 px-4 py-16 text-center text-ink-soft md:grid-cols-[1fr_2fr_1fr] md:items-center md:text-left lg:px-0">
        <p className="text-3xl tracking-[0.04em] text-brand-logo">
          {content.brand}
        </p>
        <div className="space-y-3 text-center tracking-[0.08em]">
          <p>{content.footer.address}</p>
          <p>{content.footer.tel}</p>
          <p>{content.footer.holiday}</p>
          <p className="pt-8 text-xs">{content.footer.copyright}</p>
        </div>
        <a
          href="#"
          className="mx-auto grid h-9 w-9 place-items-center rounded-full bg-dark-control text-page-white md:mr-0"
          aria-label="Share"
        >
          <Share2 aria-hidden="true" className="h-4 w-4" />
        </a>
      </div>
    </footer>
  );
}
