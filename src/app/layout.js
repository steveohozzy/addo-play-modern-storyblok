import { Fredoka, Quicksand } from 'next/font/google';
import "./globals.css";

import {
  getStoryblokApi,
} from "@/lib/storyblok";

import Header from "@/components/Header";
import { getNavigation } from "@/lib/getNavigation";
import Footer from "@/components/Footer";

const fredoka = Fredoka({ 
  subsets: ['latin'],
  variable: '--font-fredoka', 
});

const quicksand = Quicksand({
  subsets: ['latin'],
  variable: '--font-quicksand',
});

export const metadata = {
  title: "ADDO",
  description: "Test with Storyblok",
};

export default async function RootLayout({ children }) {

  const storyblokApi = getStoryblokApi();

  const { data } = await storyblokApi.get(
    "cdn/stories/globals/header",
    {
      version: "draft",
    }
  );


  const header =
    data?.story?.content?.body?.find(
      (blok) => blok.component === "HeaderSettings"
    ) || {};

  return (
    <html
      lang="en"
      className={`${fredoka.variable} ${quicksand.variable}`}
    >
      <body className="min-h-screen flex flex-col">
        <Header blok={header} />

        <main className="flex-1">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}