"use client";

import Image from "next/image";
import { storyblokEditable } from "@storyblok/react/rsc";

import BrandSection from "./BrandSection";

export default function BrandsHub({ blok }) {
  const scrollToBrand = (brandName) => {
    const id = brandName.toLowerCase().replace(/\s+/g, "-");

    const element = document.getElementById(id);

    if (element) {
      const headerHeight = 80;
      const stickyNavHeight = 64;
      const offset = headerHeight + stickyNavHeight;

      const y =
        element.getBoundingClientRect().top +
        window.pageYOffset -
        offset;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }
  };

  return (
    <div {...storyblokEditable(blok)}>
      <section className="relative overflow-hidden bg-gradient-to-br from-[#34156F] via-[#5B21B6] to-[#1D4ED8]">
        <div className="pointer-events-none absolute -left-24 top-16 h-96 w-96 rounded-full bg-[#FF0073]/25 blur-[140px]" />
        <div className="pointer-events-none absolute right-0 top-0 h-[28rem] w-[28rem] rounded-full bg-[#FF7300]/20 blur-[160px]" />
        <div className="pointer-events-none absolute right-16 top-20 h-24 w-24 rotate-12 rounded-[2rem] bg-[#FFB800]/80" />
        <div className="pointer-events-none absolute left-12 bottom-16 h-16 w-16 -rotate-12 rounded-[1.5rem] bg-[#00C2FF]/70" />

        <div className="relative mx-auto max-w-7xl px-4 py-24 md:px-8 lg:py-32">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-[#FFB800] backdrop-blur-xl">
              <span className="h-2 w-2 rounded-full bg-[#FFB800]" />
              Discover our toy families
            </span>

            <h1 className="mt-6 text-balance font-heading text-5xl font-black leading-[0.95] text-white md:text-6xl lg:text-7xl">
              {blok.heroTitle}
              <span className="block bg-gradient-to-r from-[#FFB800] via-[#FF7300] to-[#FF0073] bg-clip-text text-transparent">
                all in one place
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
              {blok.heroSubtitle}
            </p>
          </div>
        </div>
      </section>

      <section className="sticky top-20 z-30 border-b border-white/10 bg-[#24104F]/90 backdrop-blur-2xl">
        <div className="mx-auto max-w-7xl overflow-x-auto px-4 py-4 md:px-8">
          <div className="flex min-w-max gap-3">
            {blok.brandSections?.map((brand) => (
              <button
                key={brand._uid}
                onClick={() => scrollToBrand(brand.BrandName)}
                className="group flex cursor-pointer items-center gap-3 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#FF0073]/40 hover:bg-white/15 hover:shadow-[0_12px_30px_rgba(255,0,115,0.25)]"
              >
                {brand.BrandLogo?.filename && (
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white p-1.5 shadow-sm transition-transform duration-300 group-hover:scale-110">
                    <Image
                      src={brand.BrandLogo.filename}
                      alt={brand.BrandName}
                      width={28}
                      height={28}
                      className="object-contain"
                    />
                  </div>
                )}

                <span className="font-heading text-sm font-bold whitespace-nowrap">
                  {brand.BrandName}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {blok.intro && (
        <section className="bg-gradient-to-b from-[#FFF7FC] to-white">
          <div className="mx-auto max-w-4xl px-4 py-16 text-center md:px-8 lg:py-20">
            <p className="text-xl leading-8 text-[#5B4B7A]">
              {blok.intro}
            </p>
          </div>
        </section>
      )}

      <section>
        {blok.brandSections?.map((brand, index) => (
          <BrandSection
            key={brand._uid}
            blok={brand}
            index={index}
          />
        ))}
      </section>
    </div>
  );
}