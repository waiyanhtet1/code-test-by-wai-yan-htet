import { Locale, ProductLocaleContent } from "@/data/product-content";
import Image from "next/image";
import Link from "next/link";
import { LocaleSwitcher } from "./locale-switcher";

type SiteHeaderProps = {
  content: ProductLocaleContent;
  locale: Locale;
  onLocaleChange: (locale: Locale) => void;
  activePath?: "/" | "/list";
};

export function SiteHeader({
  content,
  locale,
  onLocaleChange,
  activePath = "/",
}: SiteHeaderProps) {
  return (
    <header className="border-b border-line-soft bg-surface">
      <div className="mx-auto flex max-w-[1180px] flex-col gap-5 px-4 py-6 lg:flex-row lg:items-center lg:justify-between lg:px-0">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-3 text-brand-logo"
        >
          <Image
            src="/logo.png"
            alt={content.brand}
            width={210}
            height={27}
            priority
            className="h-auto w-[210px]"
          />
        </Link>

        <div className="flex flex-1 flex-col gap-5 lg:ml-16 lg:flex-row lg:items-center lg:justify-between">
          <nav className="flex-1" aria-label="Primary navigation">
            <ul className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 text-sm tracking-[0.16em] text-ink sm:text-base">
              {content.nav.map((item, index) => (
                <li key={item} className="flex items-center gap-4">
                  {index <= 1 ? (
                    <Link
                      href={index === 1 ? "/list" : "/"}
                      className={`transition hover:text-brand ${activePath === (index === 1 ? "/list" : "/")
                          ? "text-brand"
                          : ""
                        }`}
                    >
                      {item}
                    </Link>
                  ) : (
                    <a href="#" className="transition hover:text-brand">
                      {item}
                    </a>
                  )}
                  {index < content.nav.length - 1 ? (
                    <span className="text-ink-muted">/</span>
                  ) : null}
                </li>
              ))}
            </ul>
          </nav>
          <LocaleSwitcher locale={locale} onLocaleChange={onLocaleChange} />
        </div>
      </div>
    </header>
  );
}
