"use client";

import Image from "next/image";
import Link from "next/link";
import { storyblokEditable } from "@storyblok/react";

export default function Blog({ blok }) {
  const panels = blok.BlogPosts ?? [];

  return (
    <section
  {...storyblokEditable(blok)}
  id="blog"
  className="relative overflow-hidden bg-gradient-to-b from-[#F3ECFF] via-[#EEF7FF] to-[#F8FBFF] py-24 lg:py-32"
>
  <div className="pointer-events-none absolute -left-20 top-20 h-80 w-80 rounded-full bg-[#7C3AED]/12 blur-[120px]" />
  <div className="pointer-events-none absolute right-0 bottom-0 h-96 w-96 rounded-full bg-[#0B9FEE]/12 blur-[140px]" />
  <div className="pointer-events-none absolute top-10 left-1/2 h-24 w-24 -translate-x-1/2 rounded-full bg-[#FF0073]/8 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8">
        {blok.Title && (
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              {blok.Tagline && (
                <span className="inline-flex items-center gap-2 rounded-full border border-[#0B9FEE]/20 bg-[#EAF8FF] px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-[#0B9FEE]">
                  <span className="h-2 w-2 rounded-full bg-[#FF0073]" />
                  {blok.Tagline}
                </span>
              )}

              <h2 className="mt-5 text-balance font-heading text-4xl font-black leading-tight text-[#24124D] md:text-5xl lg:text-6xl">
                {blok.Title}{" "}
                <span className="bg-gradient-to-r from-[#FF0073] via-[#FF7300] to-[#0B9FEE] bg-clip-text text-transparent">
                  adventures
                </span>
              </h2>
            </div>

            <Link
              href="/blog"
              className="group inline-flex items-center gap-2 rounded-full border border-[#24124D]/10 bg-white px-5 py-3 text-sm font-black text-[#24124D] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#FF0073]/20 hover:shadow-lg"
            >
              Read all stories
              <svg
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
          </div>
        )}

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {panels.map((p, index) => {
            const badgeColours = [
              "bg-[#FF0073] text-white",
              "bg-[#FFB800] text-[#24124D]",
              "bg-[#0B9FEE] text-white",
              "bg-[#7C3AED] text-white",
            ];

            return (
              <article
                key={p._uid}
                className="group relative overflow-hidden rounded-[2rem] border border-white/60 bg-white/80 shadow-sm backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(91,33,182,0.18)]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF0073]/0 via-transparent to-[#0B9FEE]/0 transition-all duration-500 group-hover:from-[#FF0073]/5 group-hover:to-[#0B9FEE]/5" />

                <Link href={`/blog/${p.Slug}`} className="relative z-10 block">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={p.Image?.filename || "/images/heritage.png"}
                      alt={p.Title || "Blog image"}
                      fill
                      sizes="(max-width:768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {p.Tag && (
                      <span
                        className={`absolute left-5 top-5 rounded-full px-4 py-2 text-xs font-black uppercase tracking-wide backdrop-blur ${badgeColours[index % badgeColours.length]}`}
                      >
                        {p.Tag}
                      </span>
                    )}
                  </div>

                  <div className="p-7">
                    <h3 className="font-heading text-2xl font-black leading-tight text-[#24124D]">
                      {p.Title}
                    </h3>

                    <div className="mt-8 flex items-center justify-between border-t border-[#24124D]/10 pt-5">
                      <span className="text-sm font-semibold text-[#5B6884]">
                        {p.ReadLength || "5 min"} read
                      </span>

                      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-r from-[#FF0073] to-[#FF7300] text-white shadow-lg transition-all duration-300 group-hover:scale-110">
                        <svg
                          className="h-5 w-5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}