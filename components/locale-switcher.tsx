import { Languages } from "lucide-react";
import { Locale, locales } from "@/data/product-content";

type LocaleSwitcherProps = {
  locale: Locale;
  onLocaleChange: (locale: Locale) => void;
};

export function LocaleSwitcher({
  locale,
  onLocaleChange,
}: LocaleSwitcherProps) {
  return (
    <div className="flex items-center gap-2" aria-label="Language selector">
      <Languages aria-hidden="true" className="h-5 w-5 text-brand" />
      {locales.map((item) => (
        <button
          key={item.code}
          type="button"
          onClick={() => onLocaleChange(item.code)}
          className={`grid h-10 min-w-10 place-items-center rounded-full border px-3 text-sm transition ${
            locale === item.code
              ? "border-brand bg-brand text-page-white"
              : "border-ink-strong bg-surface text-ink-strong hover:border-brand hover:text-brand"
          }`}
          aria-pressed={locale === item.code}
          title={item.label}
        >
          {item.shortLabel}
        </button>
      ))}
    </div>
  );
}
