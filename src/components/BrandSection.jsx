import Image from "next/image";
import Link from "next/link";
import {
  storyblokEditable,
  renderRichText,
} from "@storyblok/react/rsc";

import { resolveLink } from "@/lib/storyblok";

export default function BrandSection({
  blok,
  index,
}) {
  const reversed = index % 2 !== 0;

  const background =
    index % 2 !== 0
      ? "bg-muted/60"
      : "bg-white";

  const glowPosition =
    index % 2 === 0
      ? "right-[-5rem] top-20"
      : "left-[-5rem] top-20";

  return (
    <section
      {...storyblokEditable(blok)}
      id={blok.BrandName
        ?.toLowerCase()
        ?.replace(/\s+/g, "-")}
      className={`
        relative
        overflow-hidden
        ${background}
      `}
    >

      {/* Atmospheric glows */}
      <div
        className={`
          pointer-events-none
          absolute
          ${glowPosition}
          size-72
          rounded-full
          bg-primary/10
          blur-3xl
        `}
        aria-hidden
      />

      <div
        className={`
          pointer-events-none
          absolute
          ${
            index % 2 === 0
              ? "left-20 bottom-0"
              : "right-20 bottom-0"
          }
          size-48
          rounded-full
          bg-secondary/10
          blur-3xl
        `}
        aria-hidden
      />

      <div
        className="
          relative
          mx-auto
          grid
          max-w-7xl
          items-center
          gap-12
          px-6
          py-12
          md:px-10
          lg:grid-cols-2
          lg:px-14
          lg:py-20
        "
      >

        {/* Image */}
        <div
          className={
            reversed
              ? "lg:order-2"
              : ""
          }
        >
          <div
            className="
              relative
              overflow-hidden
              rounded-[2.5rem]
              border
              border-border/50
              bg-white
              shadow-xl
            "
          >
            <Image
              src={
                blok.BrandImage?.filename
              }
              alt={
                blok.BrandName
              }
              width={700}
              height={700}
              className="
                w-full
                object-cover
                transition-transform
                duration-700
                hover:scale-105
              "
            />
          </div>
        </div>


        {/* Content */}
        <div
          className={
            reversed
              ? "lg:order-1"
              : ""
          }
        >

          {blok.BrandLogo?.filename && (
            <div
              className="
                inline-flex
                rounded-3xl
                bg-white
                p-4
                shadow-lg
              "
            >
              <Image
                src={
                  blok.BrandLogo.filename
                }
                alt={
                  blok.BrandName
                }
                width={180}
                height={70}
                className="
                  object-contain
                "
              />
            </div>
          )}


          <h2
            className="
              mt-8
              bg-gradient-to-r
              from-primary
              via-secondary
              to-accent
              bg-clip-text
              font-heading
              text-4xl
              font-black
              leading-tight
              text-transparent
              md:text-6xl
            "
          >
            {blok.BrandName}
          </h2>


          {blok.Intro && (
            <p
              className="
                mt-6
                max-w-xl
                text-lg
                leading-relaxed
                text-muted-foreground
              "
            >
              {blok.Intro}
            </p>
          )}


          {blok.Description && (
            <div
              className="
                mt-6
                max-w-xl
                text-foreground/80
                leading-relaxed

                [&_h2]:font-heading
                [&_h2]:text-3xl
                [&_h2]:text-primary

                [&_h3]:font-heading
                [&_h3]:text-2xl
                [&_h3]:text-primary

                [&_p]:mb-4

                [&_ul]:space-y-3
                [&_li]:list-disc
                [&_li]:ml-5
              "
              dangerouslySetInnerHTML={{
                __html:
                  renderRichText(
                    blok.Description
                  ),
              }}
            />
          )}


          {blok.CtaText && (
            <Link
              href={resolveLink(
                blok.CtaLink
              )}
              className="
                group
                mt-8
                inline-flex
                items-center
                gap-3
                rounded-full
                bg-gradient-to-r
                from-primary
                to-secondary
                px-7
                py-3.5
                font-heading
                font-bold
                text-white
                shadow-lg
                shadow-primary/25
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-xl
              "
            >
              {blok.CtaText}

              <span
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              >
                →
              </span>
            </Link>
          )}

        </div>

      </div>

    </section>
  );
}