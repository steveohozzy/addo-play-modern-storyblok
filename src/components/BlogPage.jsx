import { storyblokEditable } from "@storyblok/react/rsc";
import { getStoryblokApi } from "@/lib/storyblok";
import BlogFilters from "./BlogFilters";

export default async function BlogPage({ blok }) {
  const storyblokApi = getStoryblokApi();

  const { data } = await storyblokApi.get(
    "cdn/stories",
    {
      starts_with: "blog/",
      content_type: "blogPost",
      version: "draft",
    }
  );

  const posts = data.stories;

  return (
    <div {...storyblokEditable(blok)}>

      <section className="relative overflow-hidden bg-gradient-to-br from-[#34156F] via-[#5B21B6] to-[#1D4ED8]">

        <div className="pointer-events-none absolute -left-24 top-10 h-96 w-96 rounded-full bg-[#FF0073]/30 blur-[140px]" />

        <div className="pointer-events-none absolute right-0 bottom-0 h-[30rem] w-[30rem] rounded-full bg-[#FF7300]/25 blur-[160px]" />

        <div className="pointer-events-none absolute right-24 top-20 h-24 w-24 rotate-12 rounded-[2rem] bg-[#FFB800]/80" />

        <div className="relative mx-auto max-w-7xl px-4 py-24 md:px-8 lg:py-32">

          <div className="mx-auto max-w-4xl text-center">

            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.25em] text-[#FFB800] backdrop-blur-xl">
              <span className="h-2 w-2 rounded-full bg-[#FFB800]" />
              ADDO Play Journal
            </span>


            <h1 className="mt-6 text-balance font-heading text-5xl font-black leading-[0.95] text-white md:text-6xl lg:text-7xl">

              {blok.title}

              <span className="block bg-gradient-to-r from-[#FFB800] via-[#FF7300] to-[#FF0073] bg-clip-text text-transparent">
                ideas, stories & inspiration
              </span>

            </h1>


            {blok.intro && (
              <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-white/80">
                {blok.intro}
              </p>
            )}

          </div>

        </div>

      </section>


      <section className="relative overflow-hidden bg-gradient-to-b from-[#FFF7FC] via-white to-[#F5F9FF]">

        <div className="pointer-events-none absolute left-0 top-40 h-72 w-72 rounded-full bg-[#FF0073]/10 blur-3xl" />

        <div className="pointer-events-none absolute right-0 top-96 h-72 w-72 rounded-full bg-[#00C2FF]/10 blur-3xl" />


        <div className="relative mx-auto max-w-7xl px-4 py-16 md:px-8 lg:py-24">

          <BlogFilters posts={posts} />

        </div>

      </section>

    </div>
  );
}