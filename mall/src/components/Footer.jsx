
import { useState } from "react";
import { Link } from "react-router-dom";

import {
  MapPin,
  Mail,
  Phone,
  ArrowRight,
  ArrowUpRight,
  Send,
  Clock,
  Sparkles,
  Camera,
  Users,
  MessageCircle,
} from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "Our Stores", path: "/stores" },
    { name: "Special Offers", path: "/offers" },
    { name: "Contact Us", path: "/contact" },
  ];

  const shoppingLinks = [
    "Fashion & Clothing",
    "Electronics",
    "Footwear",
    "Accessories",
    "Latest Collections",
  ];

  const socialLinks = [
    {
      icon: Camera,
      link: "https://www.instagram.com/",
      label: "Instagram",
    },
    {
      icon: Users,
      link: "https://www.facebook.com/",
      label: "Facebook",
    },
    {
      icon: MessageCircle,
      link: "https://x.com/",
      label: "X / Twitter",
    },
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email.trim()) return;

    setSubscribed(true);
    setEmail("");
  };

  return (
    <footer className="relative overflow-hidden bg-[#100f0d] text-white">

      {/* DECORATIVE BACKGROUND */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-amber-500/10 blur-[130px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-amber-500/10 blur-[130px]" />

      {/* NEWSLETTER SECTION */}
      <div className="relative border-b border-white/10">
        <div className="mx-auto grid max-w-full items-center gap-10 px-6 py-16 lg:grid-cols-2 lg:px-10">

          <div>
            <div className="flex items-center gap-2 text-amber-400">
              <Sparkles size={17} />

              <span className="text-[10px] font-black tracking-[0.3em]">
                STAY IN THE LOOP
              </span>
            </div>

            <h2 className="mt-5 text-3xl font-black sm:text-4xl">
              Get the Latest
              <br />
              <span className="font-serif font-normal italic text-amber-400">
                Shopping Updates.
              </span>
            </h2>

            <p className="mt-4 max-w-md text-sm leading-7 text-gray-400">
              Discover new collections, exclusive offers and
              exciting updates from AVA MALL.
            </p>
          </div>

          {/* NEWSLETTER FORM */}
          <div>
            <form
              onSubmit={handleSubscribe}
              className="flex flex-col gap-3 sm:flex-row"
            >
              <div className="flex flex-1 items-center rounded-xl border border-white/15 bg-white/5 px-5 transition focus-within:border-amber-500">

                <Mail
                  size={19}
                  className="shrink-0 text-amber-400"
                />

                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setSubscribed(false);
                  }}
                  placeholder="Enter your email address"
                  className="w-full bg-transparent px-4 py-5 text-sm text-white outline-none placeholder:text-gray-500"
                />
              </div>

              <button
                type="submit"
                className="flex items-center justify-center gap-3 rounded-xl bg-amber-500 px-7 py-5 text-xs font-black tracking-widest text-black transition hover:bg-white"
              >
                SUBSCRIBE
                <Send size={16} />
              </button>
            </form>

            {subscribed && (
              <p className="mt-4 text-xs font-bold text-green-400">
                Thank you for subscribing!
              </p>
            )}

            <p className="mt-4 text-[10px] text-gray-500">
              Stay connected with AVA MALL for the latest updates.
            </p>
          </div>

        </div>
      </div>

      {/* MAIN FOOTER */}
      <div className="relative mx-auto max-w-full px-6 py-16 lg:px-10">

        <div className="grid gap-14 sm:grid-cols-2 lg:grid-cols-12">

          {/* BRAND SECTION */}
          <div className="lg:col-span-4">

            {/* LOGO */}
            <Link
              to="/"
              className="group inline-flex items-center gap-3"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-orange-600 text-2xl font-black text-black shadow-lg transition group-hover:rotate-6">
              A
            </div>

              <div>
                <h2 className="text-2xl font-black tracking-[0.15em] text-white">
                  AVA<span className="text-amber-500">.</span>
                </h2>

                <p className="text-[9px] font-bold tracking-[0.3em] text-gray-400">
                  PREMIUM MALL
                </p>
              </div>
            </Link>

            <p className="mt-7 max-w-sm text-sm leading-8 text-gray-400">
              Discover fashion, lifestyle, electronics and more.
              Experience a whole new world of shopping at AVA MALL.
              Your style, your choices, your destination.
            </p>

            {/* SOCIAL MEDIA */}
            <div className="mt-8">

              <p className="mb-4 text-[10px] font-black tracking-[0.25em] text-amber-400">
                FOLLOW OUR JOURNEY
              </p>

              <div className="flex gap-3">

                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.label}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300 transition hover:border-amber-500 hover:bg-amber-500 hover:text-black"
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}

              </div>
            </div>

          </div>

          {/* QUICK LINKS */}
          <div className="lg:col-span-2">

            <h3 className="mb-7 text-sm font-black tracking-widest">
              QUICK LINKS
            </h3>

            <div className="space-y-5">

              {quickLinks.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="group flex items-center gap-2 text-sm text-gray-400 transition hover:translate-x-1 hover:text-amber-400"
                >
                  <span>{item.name}</span>

                  <ArrowUpRight
                    size={13}
                    className="opacity-0 transition group-hover:opacity-100"
                  />
                </Link>
              ))}

            </div>
          </div>

          {/* SHOPPING LINKS */}
          <div className="lg:col-span-3">

            <h3 className="mb-7 text-sm font-black tracking-widest">
              EXPLORE SHOPPING
            </h3>

            <div className="space-y-5">

              {shoppingLinks.map((item) => (
                <Link
                  key={item}
                  to="/shop"
                  className="group flex items-center gap-2 text-sm text-gray-400 transition hover:translate-x-1 hover:text-amber-400"
                >
                  <span>{item}</span>

                  <ArrowRight
                    size={13}
                    className="opacity-0 transition group-hover:opacity-100"
                  />
                </Link>
              ))}

            </div>
          </div>

          {/* CONTACT INFORMATION */}
          <div className="lg:col-span-3">

            <h3 className="mb-7 text-sm font-black tracking-widest">
              GET IN TOUCH
            </h3>

            <div className="space-y-6">

              {/* LOCATION */}
              <div className="flex gap-4">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-500/10 text-amber-400">
                  <MapPin size={19} />
                </div>

                <div>
                  <p className="text-xs font-bold text-white">
                    Our Location
                  </p>

                  <p className="mt-2 text-xs leading-6 text-gray-400">
                    AVA MALL, Madurai,
                    Tamil Nadu, India
                  </p>
                </div>

              </div>

              {/* EMAIL */}
              <a
                href="mailto:support@avamall.com"
                className="flex items-center gap-4"
              >

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-500/10 text-amber-400">
                  <Mail size={19} />
                </div>

                <div>
                  <p className="text-xs font-bold text-white">
                    Email Us
                  </p>

                  <p className="mt-2 break-all text-xs text-gray-400 transition hover:text-amber-400">
                    support@avamall.com
                  </p>
                </div>

              </a>

              {/* PHONE */}
              <a
                href="tel:+919876543210"
                className="flex items-center gap-4"
              >

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-500/10 text-amber-400">
                  <Phone size={19} />
                </div>

                <div>
                  <p className="text-xs font-bold text-white">
                    Call Us
                  </p>

                  <p className="mt-2 text-xs text-gray-400 transition hover:text-amber-400">
                    +91 98765 43210
                  </p>
                </div>

              </a>

              {/* OPENING HOURS */}
              <div className="flex items-center gap-4">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-500/10 text-amber-400">
                  <Clock size={19} />
                </div>

                <div>
                  <p className="text-xs font-bold text-white">
                    Opening Hours
                  </p>

                  <p className="mt-2 text-xs text-gray-400">
                    Daily · 10 AM – 10 PM
                  </p>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>

      {/* GOLD DIVIDER */}
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="h-px bg-gradient-to-r from-transparent via-amber-500/60 to-transparent" />
      </div>

      {/* BOTTOM BAR */}
      <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-6 py-7 text-center sm:flex-row sm:text-left lg:px-10">

        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()}{" "}
          <span className="font-black text-white">
            AVA<span className="text-amber-500">.</span>
          </span>{" "}
          All rights reserved.
        </p>

        <div className="flex flex-wrap justify-center gap-6 text-[10px] font-bold tracking-widest text-gray-500">

          <Link
            to="/contact"
            className="transition hover:text-amber-400"
          >
            CONTACT
          </Link>

          <Link
            to="/offers"
            className="transition hover:text-amber-400"
          >
            OFFERS
          </Link>

          <Link
            to="/stores"
            className="transition hover:text-amber-400"
          >
            STORES
          </Link>

        </div>

        <p className="text-[10px] font-bold tracking-widest text-amber-500">
          MADE FOR YOUR STYLE.
        </p>

      </div>

    </footer>
  );
}
