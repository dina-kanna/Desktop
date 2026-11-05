
import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import {
  Tag,
  ArrowRight,
  Gift,
  Percent,
  Sparkles,
  Clock,
  Copy,
  Check,
  Zap,
  CalendarDays,
  Timer,
  Flame,
} from "lucide-react";


const offers = [
  {
    id: 1,
    title: "Fashion Festival",
    discount: "50%",
    description:
      "Refresh your wardrobe with exclusive fashion collections and amazing deals.",
    category: "Fashion",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1000",
    code: "FASHION50",
    endsAt: "2026-11-10T23:59:59",
    accent: "from-pink-500 to-rose-600",
  },
  {
    id: 2,
    title: "Tech Shopping Days",
    discount: "30%",
    description:
      "Upgrade your lifestyle with exciting discounts on selected electronics.",
    category: "Electronics",
    image:
      "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=1000",
    code: "TECH30",
    endsAt: "2026-11-12T20:00:00",
    accent: "from-blue-500 to-indigo-600",
  },
  {
    id: 3,
    title: "Footwear Specials",
    discount: "40%",
    description:
      "Step into something special with exclusive footwear collections.",
    category: "Footwear",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1000",
    code: "SHOES40",
    endsAt: "2026-11-15T22:00:00",
    accent: "from-orange-500 to-red-600",
  },
  {
    id: 4,
    title: "Beauty Celebration",
    discount: "25%",
    description:
      "Discover your favorite beauty and skincare essentials at special prices.",
    category: "Beauty",
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1000",
    code: "BEAUTY25",
    endsAt: "2026-11-18T23:59:59",
    accent: "from-purple-500 to-pink-600",
  },
];

const formatTime = (milliseconds) => {
  const totalSeconds = Math.floor(milliseconds / 1000);

  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return {
    days: String(days).padStart(2, "0"),
    hours: String(hours).padStart(2, "0"),
    minutes: String(minutes).padStart(2, "0"),
    seconds: String(seconds).padStart(2, "0"),
  };
};

