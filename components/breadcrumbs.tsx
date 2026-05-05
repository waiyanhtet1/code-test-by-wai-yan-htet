type BreadcrumbsProps = {
  items: string[];
};

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <div className="bg-band">
      <nav
        className="mx-auto max-w-[1180px] px-4 py-4 text-sm text-ink-soft lg:px-0"
        aria-label="Breadcrumb"
      >
        <ol className="flex flex-wrap items-center gap-3">
          {items.map((item, index) => (
            <li key={`${item}-${index}`} className="flex items-center gap-3">
              <a href="#" className="transition hover:text-brand">
                {item}
              </a>
              {index < items.length - 1 ? <span>&gt;</span> : null}
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
}
