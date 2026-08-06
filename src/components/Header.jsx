"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { storyblokEditable } from "@storyblok/react/rsc";
import { resolveLink } from "@/lib/storyblok";

export default function Header({ blok }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  function getNavHref(item) {
    const pageLink = resolveLink(item.Link);

    if (item.HomepageAnchor) {
      if (pathname === "/") {
        return `#${item.HomepageAnchor}`;
      }

      if (pageLink && pageLink !== "/") {
        return `${pageLink}#${item.HomepageAnchor}`;
      }

      return `/#${item.HomepageAnchor}`;
    }

    return pageLink || "/";
  }

  return (
    <>
      <header
        {...storyblokEditable(blok)}
        className="sticky top-0 z-50 border-b border-white/10 bg-[#34156F]/80 backdrop-blur-xl"
      >
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="flex h-20 items-center justify-between">
            <Link href="/" className="relative h-14 w-40">
              <Image
                src={
                  blok?.Logo?.filename ||
                  "https://www.addoplay.com/wp-content/uploads/2025/04/AP_Licensing.png"
                }
                alt={blok?.LogoAlt || "ADDO Play"}
                fill
                className="object-contain object-left"
              />
            </Link>

            <button
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-white/10 backdrop-blur-xl transition-all duration-300 hover:bg-white/20 cursor-pointer"
            >
              <div className="relative h-6 w-6">
                <span
                  className={`absolute left-0 top-1 h-0.5 w-6 bg-white transition-all duration-300 ${
                    open ? "translate-y-2 rotate-45" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-3 h-0.5 w-6 bg-white transition-all duration-300 ${
                    open ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-5 h-0.5 w-6 bg-white transition-all duration-300 ${
                    open ? "-translate-y-2 -rotate-45" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-50 bg-black/60 backdrop-blur-md transition-opacity duration-300 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <aside
        className={`fixed -right-10 top-0 z-[60] flex h-screen w-full max-w-[420px] flex-col overflow-hidden bg-gradient-to-br from-[#34156F] via-[#5B21B6] to-[#1D4ED8] shadow-[0_0_80px_rgba(255,0,115,0.35)] transition-transform duration-500 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="pointer-events-none absolute -left-16 top-20 h-72 w-72 rounded-full bg-[#FF0073]/30 blur-[100px]" />
        <div className="pointer-events-none absolute right-0 bottom-0 h-80 w-80 rounded-full bg-[#FF7300]/20 blur-[120px]" />
        <div className="pointer-events-none absolute right-12 top-16 h-16 w-16 rotate-12 rounded-[1.5rem] bg-[#FFB800]/70" />

        <div className="relative z-10 flex items-center justify-between px-8 pt-8">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.3em] text-white/60">
              Explore
            </p>
            <h2 className="mt-2 font-heading text-3xl font-black text-white">
              ADDO Play
            </h2>
          </div>

          <button
            onClick={() => setOpen(false)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-xl text-white hover:bg-white/20 cursor-pointer"
          >
            ×
          </button>
        </div>

        <nav className="relative z-10 flex-1 px-6 py-6">
          {blok?.Navigation?.map((item) => (
            <Link
              key={item._uid}
              href={getNavHref(item)}
              target={item.OpenInNewTab ? "_blank" : undefined}
              onClick={() => setOpen(false)}
              className="group flex items-center justify-between rounded-[1.5rem] border-b border-white/10 px-4 py-5 font-heading text-xl font-black text-white transition-all duration-300 hover:bg-white/10 hover:text-[#FFB800]"
            >
              <span>{item.Label}</span>

              <ArrowUpRight className="h-5 w-5 opacity-40 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100" />
            </Link>
          ))}
        </nav>

        <div className="relative z-10 p-6">
          <div className="rounded-[2rem] border border-white/15 bg-white/10 p-6 backdrop-blur-xl">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#FFB800]">
              {blok?.CtaPanelEyebrow || "Play club"}
            </p>

            <div className="mt-3 font-heading text-2xl font-black text-white">
              {blok?.CtaPanelHeading || "Big adventures start with play"}
            </div>

            <p className="mt-3 text-sm leading-relaxed text-white/75">
              {blok?.CtaPanelText ||
                "Discover colourful stories, creative activities and playful inspiration for every family."}
            </p>

            <Link
              href={resolveLink(blok?.CtaLink) || "/blog"}
              onClick={() => setOpen(false)}
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#FF0073] to-[#FF7300] px-6 py-3 text-sm font-black text-white shadow-lg shadow-pink-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-pink-500/50"
            >
              {blok?.CtaText || "Explore stories"}
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
}