export default function Offers() {
  const [now, setNow] = useState(Date.now());
  const [copied, setCopied] = useState("");

  // Update countdown every second
  useEffect(() => {
    const timer = setInterval(() => {
      setNow(Date.now());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Copy coupon code
  const copyCode = async (code) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(code);

      setTimeout(() => {
        setCopied((current) =>
          current === code ? "" : current
        );
      }, 2000);
    } catch {
      window.prompt("Copy this offer code:", code);
    }
  };

  const activeOffers = offers.filter(
    (offer) => new Date(offer.endsAt).getTime() > now
  );

  const nextOffer = [...activeOffers].sort(
    (a, b) =>
      new Date(a.endsAt).getTime() -
      new Date(b.endsAt).getTime()
  )[0];

  return (
    <main className="min-h-screen overflow-hidden bg-[#faf9f6]">

      {/* HERO SECTION */}

      <section className="relative overflow-hidden bg-[#100f0c] text-white">

        <img
          src="https://images.unsplash.com/photo-1607082349566-187342175e2f?w=1800"
          alt="AVA Mall exclusive shopping offers"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/30" />

        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-amber-500/20 blur-[120px]" />

        <div className="relative mx-auto grid max-w-full items-center gap-12 px-6 py-24 lg:grid-cols-2 lg:px-10 lg:py-32">

          <div>

            <div className="inline-flex items-center gap-3 rounded-full border border-amber-400/30 bg-amber-400/10 px-5 py-3 text-[10px] font-black tracking-[0.25em] text-amber-400">
              <Flame size={17} />
              EXCLUSIVE AVA SHOPPING FESTIVAL
            </div>

            <h1 className="mt-8 text-5xl font-black leading-tight sm:text-6xl lg:text-7xl">

              Amazing Deals.

              <br />

              <span className="font-serif font-normal italic text-amber-400">
                Incredible Savings.
              </span>

            </h1>

            <p className="mt-7 max-w-lg text-sm leading-8 text-gray-300 sm:text-base">
              Your favorite shopping destination just got better.
              Explore exclusive discounts, limited-time deals
              and special shopping rewards.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <a
                href="#offers"
                className="inline-flex items-center gap-3 rounded-full bg-amber-500 px-8 py-4 text-xs font-black tracking-widest text-black transition hover:bg-white"
              >
                EXPLORE ALL OFFERS
                <ArrowRight size={19} />
              </a>

              <Link
                to="/shop"
                className="rounded-full border border-white/40 px-8 py-4 text-xs font-bold tracking-widest transition hover:bg-white hover:text-black"
              >
                START SHOPPING
              </Link>

            </div>

            <div className="mt-14 flex gap-10 border-t border-white/20 pt-8">

              <div>
                <h3 className="text-3xl font-black text-amber-400">
                  {offers.length}
                </h3>
                <p className="mt-2 text-[10px] tracking-widest text-gray-400">
                  SPECIAL DEALS
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-black text-amber-400">
                  50%
                </h3>
                <p className="mt-2 text-[10px] tracking-widest text-gray-400">
                  MAX DISCOUNT
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-black text-amber-400">
                  24/7
                </h3>
                <p className="mt-2 text-[10px] tracking-widest text-gray-400">
                  ONLINE DEALS
                </p>
              </div>

            </div>

          </div>


          {/* HERO COUNTDOWN */}

          <div className="relative">

            <div className="rounded-[30px] border border-amber-400/30 bg-white/10 p-7 shadow-2xl backdrop-blur-xl sm:p-10">

              <div className="flex items-center justify-between">

                <span className="flex items-center gap-2 text-xs font-black tracking-widest text-amber-400">
                  <Zap size={17} />
                  ENDING SOON
                </span>

                <span className="rounded-full bg-red-500/20 px-4 py-2 text-[10px] font-black text-red-300">
                  LIMITED TIME
                </span>

              </div>

              {nextOffer ? (
                <>
                  <h2 className="mt-9 text-3xl font-black">
                    {nextOffer.title}
                  </h2>

                  <div className="mt-5 text-7xl font-black text-amber-400 sm:text-8xl">
                    {nextOffer.discount}
                    <span className="text-3xl"> OFF</span>
                  </div>

                  <p className="mt-3 text-sm text-gray-300">
                    Use code: {nextOffer.code}
                  </p>

                  <div className="mt-10 grid grid-cols-4 gap-2">

                    {Object.entries(
                      formatTime(
                        Math.max(
                          0,
                          new Date(nextOffer.endsAt).getTime() - now
                        )
                      )
                    ).map(([label, value]) => (

                      <div
                        key={label}
                        className="rounded-xl border border-white/10 bg-black/40 p-3 text-center sm:p-4"
                      >

                        <p className="text-2xl font-black text-white sm:text-3xl">
                          {value}
                        </p>

                        <p className="mt-2 text-[9px] font-bold uppercase tracking-widest text-amber-400">
                          {label}
                        </p>

                      </div>

                    ))}

                  </div>

                  <Link
                    to={`/shop?category=${encodeURIComponent(nextOffer.category)}`}
                    className="mt-9 flex items-center justify-center gap-3 rounded-xl bg-amber-500 py-4 text-xs font-black tracking-widest text-black transition hover:bg-white"
                  >
                    GRAB THIS DEAL
                    <ArrowRight size={18} />
                  </Link>
                </>
              ) : (
                <p className="mt-10 text-center text-gray-300">
                  No active offers right now.
                </p>
              )}

            </div>

            <div className="absolute -right-4 -top-5 flex h-20 w-20 rotate-12 items-center justify-center rounded-full bg-amber-500 text-center text-xs font-black leading-5 text-black shadow-xl">
              HOT
              <br />
              DEALS
              <br />
              LIVE
            </div>

          </div>

        </div>

      </section>


      {/* OFFER INTRO */}

      <section className="mx-auto max-w-full px-6 py-20 lg:px-10">

        <div className="mb-12 text-center">

          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-100 text-amber-700">
            <Tag size={27} />
          </div>

          <p className="mt-6 text-[10px] font-black tracking-[0.3em] text-amber-700">
            SPECIAL OFFERS & PROMOTIONS
          </p>

          <h2 className="mt-4 text-4xl font-black sm:text-5xl">
            Offers You Can't Miss<span className="text-amber-500">.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-500">
            Every offer has its own countdown. Grab your favorite
            deal before its expiration date and time.
          </p>

          <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-green-50 px-5 py-3 text-xs font-bold text-green-700">
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
            {activeOffers.length} ACTIVE OFFERS AVAILABLE
          </div>

        </div>


        {/* OFFER CARDS */}

        <div id="offers" className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {offers.map((offer) => {

            const endTime = new Date(offer.endsAt).getTime();

            const remaining = Math.max(0, endTime - now);

            const expired = remaining === 0;

            const time = formatTime(remaining);

            const expiryDate = new Date(offer.endsAt);

            return (

              <article
                key={offer.id}
                className={`group overflow-hidden rounded-[25px] border border-gray-100 bg-white shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                  expired ? "opacity-70" : ""
                }`}
              >

                {/* Image */}

                <div className="relative h-64 overflow-hidden">

                  <img
                    src={offer.image}
                    alt={offer.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                  <div className={`absolute right-5 top-5 rounded-2xl bg-gradient-to-r ${offer.accent} px-5 py-4 text-center text-white shadow-xl`}>

                    <p className="text-3xl font-black">
                      {offer.discount}
                    </p>

                    <p className="text-[9px] font-black tracking-widest">
                      OFF
                    </p>

                  </div>

                  <div className="absolute bottom-5 left-5">

                    <span className="rounded-full border border-white/30 bg-black/40 px-4 py-2 text-[10px] font-black tracking-widest text-white backdrop-blur-md">
                      {offer.category.toUpperCase()}
                    </span>

                  </div>

                  {expired && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/60">
                      <span className="rounded-full bg-red-600 px-8 py-4 text-sm font-black tracking-widest text-white">
                        OFFER EXPIRED
                      </span>
                    </div>
                  )}

                </div>


                {/* Card Content */}

                <div className="p-7">

                  <div className="flex items-center justify-between gap-3">

                    <span className="text-[10px] font-black tracking-[0.2em] text-amber-700">
                      EXCLUSIVE DEAL
                    </span>

                    <span className={`flex items-center gap-1 text-[10px] font-black ${
                      expired ? "text-red-500" : "text-green-600"
                    }`}>
                      <span className={`h-2 w-2 rounded-full ${
                        expired ? "bg-red-500" : "animate-pulse bg-green-500"
                      }`} />

                      {expired ? "EXPIRED" : "ACTIVE"}
                    </span>

                  </div>

                  <h3 className="mt-4 text-2xl font-black">
                    {offer.title}
                  </h3>

                  <p className="mt-3 min-h-[60px] text-sm leading-7 text-gray-500">
                    {offer.description}
                  </p>


                  {/* Countdown */}

                  <div className="mt-6 rounded-2xl bg-[#faf7ef] p-5">

                    <div className="mb-4 flex items-center justify-between">

                      <span className="flex items-center gap-2 text-[10px] font-black tracking-widest text-gray-700">
                        <Timer size={16} className="text-amber-600" />
                        {expired ? "TIME FINISHED" : "TIME REMAINING"}
                      </span>

                      <Clock size={16} className="text-amber-600" />

                    </div>

                    <div className="grid grid-cols-4 gap-2">

                      {Object.entries(time).map(([label, value]) => (

                        <div
                          key={label}
                          className="rounded-lg bg-white px-1 py-3 text-center shadow-sm"
                        >

                          <p className="text-xl font-black text-neutral-900">
                            {value}
                          </p>

                          <p className="mt-1 text-[8px] font-bold uppercase tracking-widest text-gray-400">
                            {label}
                          </p>

                        </div>

                      ))}

                    </div>

                  </div>


                  {/* Expiry Date */}

                  <div className="mt-5 flex items-start gap-3 rounded-xl border border-gray-100 p-4">

                    <CalendarDays
                      size={19}
                      className="mt-1 shrink-0 text-amber-600"
                    />

                    <div>

                      <p className="text-[10px] font-black tracking-widest text-gray-400">
                        OFFER ENDS ON
                      </p>

                      <p className="mt-1 text-sm font-bold text-gray-800">
                        {expiryDate.toLocaleDateString("en-IN", {
                          day: "2-digit",
                          month: "long",
                          year: "numeric",
                        })}
                      </p>

                      <p className="mt-1 text-xs text-gray-500">
                        {expiryDate.toLocaleTimeString("en-IN", {
                          hour: "2-digit",
                          minute: "2-digit",
                          hour12: true,
                        })}{" "}
                        (Local time)
                      </p>

                    </div>

                  </div>


                  {/* Coupon Code */}

                  <div className="mt-5 rounded-xl border border-dashed border-amber-400 bg-amber-50 p-4">

                    <div className="flex items-center justify-between gap-3">

                      <div>

                        <p className="text-[9px] font-black tracking-widest text-gray-500">
                          YOUR COUPON CODE
                        </p>

                        <p className="mt-2 text-lg font-black tracking-widest text-neutral-900">
                          {offer.code}
                        </p>

                      </div>

                      <button
                        onClick={() => copyCode(offer.code)}
                        disabled={expired}
                        className="flex items-center gap-2 rounded-lg bg-neutral-950 px-4 py-3 text-[10px] font-black text-white transition hover:bg-amber-500 hover:text-black disabled:cursor-not-allowed disabled:opacity-40"
                      >

                        {copied === offer.code ? (
                          <>
                            <Check size={15} />
                            COPIED
                          </>
                        ) : (
                          <>
                            <Copy size={15} />
                            COPY
                          </>
                        )}

                      </button>

                    </div>

                  </div>


                  {/* Shop Button */}

                  <Link
                    to={`/shop?category=${encodeURIComponent(offer.category)}`}
                    onClick={(e) => {
                      if (expired) e.preventDefault();
                    }}
                    aria-disabled={expired}
                    className={`mt-6 flex items-center justify-center gap-3 rounded-xl py-4 text-xs font-black tracking-widest transition ${
                      expired
                        ? "pointer-events-none bg-gray-200 text-gray-400"
                        : "bg-neutral-950 text-white hover:bg-amber-500 hover:text-black"
                    }`}
                  >

                    {expired ? "OFFER ENDED" : "SHOP THIS DEAL"}

                    <ArrowRight size={17} />

                  </Link>

                </div>

              </article>

            );

          })}

        </div>

      </section>


      {/* BENEFITS */}

      <section className="bg-white px-6 py-20">

        <div className="mx-auto max-w-full">

          <div className="mb-12 text-center">

            <p className="text-[10px] font-black tracking-[0.3em] text-amber-700">
              WHY SHOP WITH AVA
            </p>

            <h2 className="mt-4 text-4xl font-black">
              More Reasons to Love Shopping
            </h2>

          </div>

          <div className="grid gap-6 md:grid-cols-3">

            {[
              {
                icon: Gift,
                title: "Exclusive Rewards",
                description: "Enjoy special shopping benefits and exclusive deals.",
              },
              {
                icon: Percent,
                title: "Amazing Discounts",
                description: "Discover savings across selected collections.",
              },
              {
                icon: Sparkles,
                title: "Fresh Collections",
                description: "Explore exciting new arrivals and popular products.",
              },
            ].map((item) => {

              const Icon = item.icon;

              return (

                <div
                  key={item.title}
                  className="group rounded-2xl border border-gray-100 bg-[#faf9f6] p-9 text-center transition hover:-translate-y-2 hover:border-amber-300 hover:shadow-xl"
                >

                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-100 text-amber-700 transition group-hover:bg-amber-500 group-hover:text-black">
                    <Icon size={30} />
                  </div>

                  <h3 className="mt-6 text-xl font-black">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-gray-500">
                    {item.description}
                  </p>

                </div>

              );

            })}

          </div>

        </div>

      </section>


      {/* FINAL CTA */}

      <section className="bg-[#11110f] px-6 py-20 text-center text-white">

        <p className="text-[10px] font-black tracking-[0.3em] text-amber-400">
          DON'T MISS OUT
        </p>

        <h2 className="mt-5 text-4xl font-black sm:text-5xl">
          Your Next Great Deal
          <br />
          <span className="font-serif font-normal italic text-amber-400">
            Is Waiting.
          </span>
        </h2>

        <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-gray-400">
          Explore the AVA Mall shopping collection and discover
          something extraordinary.
        </p>

        <Link
          to="/shop"
          className="mt-9 inline-flex items-center gap-3 rounded-full bg-amber-500 px-9 py-4 text-xs font-black tracking-widest text-black transition hover:bg-white"
        >
          SHOP NOW
          <ArrowRight size={18} />
        </Link>

      </section>

    </main>
  );
}
