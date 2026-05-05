"use client";

import { Locale, ProductLocaleContent } from "@/data/product-content";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="border-b border-line-soft bg-surface">
      <div className="mx-auto flex max-w-[1380px] flex-col px-4 lg:px-10 py-6 lg:flex-row lg:items-center lg:justify-between lg:px-0">
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/"
            className="flex shrink-0 items-center gap-3 text-brand-logo"
            onClick={closeMenu}
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

          <button
            type="button"
            onClick={() => setIsMenuOpen((current) => !current)}
            className="grid h-11 w-11 place-items-center border border-line text-ink transition hover:border-brand hover:text-brand lg:hidden"
            aria-label={
              isMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={isMenuOpen}
            aria-controls="site-navigation"
          >
            {isMenuOpen ? (
              <X aria-hidden="true" className="h-5 w-5" />
            ) : (
              <Menu aria-hidden="true" className="h-5 w-5" />
            )}
          </button>
        </div>

        <div
          id="site-navigation"
          className={`${isMenuOpen ? "grid" : "hidden"
            } gap-5 border-t border-line pt-5 lg:mt-0 lg:flex lg:ml-10 lg:border-t-0 lg:pt-0 lg:items-center lg:flex-1 lg:justify-between`}
        >
          <nav aria-label="Primary navigation">
            <ul className="grid gap-4 text-sm tracking-[0.16em] text-ink sm:text-base lg:flex lg:flex-wrap lg:items-center lg:justify-between lg:gap-x-4 lg:gap-y-2">
              {content.nav.map((item, index) => (
                <li
                  key={item}
                  className="flex items-center justify-between gap-4 lg:justify-start"
                >
                  {index <= 1 ? (
                    <Link
                      href={index === 1 ? "/list" : "/"}
                      className={`transition hover:text-brand ${activePath === (index === 1 ? "/list" : "/")
                        ? "text-brand"
                        : ""
                        }`}
                      onClick={closeMenu}
                    >
                      {item}
                    </Link>
                  ) : (
                    <a
                      href="#"
                      className="transition hover:text-brand"
                      onClick={closeMenu}
                    >
                      {item}
                    </a>
                  )}
                  {index < content.nav.length - 1 ? (
                    <span className="hidden text-ink-muted lg:inline">/</span>
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
