"use client";

import Link from "next/link";
import { useState } from "react";

const TOYS = [
  {
    emoji: "🧸",
    name: "Teddy Bear",
    colour: "from-[#FF0073] to-[#FF3D9A]",
    animation: "toy-teddy",
  },
  {
    emoji: "🚗",
    name: "Toy Car",
    colour: "from-[#0B9FEE] to-[#38C8FF]",
    animation: "toy-car",
  },
  {
    emoji: "🦖",
    name: "Dinosaur",
    colour: "from-[#22C55E] to-[#84CC16]",
    animation: "toy-dinosaur",
  },
  {
    emoji: "🚀",
    name: "Rocket",
    colour: "from-[#7C3AED] to-[#A855F7]",
    animation: "toy-rocket",
  },
  {
    emoji: "🦄",
    name: "Unicorn",
    colour: "from-[#EC4899] to-[#A855F7]",
    animation: "toy-unicorn",
  },
  {
    emoji: "🤖",
    name: "Robot",
    colour: "from-[#64748B] to-[#0EA5E9]",
    animation: "toy-robot",
  },
  {
    emoji: "🎈",
    name: "Balloon",
    colour: "from-[#FFB800] to-[#FF7300]",
    animation: "toy-balloon",
  },
];

export default function NotFound() {
  const [toy, setToy] = useState(null);
  const [toyNumber, setToyNumber] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [toyAnimation, setToyAnimation] = useState(false);

  const makeToy = () => {
    if (isPlaying) return;

    setIsPlaying(true);
    setToy(null);
    setToyAnimation(false);

    window.setTimeout(() => {
      const nextToy = TOYS[Math.floor(Math.random() * TOYS.length)];

      setToy(nextToy);
      setToyNumber((number) => number + 1);
      setIsPlaying(false);
    }, 500);
  };

  const playToy = () => {
    if (!toy || toyAnimation || isPlaying) return;

    setToyAnimation(true);

    window.setTimeout(() => {
      setToyAnimation(false);
    }, 1100);
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-[#34156F] via-[#5B21B6] to-[#1D4ED8] px-5 py-8 text-white sm:px-6">

      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute -left-40 top-0 h-[30rem] w-[30rem] rounded-full bg-[#FF0073]/40 blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 top-20 h-[28rem] w-[28rem] rounded-full bg-[#FF7300]/30 blur-[120px]" />

      <div className="pointer-events-none absolute bottom-0 left-1/3 h-[25rem] w-[25rem] rounded-full bg-[#0B9FEE]/30 blur-[120px]" />

      {/* Floating shapes */}

      <div className="pointer-events-none absolute left-[6%] top-[14%] h-16 w-16 rotate-12 rounded-[1.5rem] bg-[#FF0073] shadow-2xl shadow-pink-500/30 sm:h-20 sm:w-20" />

      <div className="pointer-events-none absolute right-[8%] top-[17%] h-12 w-12 rounded-full bg-[#0B9FEE] shadow-xl shadow-blue-400/30 sm:h-14 sm:w-14" />

      <div className="pointer-events-none absolute bottom-[13%] left-[8%] h-12 w-12 rotate-45 rounded-2xl bg-[#FFB800] shadow-xl shadow-yellow-400/30 sm:h-16 sm:w-16" />

      <div className="pointer-events-none absolute bottom-[17%] right-[10%] h-9 w-9 rounded-full bg-[#FF7300] shadow-xl shadow-orange-400/30" />

      {/* Confetti */}

      <div className="pointer-events-none absolute left-[20%] top-[9%] text-2xl text-white/40">
        ✦
      </div>

      <div className="pointer-events-none absolute right-[25%] top-[12%] text-3xl text-[#FFB800]/60">
        ★
      </div>

      <div className="pointer-events-none absolute bottom-[25%] right-[22%] text-2xl text-[#FF0073]/60">
        ✦
      </div>

      <div className="relative z-10 mx-auto w-full max-w-4xl text-center">

        {/* =====================================================
            LABEL
        ===================================================== */}

        <div className="mb-4 flex justify-center sm:mb-5">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-white shadow-xl backdrop-blur-xl sm:text-xs">
            <span className="h-2 w-2 animate-bounce rounded-full bg-[#FFB800]" />
            Oops! Toy missing
          </span>
        </div>

        {/* =====================================================
            404
        ===================================================== */}

        <h1 className="font-heading text-[6.5rem] font-black leading-[0.78] tracking-[-0.07em] sm:text-[9rem] lg:text-[11rem]">

          <span>4</span>

          <span className="bg-gradient-to-r from-[#FF0073] via-[#FFB800] to-[#0B9FEE] bg-clip-text text-transparent">
            0
          </span>

          <span>4</span>

        </h1>

        {/* =====================================================
            MESSAGE
        ===================================================== */}

        <h2 className="mx-auto mt-7 max-w-2xl font-heading text-2xl font-black leading-tight sm:mt-8 sm:text-4xl">

          This page has gone off to{" "}

          <span className="bg-gradient-to-r from-[#FFB800] to-[#FF7300] bg-clip-text text-transparent">
            play!
          </span>

          {" "}🎈

        </h2>

        <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-white/75 sm:mt-4 sm:text-base">

          We couldn't find the page, but we've got plenty of toys
          ready to keep you entertained.

        </p>

        {/* =====================================================
            TOY MACHINE
        ===================================================== */}

        <div className="relative mx-auto mt-7 h-[210px] w-full max-w-[360px] sm:mt-8 sm:h-[230px]">

          {/* Glow */}

          <div className="pointer-events-none absolute bottom-5 left-1/2 h-10 w-64 -translate-x-1/2 rounded-full bg-black/30 blur-2xl" />

          {/* =====================================================
              TOY POPPING OUT
          ===================================================== */}

          {toy && (
            <button
              key={toyNumber}
              type="button"
              onClick={playToy}
              disabled={toyAnimation}
              aria-label={`Play with ${toy.name}`}
              className={`absolute left-1/2 top-[-10px] z-20 flex -translate-x-1/2 flex-col items-center border-0 bg-transparent p-0 text-left ${
                toyAnimation
                  ? toy.animation
                  : "animate-[toyPop_.55s_ease-out]"
              } ${
                toyAnimation
                  ? "cursor-default"
                  : "cursor-pointer"
              }`}
            >

              {/* Toy */}

              <div
                className={`flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br ${toy.colour} text-5xl shadow-2xl transition-transform duration-200 ${
                  !toyAnimation ? "hover:scale-110 active:scale-95" : ""
                }`}
              >
                {toy.emoji}
              </div>

              {/* Toy name */}

              <div className="mt-2 whitespace-nowrap rounded-full bg-black/20 px-3 py-1 text-[10px] font-black uppercase tracking-wider backdrop-blur">
                {toy.name}
              </div>

              {/* Click hint */}

              {!toyAnimation && (
                <div className="mt-1 text-[9px] font-black uppercase tracking-[0.15em] text-white/60">
                  ✨ Click me!
                </div>
              )}

            </button>
          )}

          {/* =====================================================
              MACHINE
          ===================================================== */}

          <div
            className={`absolute bottom-5 left-1/2 h-36 w-56 -translate-x-1/2 rounded-[2rem] border-4 border-white/20 bg-gradient-to-br from-[#FF0073] via-[#A21CAF] to-[#5B21B6] shadow-2xl transition-transform duration-300 ${
              isPlaying ? "scale-95" : "hover:scale-[1.02]"
            }`}
          >

            {/* Machine top */}

            <div className="absolute -top-5 left-1/2 h-8 w-40 -translate-x-1/2 rounded-full border-4 border-white/20 bg-[#FFB800] shadow-lg" />

            {/* Window */}

            <div className="absolute left-1/2 top-8 h-20 w-32 -translate-x-1/2 overflow-hidden rounded-2xl border-4 border-white/20 bg-[#160B3D]/80 shadow-inner">

              {!toy && !isPlaying && (
                <div className="flex h-full items-center justify-center text-4xl">
                  🧸
                </div>
              )}

              {isPlaying && (
                <div className="flex h-full items-center justify-center">

                  <div className="text-3xl animate-[toySpin_.5s_linear_infinite]">
                    🎲
                  </div>

                </div>
              )}

              {toy && !isPlaying && (
                <div className="flex h-full items-center justify-center text-4xl">
                  {toy.emoji}
                </div>
              )}

            </div>

            {/* Button */}

            <button
              type="button"
              onClick={makeToy}
              disabled={isPlaying}
              aria-label="Make me a toy"
              className="absolute bottom-3 left-1/2 flex h-8 -translate-x-1/2 items-center justify-center rounded-full border-2 border-white/30 bg-[#FFB800] px-2 text-[11px] font-black uppercase tracking-wide text-purple-900 shadow-lg transition-all hover:scale-110 hover:bg-[#FFC933] active:scale-90 disabled:cursor-wait"
            >
              Make me a toy
            </button>

          </div>

          {/* Machine feet */}

          <div className="absolute bottom-0 left-[25%] h-5 w-7 rotate-12 rounded-b-lg bg-[#3B176F]" />

          <div className="absolute bottom-0 right-[25%] h-5 w-7 -rotate-12 rounded-b-lg bg-[#3B176F]" />

        </div>

        {/* =====================================================
            INTERACTION
        ===================================================== */}

        <div className="min-h-[40px]">

          {toy ? (
            <p
              key={toyNumber}
              className="animate-[resultPop_.35s_ease-out] text-sm font-bold text-white/90"
            >
              🎉 You made a {toy.name.toLowerCase()}!
            </p>
          ) : (
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-white/50">
              {isPlaying
                ? "Making something fun..."
                : "Tap the machine to make a toy!"}
            </p>
          )}

        </div>

        {/* =====================================================
            BUTTONS
        ===================================================== */}

        <div className="mt-5 flex flex-col justify-center gap-3 sm:flex-row">

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

          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-xl transition-all hover:-translate-y-1 hover:bg-white/20"
          >
            🏠 Let's go home
          </Link>

        </div>

        {/* Footer */}

        <p className="mt-7 text-xs font-medium text-white/40">
          No toys were harmed while looking for this page. 🧸
        </p>

      </div>

      <style jsx>{`

        /* =====================================================
           TOY POP
        ===================================================== */

        @keyframes toyPop {
          0% {
            opacity: 0;
            transform: translateX(0) translateY(25px) scale(0.5) rotate(-8deg);
          }

          55% {
            opacity: 1;
            transform: translateX(0) translateY(-12px) scale(1.08) rotate(4deg);
          }

          100% {
            opacity: 1;
            transform: translateX(0) translateY(0) scale(1) rotate(0deg);
          }
        }

        /* =====================================================
           TEDDY
        ===================================================== */

        @keyframes teddyWiggle {
          0% {
            transform: rotate(0deg) scale(1);
          }

          20% {
            transform: rotate(-12deg) scale(1.08);
          }

          40% {
            transform: rotate(12deg) scale(1.08);
          }

          60% {
            transform: rotate(-8deg) scale(1.05);
          }

          80% {
            transform: rotate(6deg) scale(1.02);
          }

          100% {
            transform: rotate(0deg) scale(1);
          }
        }

        /* =====================================================
           CAR
        ===================================================== */

        @keyframes carDrive {
          0% {
            transform: translateX(0) rotate(0deg);
          }

          15% {
            transform: translateX(-8px) rotate(-2deg);
          }

          55% {
            transform: translateX(90px) rotate(2deg);
          }

          70% {
            transform: translateX(90px) rotate(2deg);
          }

          100% {
            transform: translateX(0) rotate(0deg);
          }
        }

        /* =====================================================
           DINOSAUR
        ===================================================== */

        @keyframes dinosaurRoar {
          0% {
            transform: translateY(0) rotate(0deg) scale(1);
          }

          20% {
            transform: translateY(-4px) rotate(-8deg) scale(1.08);
          }

          35% {
            transform: translateY(2px) rotate(8deg) scale(1.1);
          }

          50% {
            transform: translateY(-3px) rotate(-7deg) scale(1.08);
          }

          65% {
            transform: translateY(2px) rotate(6deg) scale(1.05);
          }

          100% {
            transform: translateY(0) rotate(0deg) scale(1);
          }
        }

        /* =====================================================
           ROCKET
        ===================================================== */

        @keyframes rocketLaunch {
          0% {
            transform: translateY(0) rotate(0deg) scale(1);
          }

          15% {
            transform: translateY(4px) rotate(-3deg) scale(1.05);
          }

          25% {
            transform: translateY(0) rotate(3deg) scale(1.08);
          }

          45% {
            transform: translateY(-70px) rotate(-2deg) scale(1.05);
          }

          65% {
            transform: translateY(-115px) rotate(2deg) scale(0.95);
          }

          82% {
            transform: translateY(-35px) rotate(-1deg) scale(1.02);
          }

          100% {
            transform: translateY(0) rotate(0deg) scale(1);
          }
        }

        /* =====================================================
           UNICORN
        ===================================================== */

        @keyframes unicornMagic {
          0% {
            transform: translateY(0) rotate(0deg) scale(1);
          }

          20% {
            transform: translateY(-12px) rotate(-8deg) scale(1.08);
          }

          40% {
            transform: translateY(2px) rotate(8deg) scale(1.12);
          }

          60% {
            transform: translateY(-10px) rotate(-5deg) scale(1.08);
          }

          80% {
            transform: translateY(1px) rotate(4deg) scale(1.04);
          }

          100% {
            transform: translateY(0) rotate(0deg) scale(1);
          }
        }

        /* =====================================================
           ROBOT
        ===================================================== */

        @keyframes robotDance {
          0% {
            transform: rotate(0deg) translateY(0) scale(1);
          }

          15% {
            transform: rotate(-12deg) translateY(-4px) scale(1.05);
          }

          30% {
            transform: rotate(12deg) translateY(-8px) scale(1.08);
          }

          45% {
            transform: rotate(-12deg) translateY(-4px) scale(1.05);
          }

          60% {
            transform: rotate(12deg) translateY(-8px) scale(1.08);
          }

          75% {
            transform: rotate(-6deg) translateY(-2px) scale(1.03);
          }

          100% {
            transform: rotate(0deg) translateY(0) scale(1);
          }
        }

        /* =====================================================
           BALLOON
        ===================================================== */

        @keyframes balloonFloat {
          0% {
            transform: translateY(0) rotate(0deg) scale(1);
          }

          20% {
            transform: translateY(-20px) rotate(-6deg) scale(1.05);
          }

          40% {
            transform: translateY(-45px) rotate(6deg) scale(1.08);
          }

          60% {
            transform: translateY(-25px) rotate(-5deg) scale(1.05);
          }

          80% {
            transform: translateY(-8px) rotate(3deg) scale(1.02);
          }

          100% {
            transform: translateY(0) rotate(0deg) scale(1);
          }
        }

        /* =====================================================
           UTILITY CLASSES
        ===================================================== */

        .toy-teddy {
          animation: teddyWiggle 1.1s ease-in-out;
        }

        .toy-car {
          animation: carDrive 1.1s ease-in-out;
        }

        .toy-dinosaur {
          animation: dinosaurRoar 1.1s ease-in-out;
        }

        .toy-rocket {
          animation: rocketLaunch 1.1s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .toy-unicorn {
          animation: unicornMagic 1.1s ease-in-out;
        }

        .toy-robot {
          animation: robotDance 1.1s ease-in-out;
        }

        .toy-balloon {
          animation: balloonFloat 1.1s ease-in-out;
        }

        /* =====================================================
           MACHINE
        ===================================================== */

        @keyframes toySpin {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }

        /* =====================================================
           RESULT
        ===================================================== */

        @keyframes resultPop {
          0% {
            opacity: 0;
            transform: translateY(6px) scale(0.9);
          }

          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

      `}</style>

    </main>
  );
}