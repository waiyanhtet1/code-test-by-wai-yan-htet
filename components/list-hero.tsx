import Image from "next/image";

type ListHeroProps = {
  title: string;
};

export function ListHero({ title }: ListHeroProps) {
  return (
    <section className="relative overflow-hidden bg-surface-hero">
      <div className="relative mx-auto h-[240px] max-w-[1440px] sm:h-[300px]">
        <Image
          src="/products/soup-bowl-hero-1.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="scale-125 object-cover object-center sm:scale-110"
        />
        <div className="absolute inset-0 bg-overlay-soft" />
        <h1 className="absolute inset-0 grid place-items-center text-5xl tracking-[0.18em] text-page-white sm:text-7xl">
          {title}
        </h1>
      </div>
    </section>
  );
}
