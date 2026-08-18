import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-[#34156F] via-[#5B21B6] to-[#1D4ED8] px-6 py-20 text-white">

      {/* Big colourful glows */}
      <div className="pointer-events-none absolute -left-40 top-0 h-[32rem] w-[32rem] rounded-full bg-[#FF0073]/40 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 top-20 h-[30rem] w-[30rem] rounded-full bg-[#FF7300]/30 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-[28rem] w-[28rem] rounded-full bg-[#0B9FEE]/30 blur-[120px]" />

      {/* Floating toy shapes */}
      <div className="pointer-events-none absolute left-[7%] top-[15%] h-20 w-20 rotate-12 rounded-[1.75rem] bg-[#FF0073] shadow-2xl shadow-pink-500/30" />
      <div className="pointer-events-none absolute right-[9%] top-[18%] h-14 w-14 rounded-full bg-[#0B9FEE] shadow-xl shadow-blue-400/30" />
      <div className="pointer-events-none absolute bottom-[15%] left-[10%] h-16 w-16 rotate-45 rounded-3xl bg-[#FFB800] shadow-xl shadow-yellow-400/30" />
      <div className="pointer-events-none absolute bottom-[18%] right-[12%] h-10 w-10 rounded-full bg-[#FF7300] shadow-xl shadow-orange-400/30" />

      {/* Small floating dots */}
      <div className="pointer-events-none absolute left-1/4 top-12 h-5 w-5 rounded-full bg-white/20" />
      <div className="pointer-events-none absolute right-1/3 bottom-16 h-6 w-6 rounded-full bg-pink-300/40" />

      <div className="relative z-10 mx-auto w-full max-w-4xl text-center">

        {/* Fun label */}
        <div className="mb-7 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-xs font-black uppercase tracking-[0.2em] text-white shadow-xl backdrop-blur-xl">
            <span className="h-2.5 w-2.5 animate-bounce rounded-full bg-[#FFB800]" />
            Oops! Where did that go?
          </span>
        </div>

        {/* Huge 404 */}
        <h1 className="font-heading text-[8rem] font-black leading-[0.8] tracking-[-0.06em] sm:text-[11rem] lg:text-[14rem]">
          <span className="text-white">4</span>
          <span className="bg-gradient-to-r from-[#FF0073] via-[#FFB800] to-[#0B9FEE] bg-clip-text text-transparent">
            0
          </span>
          <span className="text-white">4</span>
        </h1>

        {/* Fun headline */}
        <h2 className="mx-auto mt-10 max-w-3xl font-heading text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
          This page has gone off to{" "}
          <span className="bg-gradient-to-r from-[#FFB800] to-[#FF7300] bg-clip-text text-transparent">
            play!
          </span>{" "}
          🎈
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/80 sm:text-xl">
          We tried to catch it, but it was having far too much fun.
          Maybe it's hiding in the toy box, building something brilliant,
          or racing off on its next adventure.
        </p>

        {/* Playful visual */}
        <div className="relative mx-auto my-12 h-32 w-72">

          {/* Shadow */}
          <div className="absolute bottom-1 left-1/2 h-5 w-56 -translate-x-1/2 rounded-full bg-black/20 blur-xl" />

          {/* Toy blocks */}
          <div className="absolute bottom-5 left-8 h-20 w-20 rotate-[-8deg] rounded-3xl bg-gradient-to-br from-[#FF0073] to-[#FF3D9A] shadow-2xl shadow-pink-500/30">
            <div className="absolute left-1/2 top-3 h-5 w-5 -translate-x-1/2 rounded-full bg-white/30" />
          </div>

          <div className="absolute bottom-5 left-1/2 h-24 w-20 -translate-x-1/2 rotate-3 rounded-3xl bg-gradient-to-br from-[#FFB800] to-[#FF7300] shadow-2xl shadow-orange-500/30">
            <div className="absolute left-1/2 top-3 h-5 w-5 -translate-x-1/2 rounded-full bg-white/40" />
          </div>

          <div className="absolute bottom-5 right-8 h-16 w-16 rotate-[10deg] rounded-3xl bg-gradient-to-br from-[#0B9FEE] to-[#38C8FF] shadow-2xl shadow-blue-500/30">
            <div className="absolute left-1/2 top-3 h-4 w-4 -translate-x-1/2 rounded-full bg-white/40" />
          </div>

          {/* Bouncy star */}
          <span className="absolute -right-1 top-0 rotate-12 text-4xl text-[#FFB800]">
            ★
          </span>

          <span className="absolute -left-2 top-5 -rotate-12 text-3xl text-[#0B9FEE]">
            ✦
          </span>

          <span className="absolute left-1/2 top-[-18px] text-2xl text-[#FF0073]">
            ✦
          </span>
        </div>

        {/* CTAs */}
        <div className="flex flex-col justify-center gap-4 sm:flex-row">

          <Link
            href="/"
            className="
              inline-flex
              items-center
              justify-center
              rounded-full
              bg-gradient-to-r
              from-[#FF0073]
              to-[#FF7300]
              px-8
              py-4
              text-sm
              font-black
              text-white
              shadow-2xl
              shadow-pink-500/40
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-pink-500/60
            "
          >
            🏠 Let's go home
          </Link>

          <Link
            href="/"
            className="
              inline-flex
              items-center
              justify-center
              rounded-full
              border
              border-white/20
              bg-white/10
              px-8
              py-4
              text-sm
              font-bold
              text-white
              backdrop-blur-xl
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-white/20
            "
          >
            🎨 Keep playing
          </Link>

        </div>

        {/* Tiny playful footer */}
        <p className="mt-10 text-sm font-medium text-white/50">
          No toys were harmed while looking for this page. 🧸
        </p>

      </div>
    </main>
  );
}