import { ChevronRight } from "lucide-react";

type CategoryNavProps = {
  categories: string[];
};

export function CategoryNav({ categories }: CategoryNavProps) {
  return (
    <nav className="bg-brand" aria-label="Product categories">
      <div className="mx-auto flex max-w-[1180px] items-center overflow-x-auto px-4 py-4 text-page-white lg:px-0">
        <ul className="flex min-w-max items-center gap-4 text-sm tracking-[0.12em] sm:text-base">
          {categories.map((category, index) => (
            <li key={category} className="flex items-center gap-4">
              <a
                href={`#section-${index}`}
                className="whitespace-nowrap transition hover:text-page-white/75"
              >
                {category}
              </a>
              {index < categories.length - 1 ? <span>/</span> : null}
            </li>
          ))}
        </ul>
        <ChevronRight aria-hidden="true" className="ml-auto hidden h-5 w-5 shrink-0 sm:block" />
      </div>
    </nav>
  );
}
