"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { storyblokEditable } from "@storyblok/react/rsc";
import { resolveLink } from "@/lib/storyblok";

export default function HomeHero({ blok }) {
  const isVideo = blok.Media === "video";
  const videoId = blok.videoURL;
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      {...storyblokEditable(blok)}
      id="top"
      className="relative overflow-hidden border-b border-white/10 bg-gradient-to-br from-[#34156F] via-[#5B21B6] to-[#1D4ED8] text-white"
    >
      <div
        className="pointer-events-none absolute -left-32 top-0 h-[36rem] w-[36rem] rounded-full bg-[#FF0073]/35 blur-[120px]"
        style={{
          transform: `translate(${scrollY * 0.25}px, ${scrollY * 0.2}px)`,
        }}
      />

      <div
        className="pointer-events-none absolute right-[-10%] top-16 h-[30rem] w-[30rem] rounded-full bg-[#FF7300]/30 blur-[120px]"
        style={{
          transform: `translate(-${scrollY * 0.15}px, ${scrollY * 0.25}px)`,
        }}
      />

      <div className="pointer-events-none absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-[#0B9FEE]/25 blur-[120px]" />

      <div className="pointer-events-none absolute left-10 top-36 h-24 w-24 rotate-12 rounded-[2rem] bg-[#FF0073]/80 shadow-2xl" />
      <div className="pointer-events-none absolute right-14 top-20 h-16 w-16 rounded-full bg-[#0B9FEE]/90 shadow-xl" />
      <div className="pointer-events-none absolute right-1/4 bottom-24 h-16 w-16 rotate-45 rounded-3xl bg-[#FFB800]/80 shadow-xl" />
      <div className="pointer-events-none absolute left-1/3 top-10 h-10 w-10 rounded-full bg-white/20" />

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 md:px-8 lg:grid-cols-12 lg:gap-14">
        <div className="flex flex-col justify-center py-14 lg:col-span-6 lg:py-28">
          {blok.Tagline && (
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-white backdrop-blur-xl">
                <span className="h-2 w-2 rounded-full bg-[#FFB800]" />
                {blok.Tagline}
              </span>
            </div>
          )}

          <h1 className="text-balance font-heading text-5xl font-black leading-[0.9] tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-8xl">
            {blok.Title}{" "}
            {blok.TitleAccent && (
              <span className="bg-gradient-to-r from-[#FF0073] via-[#FFB800] to-[#0B9FEE] bg-clip-text text-transparent">
                {blok.TitleAccent}
              </span>
            )}
          </h1>

          <div className="relative mt-8 lg:hidden">
            <div className="relative h-[280px] sm:h-[400px] overflow-hidden rounded-[2.5rem] border border-white/20 bg-white/10 p-3 backdrop-blur-2xl shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
              <div className="relative h-full w-full overflow-hidden rounded-[2rem]">
                {isVideo && videoId ? (
                  <video
                    src={videoId}
                    autoPlay
                    loop
                    muted
                    controls
                    playsInline
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                ) : (
                  <Image
                    src={blok.BackgroundImage?.filename}
                    alt={blok.BackgroundImage?.alt || "Hero image"}
                    fill
                    priority
                    quality={90}
                    sizes="100vw"
                    className="object-cover"
                  />
                )}
              </div>
            </div>
          </div>

          <p className="mt-6 max-w-lg text-lg leading-8 text-white/80">
            {blok.Subtitle}
          </p>

          {blok.CtaPrimaryText && (
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href={resolveLink(blok.CtaPrimaryLink) || "#"}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#FF0073] to-[#FF7300] px-7 py-4 text-sm font-black text-white shadow-2xl shadow-pink-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-pink-500/60"
              >
                {blok.CtaPrimaryText}
              </Link>

              {blok.CtaSecondaryText && (
                <Link
                  href={resolveLink(blok.CtaSecondaryLink) || "#"}
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-4 text-sm font-bold text-white backdrop-blur-xl transition-all duration-300 hover:bg-white/20 hover:-translate-y-1"
                >
                  {blok.CtaSecondaryText}
                </Link>
              )}
            </div>
          )}

          {blok.Stats?.length ? (
            <dl className="mt-14 grid grid-cols-3 gap-4 border-t border-white/10 pt-8">
              {blok.Stats.map((stat, i) => (
                <div key={i}>
                  <dt className="font-heading text-3xl font-black text-white">
                    {stat.Value}
                  </dt>
                  <dd className="mt-1 text-xs font-black uppercase tracking-[0.15em] text-[#FFB800]">
                    {stat.Label}
                  </dd>
                </div>
              ))}
            </dl>
          ) : null}
        </div>

        {/* Right image */}
        <div className="relative hidden lg:col-span-6 lg:block">
          <div className="relative h-[440px] overflow-visible lg:h-[460px]">
            <div className="absolute -inset-6 rounded-[3rem] bg-gradient-to-r from-[#FF0073]/30 via-[#FF7300]/25 to-[#0B9FEE]/30 blur-3xl" />

            <div className="relative h-full rounded-[2.8rem] border border-white/20 bg-white/10 p-3 backdrop-blur-2xl shadow-[0_40px_100px_rgba(0,0,0,0.35)]">
              <div className="relative h-full w-full overflow-hidden rounded-[2.3rem]">
                {isVideo && videoId ? (
                  <video
                    src={videoId}
                    autoPlay
                    loop
                    muted
                    controls
                    playsInline
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                ) : (
                  <Image
                    src={blok.BackgroundImage?.filename}
                    alt={blok.BackgroundImage?.alt || "Hero image"}
                    fill
                    priority
                    quality={90}
                    sizes="(max-width:1024px) 50vw, 560px"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                )}

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent" />
              </div>
            </div>

            {blok.ImageStampTitle && (
              <div className="absolute -bottom-6 -left-6 rounded-[1.75rem] border border-white/20 bg-white/15 px-6 py-5 shadow-2xl backdrop-blur-xl">
                <p className="font-heading text-xl font-black text-white">
                  {blok.ImageStampTitle}
                </p>
                <p className="mt-1 text-sm font-bold text-[#FFB800]">
                  {blok.ImageStampText}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}