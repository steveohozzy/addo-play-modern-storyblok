"use client";

import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";

import Link from "next/link";
import Image from "next/image";

export default function BlogFilters({ posts }) {
  const searchParams = useSearchParams();
  const filterRef = useRef(null);

  const [selected, setSelected] = useState(
    () => searchParams.get("category") || "All"
  );

  useEffect(() => {
    const category =
      searchParams.get("category") || "All";

    if (
      category !== "All" &&
      filterRef.current
    ) {
      setTimeout(() => {
        filterRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    }
  }, [searchParams]);


  const categories = [
    "All",
    ...new Set(
      posts.flatMap(
        (p) => p.content.category || []
      )
    )
  ];


  const filtered =
    selected === "All"
      ? posts
      : posts.filter(
          (p) =>
            p.content.category?.includes(selected)
        );


  return (
    <>

      <div
        ref={filterRef}
        className="mb-12 flex flex-wrap justify-center gap-3 scroll-mt-28"
      >

        {categories.map((category) => (

          <button
            key={category}
            onClick={() => setSelected(category)}
            className={`
              cursor-pointer
              rounded-full
              border
              px-5
              py-2.5
              font-heading
              text-sm
              font-bold
              transition-all
              duration-300

              ${
                selected === category
                  ? `
                    border-transparent
                    bg-gradient-to-r
                    from-[#FF0073]
                    to-[#FF7300]
                    text-white
                    shadow-lg
                    shadow-pink-500/30
                    -translate-y-1
                  `
                  :
                  `
                    border-[#E9DFF5]
                    bg-white
                    text-[#34156F]
                    hover:-translate-y-1
                    hover:border-[#FF0073]/30
                    hover:shadow-lg
                  `
              }
            `}
          >
            {category}
          </button>

        ))}

      </div>


      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

        {filtered.map((post) => (

          <article
            key={post.uuid}
            className="
              group
              overflow-hidden
              rounded-[2rem]
              border
              border-white
              bg-white
              shadow-sm
              transition-all
              duration-500
              hover:-translate-y-2
              hover:shadow-2xl
            "
          >

            <Link href={`/${post.full_slug}`}>

              <div className="relative aspect-[4/3] overflow-hidden">

                <Image
                  src={
                    post.content.featuredImage?.filename ||
                    "/images/placeholder.jpg"
                  }
                  alt={
                    post.content.title ||
                    "Blog image"
                  }
                  fill
                  sizes="(max-width:768px) 100vw, 33vw"
                  className="
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-110
                  "
                />


                {post.content.category?.[0] && (

                  <span
                    className="
                      absolute
                      left-5
                      top-5
                      rounded-full
                      bg-white/90
                      px-4
                      py-2
                      text-xs
                      font-black
                      uppercase
                      tracking-wide
                      text-[#34156F]
                      backdrop-blur-xl
                      shadow-lg
                    "
                  >
                    {post.content.category[0]}
                  </span>

                )}

              </div>


              <div className="flex flex-col p-7">


                <h3
                  className="
                    font-heading
                    text-2xl
                    font-black
                    leading-tight
                    text-[#34156F]
                    transition-colors
                    group-hover:text-[#FF0073]
                  "
                >
                  {post.content.title}
                </h3>


                {post.content.excerpt && (

                  <p
                    className="
                      mt-4
                      line-clamp-3
                      leading-relaxed
                      text-[#5B4B7A]
                    "
                  >
                    {post.content.excerpt}
                  </p>

                )}


                <div
                  className="
                    mt-7
                    flex
                    items-center
                    justify-between
                    border-t
                    border-[#F1EAF8]
                    pt-5
                  "
                >

                  <span className="text-sm font-semibold text-[#8B7AA8]">
                    {post.content.readLength || "5 min"} read
                  </span>


                  <span
                    className="
                      flex
                      size-11
                      items-center
                      justify-center
                      rounded-full
                      bg-gradient-to-r
                      from-[#FF0073]
                      to-[#FF7300]
                      font-bold
                      text-white
                      transition-all
                      duration-300
                      group-hover:scale-110
                    "
                  >
                    →
                  </span>

                </div>

              </div>

            </Link>

          </article>

        ))}

      </div>

    </>
  );
}