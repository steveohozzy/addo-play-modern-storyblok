import Image from "next/image";
import Link from "next/link";
import {
  StoryblokServerComponent,
  storyblokEditable,
} from "@storyblok/react/rsc";

export default function BlogPost({ blok }) {
  return (
    <article
      {...storyblokEditable(blok)}
      className="pb-24"
    >

      <section className="relative overflow-hidden bg-gradient-to-br from-[#34156F] via-[#5B21B6] to-[#1D4ED8]">

        <div className="pointer-events-none absolute -left-20 top-10 h-96 w-96 rounded-full bg-[#FF0073]/30 blur-[140px]" />

        <div className="pointer-events-none absolute right-0 bottom-0 h-[30rem] w-[30rem] rounded-full bg-[#FF7300]/25 blur-[160px]" />

        <div className="pointer-events-none absolute right-20 top-20 h-24 w-24 rotate-12 rounded-[2rem] bg-[#FFB800]" />


        {blok.featuredImage?.filename && (
          <div className="absolute inset-0 opacity-10">
            <Image
              src={blok.featuredImage.filename}
              alt={blok.title || "Article image"}
              fill
              priority
              className="object-cover"
            />
          </div>
        )}


        <div className="relative mx-auto max-w-6xl px-4 py-24 md:px-8 lg:py-32">


          {blok.category?.length > 0 && (

            <div className="mb-8 flex flex-wrap gap-3">

              {blok.category.map((cat) => (

                <Link
                  key={cat}
                  href={`/blog?category=${encodeURIComponent(cat)}`}
                  className="
                    rounded-full
                    border
                    border-white/20
                    bg-white/10
                    px-5
                    py-2
                    text-sm
                    font-bold
                    text-white
                    backdrop-blur-xl
                    transition-all
                    hover:-translate-y-1
                    hover:bg-white
                    hover:text-[#34156F]
                  "
                >
                  {cat}
                </Link>

              ))}

            </div>

          )}


          <h1
            className="
              max-w-5xl
              font-heading
              text-5xl
              font-black
              leading-[0.95]
              text-white
              md:text-6xl
              lg:text-7xl
            "
          >

            {blok.title}

          </h1>


          {blok.excerpt && (

            <p
              className="
                mt-8
                max-w-3xl
                text-lg
                leading-8
                text-white/80
              "
            >
              {blok.excerpt}
            </p>

          )}



          <div className="mt-10 flex flex-wrap gap-4">


            {blok.author && (

              <div
                className="
                  flex
                  items-center
                  gap-3
                  rounded-2xl
                  border
                  border-white/15
                  bg-white/10
                  px-5
                  py-3
                  backdrop-blur-xl
                "
              >

                <div className="flex size-10 items-center justify-center rounded-full bg-gradient-to-r from-[#FF0073] to-[#FF7300] text-white">
                  👤
                </div>

                <div>
                  <p className="text-xs uppercase tracking-widest text-white/60">
                    Author
                  </p>

                  <p className="font-bold text-white">
                    {blok.author}
                  </p>
                </div>

              </div>

            )}



            {blok.date && (

              <div
                className="
                  rounded-2xl
                  border
                  border-white/15
                  bg-white/10
                  px-5
                  py-3
                  backdrop-blur-xl
                "
              >

                <p className="text-xs uppercase tracking-widest text-white/60">
                  Published
                </p>

                <p className="font-bold text-white">
                  {new Date(
                    blok.date
                  ).toLocaleDateString(
                    "en-GB",
                    {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    }
                  )}
                </p>

              </div>

            )}



            {blok.readTime && (

              <div
                className="
                  rounded-2xl
                  border
                  border-white/15
                  bg-white/10
                  px-5
                  py-3
                  backdrop-blur-xl
                "
              >

                <p className="text-xs uppercase tracking-widest text-white/60">
                  Read time
                </p>

                <p className="font-bold text-white">
                  {blok.readTime}
                </p>

              </div>

            )}

          </div>

        </div>

      </section>


      <section className="relative overflow-hidden bg-gradient-to-b from-[#FFF7FC] via-white to-[#F5F9FF]">

        <div className="pointer-events-none absolute left-0 top-20 h-72 w-72 rounded-full bg-[#FF0073]/10 blur-3xl" />

        <div className="pointer-events-none absolute right-0 bottom-20 h-72 w-72 rounded-full bg-[#00C2FF]/10 blur-3xl" />


        <div className="relative mx-auto max-w-5xl px-4 py-16 md:px-8 lg:py-24">

          <div className="space-y-12">

            {blok.articleBlocks?.map((nested) => (

              <StoryblokServerComponent
                blok={nested}
                key={nested._uid}
              />

            ))}

          </div>

        </div>

      </section>

    </article>
  );
}