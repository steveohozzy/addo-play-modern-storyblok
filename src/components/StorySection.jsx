import Image from 'next/image';
import Link from 'next/link';
import { storyblokEditable } from '@storyblok/react/rsc';
import { renderRichText } from '@storyblok/react';
import { resolveLink } from '@/lib/storyblok';

export default function StorySection({ blok }) {
  const callouts = blok.Callouts ?? [];
  const isVideo = blok.Media === 'video';
  const videoId = blok.videoURL;

  return (
    <section
      {...storyblokEditable(blok)}
      id="story"
      className="relative overflow-hidden bg-gradient-to-b from-[#FFF8FD] via-white to-[#F8FBFF] py-24 lg:py-32"
    >
      <div className="pointer-events-none absolute -left-24 top-16 h-80 w-80 rounded-full bg-[#FF0073]/15 blur-[120px]" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-96 w-96 rounded-full bg-[#0B9FEE]/15 blur-[140px]" />
      <div className="pointer-events-none absolute left-1/2 top-10 h-24 w-24 -translate-x-1/2 rotate-12 rounded-[2rem] bg-[#FFB800]/20" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          <div
            className={`relative ${
              blok.Flip ? 'order-1 lg:order-2' : 'order-2 lg:order-1'
            }`}
          >
            <div className="absolute -inset-4 rounded-[3rem] bg-gradient-to-r from-[#FF0073]/20 via-[#FF7300]/15 to-[#0B9FEE]/20 blur-2xl" />

            <div
              className={`relative overflow-hidden rounded-[2.5rem] border border-white/50 bg-white/70 p-3 shadow-[0_30px_80px_rgba(91,33,182,0.15)] backdrop-blur-xl ${
                isVideo ? 'aspect-[11/10] lg:aspect-[6/5]' : 'aspect-[9/10] lg:aspect-[4/5]'
              }`}
            >
              <div className="relative h-full w-full overflow-hidden rounded-[2rem]">
                {isVideo && videoId ? (
                  <iframe
                    className="h-full w-full"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title={blok.Title || 'Video'}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <Image
                    src={blok.Image?.filename || '/images/heritage.png'}
                    alt={blok.Title || 'Story image'}
                    fill
                    sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 600px"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    loading="lazy"
                    quality={85}
                  />
                )}
              </div>
            </div>

            {blok.ImageStampText && (
              <div className="absolute -bottom-6 -left-6 hidden rounded-[1.75rem] bg-gradient-to-r from-[#FF0073] to-[#FF7300] px-6 py-5 shadow-2xl sm:block">
                <p className="font-heading text-lg font-black text-white">
                  {blok.ImageStampText}
                </p>
                <p className="mt-1 text-xs font-bold uppercase tracking-[0.15em] text-white/80">
                  Our story
                </p>
              </div>
            )}
          </div>

          <div
            className={`${
              blok.Flip ? 'order-2 lg:order-1' : 'order-1 lg:order-2'
            }`}
          >
            {blok.Tagline && (
              <span className="inline-flex items-center gap-2 rounded-full border border-[#0B9FEE]/20 bg-[#EAF8FF] px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-[#24124D">
                <span className="h-2 w-2 rounded-full bg-[#FF0073]" />
                {blok.Tagline}
              </span>
            )}

            <h2 className="mt-5 text-balance font-heading text-4xl font-black leading-tight text-[#24124D] md:text-5xl lg:text-6xl">
              {blok.Title}{' '}
              <span className="bg-gradient-to-r from-[#FF0073] via-[#FF7300] to-[#0B9FEE] bg-clip-text text-transparent">
                together
              </span>
            </h2>

            {blok.Blurb ? (
              <div
                className="prose prose-lg mt-6 max-w-none prose-p:text-[#5B6884] prose-p:leading-8 prose-strong:text-[#24124D]"
                dangerouslySetInnerHTML={{
                  __html: renderRichText(blok.Blurb),
                }}
              />
            ) : (
              <p className="mt-6 text-lg leading-8 text-[#5B6884]">
                We’re not just a toy brand. We’re part of family adventures,
                rainy afternoons, imaginative worlds and unforgettable play.
              </p>
            )}

            {callouts.length > 0 && (
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {callouts.map((item, i) => {
                  const backgrounds = [
                    'bg-[#FFF1F7]',
                    'bg-[#FFF7E8]',
                    'bg-[#EAF8FF]',
                    'bg-[#F3ECFF]',
                  ];

                  const badges = [
                    'bg-[#FF0073] text-white',
                    'bg-[#FFB800] text-[#24124D]',
                    'bg-[#0B9FEE] text-white',
                    'bg-[#7C3AED] text-white',
                  ];

                  return (
                    <div
                      key={i}
                      className={`rounded-[1.75rem] border border-white/60 ${backgrounds[i % backgrounds.length]} p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
                    >
                      <div
                        className={`mb-4 inline-flex rounded-full px-3 py-1 text-sm font-black ${badges[i % badges.length]}`}
                      >
                        {item.Highlight}
                      </div>

                      <p className="text-base leading-7 text-[#355B7A]">
                        {item.Title}
                      </p>
                    </div>
                  );
                })}
              </div>
            )}

            {blok.ctaText && (
              <div className="mt-10">
                <Link
                  href={resolveLink(blok.CtaLink) || '#'}
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#FF0073] to-[#FF7300] px-7 py-4 text-sm font-black text-white shadow-lg shadow-pink-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-pink-500/50"
                >
                  {blok.ctaText}
                  <svg
                    className="h-4 w-4"
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
          </div>
        </div>
      </div>
    </section>
  );
}