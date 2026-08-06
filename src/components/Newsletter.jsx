"use client";

import { useState } from "react";
import { storyblokEditable } from "@storyblok/react/rsc";

export default function Newsletter({ blok }) {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) setDone(true);
  };

  return (
    <section
      {...storyblokEditable(blok)}
      id="newsletter"
      className="mx-auto max-w-7xl px-4 py-24 md:px-8 lg:py-32"
    >
      <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#34156F] via-[#5B21B6] to-[#1D4ED8] px-6 py-20 text-white shadow-[0_40px_100px_rgba(91,33,182,0.35)] md:px-16 md:py-24">
        <div className="pointer-events-none absolute -left-16 top-10 h-72 w-72 rounded-full bg-[#FF0073]/35 blur-[100px]" />
        <div className="pointer-events-none absolute right-[-5%] top-0 h-80 w-80 rounded-full bg-[#FF7300]/25 blur-[120px]" />
        <div className="pointer-events-none absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-[#0B9FEE]/25 blur-[100px]" />

        <div className="pointer-events-none absolute left-10 top-10 h-16 w-16 rotate-12 rounded-[1.5rem] bg-[#FFB800]/80" />
        <div className="pointer-events-none absolute right-16 bottom-12 h-10 w-10 rounded-full bg-white/30" />

        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-white backdrop-blur-xl">
            <span className="h-2 w-2 rounded-full bg-[#FFB800]" />
            Join the play club
          </span>

          <h2 className="mt-6 text-balance font-heading text-4xl font-black leading-tight md:text-5xl lg:text-6xl">
            {blok?.Title || "Get more play in your inbox"}
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/80">
            {blok?.Intro ||
              "Colourful activities, creative ideas, new toy launches and exclusive surprises for families who love to play."}
          </p>

          {done ? (
            <div className="mt-10 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/15 px-6 py-4 font-bold text-white backdrop-blur-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5 text-[#FFB800]"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
              You're in! Welcome to the play club.
            </div>
          ) : (
            <form
              onSubmit={onSubmit}
              className="mx-auto mt-10 flex max-w-xl flex-col gap-4 sm:flex-row"
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>

              <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
                className="flex-1 rounded-full border border-white/20 bg-white/15 px-6 py-4 text-white placeholder:text-white/60 backdrop-blur-xl focus:outline-none focus:ring-2 focus:ring-[#FFB800]"
              />

              <button
                type="submit"
                className="cursor-pointer rounded-full bg-gradient-to-r from-[#FF0073] to-[#FF7300] px-8 py-4 font-black text-white shadow-lg shadow-pink-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-pink-500/50"
              >
                Sign up
              </button>
            </form>
          )}

          <p className="mt-6 text-sm text-white/60">
            No spam. Just more colour, creativity and play.
          </p>
        </div>
      </div>
    </section>
  );
}