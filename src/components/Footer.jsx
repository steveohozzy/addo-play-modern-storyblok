import Link from "next/link";
import Image from "next/image";
import { headers } from "next/headers";

import { getStoryblokApi, resolveLink } from "@/lib/storyblok";

import InstagramIcon from "./icons/InstagramIcon";
import FacebookIcon from "./icons/FacebookIcon";
import YoutubeIcon from "./icons/YouTubeIcon";
import LinkedInIcon from "./icons/LinkedInIcon";

export default async function Footer() {
  const storyblokApi = getStoryblokApi();

  const [{ data: footerData }, { data: headerData }] = await Promise.all([
    storyblokApi.get("cdn/stories/globals/footer", {
      version: "draft",
    }),
    storyblokApi.get("cdn/stories/globals/header", {
      version: "draft",
    }),
  ]);

  const footer =
    footerData?.story?.content?.body?.find(
      (blok) => blok.component === "footer"
    ) || {};

  const header =
    headerData?.story?.content?.body?.find(
      (blok) => blok.component === "HeaderSettings"
    ) || {};

  const menuItems = header.Navigation || [];

  const pathname =
    (await headers()).get("x-pathname") || "/";

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

  const socials = [
    {
      name: "Instagram",
      link: footer.socialInstagram,
      icon: <InstagramIcon />,
    },
    {
      name: "Facebook",
      link: footer.socialFacebook,
      icon: <FacebookIcon />,
    },
    {
      name: "YouTube",
      link: footer.socialYoutube,
      icon: <YoutubeIcon />,
    },
    {
      name: "LinkedIn",
      link: footer.socialLinkedIn,
      icon: <LinkedInIcon />,
    },
  ]
    .filter(
      (social) =>
        social.link?.cached_url ||
        social.link?.url
    )
    .map((social) => ({
      ...social,
      url: resolveLink(social.link),
    }));
    
    console.log(
  footerData?.story?.content?.body
);
  return (
    <footer className="relative mt-auto overflow-hidden border-t border-white/10 bg-gradient-to-b from-[#1A0B3F] via-[#240F54] to-[#12082E] text-white">
      <div className="pointer-events-none absolute -left-24 top-10 h-80 w-80 rounded-full bg-[#FF0073]/20 blur-[120px]" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-96 w-96 rounded-full bg-[#FF7300]/15 blur-[140px]" />
      <div className="pointer-events-none absolute right-20 top-16 h-20 w-20 rotate-12 rounded-[1.5rem] bg-[#FFB800]/70" />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-4 py-16 md:grid-cols-3 md:px-8">
        <div>
          <Image
            src={
              footer.logo?.filename ||
              "https://www.addoplay.com/wp-content/uploads/2025/04/AP_Licensing.png"
            }
            alt="ADDO Play"
            width={180}
            height={80}
            className="h-auto"
          />

          {footer.brandText && (
            <p className="mt-6 max-w-sm leading-relaxed text-white/70">
              {footer.brandText}
            </p>
          )}

          {socials.length > 0 && (
            <div className="mt-8 flex gap-3">
              {socials.map((social) => (
                <Link
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  className="group flex size-12 items-center justify-center rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#FF0073]/50 hover:bg-white/15 hover:shadow-[0_10px_30px_rgba(255,0,115,0.35)]"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          )}
        </div>

        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-[#FFB800]">
            Explore
          </div>

          <div className="mt-6 grid gap-3">
            {menuItems.map((item) => (
              <Link
                key={item._uid}
                href={getNavHref(item)}
                target={item.OpenInNewTab ? "_blank" : undefined}
                className="group flex items-center gap-3 rounded-xl px-3 py-2 text-white/75 transition-all duration-300 hover:bg-white/10 hover:text-white"
              >
                <span className="text-[#FFB800] transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
                <span className="font-medium">{item.Label}</span>
              </Link>
            ))}
          </div>
        </div>

        <div>
          <div className="rounded-[2rem] border border-white/10 bg-white/10 p-8 backdrop-blur-xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#FFB800] px-3 py-1 text-xs font-black uppercase tracking-wide text-[#34156F]">
              {footer.ctaTitle ? "Join in" : "Play club"}
            </div>

            {footer.ctaTitle && (
              <h3 className="mt-4 font-heading text-3xl font-black text-white">
                {footer.ctaTitle}
              </h3>
            )}

            {footer.ctaText && (
              <p className="mt-4 leading-relaxed text-white/75">
                {footer.ctaText}
              </p>
            )}

            {footer.ctaButtonText && (
              <Link
                href={resolveLink(footer.ctaButtonLink)}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#FF0073] to-[#FF7300] px-6 py-3 text-sm font-black text-white shadow-lg shadow-pink-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-pink-500/50"
              >
                {footer.ctaButtonText}
                <span>→</span>
              </Link>
            )}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 text-sm text-white/60 md:flex-row md:px-8">
          <p>
            © {new Date().getFullYear()} ADDO Play. Made for colourful imaginations.
          </p>

          <div className="flex gap-6">
            <Link
              href={resolveLink(footer.privacyLink)}
              className="transition-colors hover:text-[#FFB800]"
            >
              Privacy
            </Link>

            <Link
              href={resolveLink(footer.termsLink)}
              className="transition-colors hover:text-[#FFB800]"
            >
              Terms
            </Link>

            <Link
              href={resolveLink(footer.cookiesLink)}
              className="transition-colors hover:text-[#FFB800]"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}