"use client";

import { Locale, ProductLocaleContent } from "@/data/product-content";
import { CartItem } from "@/hooks/use-cart";
import { Menu, ShoppingCart, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { LocaleSwitcher } from "./locale-switcher";

type SiteHeaderProps = {
  content: ProductLocaleContent;
  locale: Locale;
  onLocaleChange: (locale: Locale) => void;
  activePath?: "/" | "/list";
  cartCount?: number;
  cartItems?: CartItem[];
  onRemoveFromCart?: (id: string) => void;
};

export function SiteHeader({
  content,
  locale,
  onLocaleChange,
  activePath = "/",
  cartCount = 0,
  cartItems = [],
  onRemoveFromCart,
}: SiteHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);
  const openCart = () => {
    setIsCartOpen(true);
    setIsMenuOpen(false);
  };

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

          <div className="flex items-center gap-2 lg:hidden">
            <CartSummary
              count={cartCount}
              label={content.cart.label}
              onClick={openCart}
            />
            <button
              type="button"
              onClick={() => setIsMenuOpen((current) => !current)}
              className="grid h-11 w-11 place-items-center border border-line text-ink transition hover:border-brand hover:text-brand"
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
          <div className="flex items-center gap-3">
            <div className="hidden lg:block">
              <CartSummary
                count={cartCount}
                label={content.cart.label}
                onClick={openCart}
              />
            </div>
            <LocaleSwitcher locale={locale} onLocaleChange={onLocaleChange} />
          </div>
        </div>
      </div>
      <CartDrawer
        content={content}
        items={cartItems}
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        onRemoveFromCart={onRemoveFromCart}
      />
    </header>
  );
}

function CartSummary({
  count,
  label,
  onClick,
}: {
  count: number;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="relative grid h-11 w-11 place-items-center border border-line text-ink transition hover:border-brand hover:text-brand"
      aria-label={`${label}: ${count}`}
      title={`${label}: ${count}`}
    >
      <ShoppingCart aria-hidden="true" className="h-5 w-5" />
      {count > 0 ? (
        <span className="absolute -right-2 -top-2 grid min-h-5 min-w-5 place-items-center rounded-full bg-brand px-1 text-xs leading-none text-page-white">
          {count}
        </span>
      ) : null}
    </button>
  );
}

function CartDrawer({
  content,
  items,
  isOpen,
  onClose,
  onRemoveFromCart,
}: {
  content: ProductLocaleContent;
  items: CartItem[];
  isOpen: boolean;
  onClose: () => void;
  onRemoveFromCart?: (id: string) => void;
}) {
  const totalQuantity = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <div
      className={`fixed inset-0 z-50 ${
        isOpen ? "pointer-events-auto" : "pointer-events-none"
      }`}
      aria-hidden={!isOpen}
    >
      <button
        type="button"
        onClick={onClose}
        className={`absolute inset-0 bg-overlay-soft transition-opacity ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        aria-label="Close cart drawer overlay"
      />

      <aside
        className={`absolute right-0 top-0 flex h-full w-full max-w-[390px] flex-col bg-surface shadow-2xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label={content.cart.label}
      >
        <div className="flex items-center justify-between border-b border-line px-5 py-5">
          <div>
            <h2 className="text-2xl tracking-[0.08em] text-brand">
              {content.cart.label}
            </h2>
            <p className="mt-1 text-sm text-ink-muted">
              {totalQuantity} {content.cart.quantity}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="grid h-10 w-10 place-items-center border border-line text-ink transition hover:border-brand hover:text-brand"
            aria-label="Close cart drawer"
          >
            <X aria-hidden="true" className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-5">
          {items.length === 0 ? (
            <p className="py-10 text-center text-sm text-ink-muted">
              {content.cart.empty}
            </p>
          ) : (
            <ul className="space-y-5">
              {items.map((item) => (
                <li
                  key={item.id}
                  className="grid grid-cols-[72px_1fr] gap-4 border-b border-line pb-5"
                >
                  <div className="relative h-[72px] overflow-hidden rounded-full bg-surface-image">
                    {item.image ? (
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="72px"
                        className="object-cover"
                      />
                    ) : null}
                  </div>
                  <div>
                    <h3 className="text-sm leading-6 text-ink">{item.name}</h3>
                    <p className="mt-1 text-sm text-brand">{item.price}</p>
                    <p className="mt-2 text-xs text-ink-muted">
                      {content.cart.quantity}: {item.quantity}
                    </p>
                    {onRemoveFromCart ? (
                      <button
                        type="button"
                        onClick={() => onRemoveFromCart(item.id)}
                        className="mt-3 inline-flex min-h-9 items-center justify-center border border-line px-3 py-2 text-xs tracking-[0.08em] text-ink transition hover:border-brand hover:text-brand"
                      >
                        {content.cart.remove}
                      </button>
                    ) : null}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </aside>
    </div>
  );
}
