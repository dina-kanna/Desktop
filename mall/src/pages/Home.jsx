
import { Link } from "react-router-dom";

import {
  ArrowRight,
  ArrowUpRight,
  ShoppingBag,
  Truck,
  ShieldCheck,
  Headphones,
  Sparkles,
  Star,
  Zap,
  Heart,
  MoveRight,
} from "lucide-react";

import { products } from "../data/products";
import { stores } from "../data/stores";

import ProductCard from "../components/ProductCard";
import StoreCard from "../components/StoreCard";

const categories = [
  {
    name: "Fashion",
    subtitle: "Define Your Style",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=900",
    number: "01",
  },
  {
    name: "Electronics",
    subtitle: "Technology & Innovation",
    image:
      "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=900",
    number: "02",
  },
  {
    name: "Footwear",
    subtitle: "Step Into Style",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=900",
    number: "03",
  },
  {
    name: "Accessories",
    subtitle: "Complete Your Look",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=900",
    number: "04",
  },
];

const services = [
  {
    icon: Truck,
    title: "Free Delivery",
    description: "On selected orders",
  },
  {
    icon: ShieldCheck,
    title: "Secure Shopping",
    description: "Protected transactions",
  },
  {
    icon: ShoppingBag,
    title: "Premium Brands",
    description: "Quality guaranteed",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Always here to help",
  },
];

export default function Home({ onAddToCart }) {
  return (
    <main className="overflow-hidden bg-white text-neutral-900">

      {/* HERO SECTION */}

      <section className="relative min-h-[650px] overflow-hidden bg-[#11110f] text-white lg:min-h-[720px]">

        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=2000"
          alt="AVA Mall shopping experience"
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/20" />

        <div className="absolute -right-32 top-20 h-96 w-96 rounded-full bg-amber-500/10 blur-[120px]" />

        <div className="relative mx-auto grid min-h-[650px] max-w-full items-center gap-12 px-6 py-20 lg:min-h-[720px] lg:grid-cols-2 lg:px-10">

          {/* Hero Content */}

          <div className="relative z-10">

            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-amber-400/30 bg-amber-400/10 px-5 py-3">
              <Sparkles size={16} className="text-amber-400" />

              <span className="text-[10px] font-bold tracking-[0.25em] text-amber-300">
                THE ART OF PREMIUM SHOPPING
              </span>
            </div>

            <h1 className="max-w-2xl text-5xl font-black leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl">

              Discover.

              <br />

              Experience.

              <br />

              <span className="font-serif font-normal italic text-amber-400">
                Everything.
              </span>

            </h1>

            <p className="mt-8 max-w-lg text-base leading-8 text-gray-300 sm:text-lg">
              Welcome to AVA Mall, where extraordinary shopping
              experiences meet exceptional style. Explore fashion,
              technology and lifestyle in one destination.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <Link
                to="/shop"
                className="group flex items-center gap-4 rounded-full bg-amber-500 px-8 py-4 text-sm font-black text-black transition duration-300 hover:bg-white"
              >
                EXPLORE COLLECTION

                <ArrowRight
                  size={19}
                  className="transition group-hover:translate-x-1"
                />
              </Link>

              <Link
                to="/stores"
                className="flex items-center gap-3 rounded-full border border-white/40 px-8 py-4 text-sm font-bold transition hover:border-amber-400 hover:bg-white/10"
              >
                OUR STORES
                <ArrowUpRight size={18} />
              </Link>

            </div>

            {/* Hero Stats */}

            <div className="mt-16 grid max-w-lg grid-cols-3 border-t border-white/20 pt-8">

              <div>
                <h3 className="text-3xl font-black text-amber-400">
                  50+
                </h3>
                <p className="mt-2 text-[10px] tracking-widest text-gray-400">
                  PREMIUM STORES
                </p>
              </div>

              <div className="border-l border-white/20 pl-5">
                <h3 className="text-3xl font-black text-amber-400">
                  1K+
                </h3>
                <p className="mt-2 text-[10px] tracking-widest text-gray-400">
                  PRODUCTS
                </p>
              </div>

              <div className="border-l border-white/20 pl-5">
                <h3 className="text-3xl font-black text-amber-400">
                  24/7
                </h3>
                <p className="mt-2 text-[10px] tracking-widest text-gray-400">
                  ONLINE ACCESS
                </p>
              </div>

            </div>

          </div>

          {/* Hero Image */}

          <div className="relative hidden h-[540px] items-center justify-center lg:flex">

            <div className="absolute right-4 top-0 h-[440px] w-[350px] rotate-6 rounded-[180px_180px_25px_25px] border border-amber-400/30" />

            <img
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=900"
              alt="Fashion shopping collection"
              className="relative z-10 h-[480px] w-[350px] rounded-[180px_180px_20px_20px] object-cover shadow-2xl"
            />

            <div className="absolute -bottom-2 -left-2 z-20 rounded-2xl border border-white/20 bg-white p-6 text-black shadow-2xl">

              <div className="flex items-center gap-2 text-amber-500">
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
              </div>

              <p className="mt-3 text-xs font-bold tracking-widest text-gray-500">
                EXCLUSIVE COLLECTION
              </p>

              <h3 className="mt-2 text-3xl font-black">
                50% OFF
              </h3>

              <p className="mt-1 text-xs text-gray-500">
                Discover exciting deals
              </p>

            </div>

            <div className="absolute right-0 top-12 z-20 flex h-24 w-24 items-center justify-center rounded-full bg-amber-500 text-center text-xs font-black leading-5 text-black shadow-xl">
              STYLE
              <br />
              MEETS
              <br />
              LUXURY
            </div>

          </div>

        </div>

        {/* Bottom Label */}

        <div className="absolute bottom-5 right-8 hidden items-center gap-3 text-[10px] tracking-[0.3em] text-white/50 lg:flex">
          SCROLL TO EXPLORE
          <MoveRight size={18} />
        </div>

      </section>


      {/* SERVICES SECTION */}

      <section className="border-b border-gray-100 bg-white">

        <div className="mx-auto grid max-w-7xl gap-7 px-6 py-10 sm:grid-cols-2 lg:grid-cols-4 lg:px-10">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group flex items-center gap-4"
              >

                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#faf5e9] text-amber-700 transition duration-300 group-hover:bg-amber-500 group-hover:text-black">
                  <Icon size={25} />
                </div>

                <div>
                  <h3 className="font-black">
                    {service.title}
                  </h3>

                  <p className="mt-1 text-xs text-gray-500">
                    {service.description}
                  </p>
                </div>

              </div>
            );
          })}

        </div>

      </section>


      {/* CATEGORY SECTION */}

      <section className="bg-[#faf9f6] px-6 py-24 lg:px-10">

        <div className="mx-auto max-w-full">

          <div className="mb-12 flex flex-wrap items-end justify-between gap-5">

            <div>
              <p className="text-xs font-black tracking-[0.3em] text-amber-700">
                FIND YOUR STYLE
              </p>

              <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
                Explore Categories<span className="text-amber-500">.</span>
              </h2>

              <p className="mt-4 max-w-lg text-sm leading-7 text-gray-500">
                Discover carefully selected collections for
                every lifestyle and every occasion.
              </p>
            </div>

            <Link
              to="/shop"
              className="group flex items-center gap-3 border-b-2 border-amber-500 pb-2 text-sm font-black"
            >
              VIEW ALL CATEGORIES

              <ArrowUpRight
                size={18}
                className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>

          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {categories.map((category) => (

              <Link
                key={category.name}
                to={`/shop?category=${encodeURIComponent(category.name)}`}
                className="group relative h-[340px] overflow-hidden rounded-2xl bg-neutral-900"
              >

                <img
                  src={category.image}
                  alt={category.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />

                <span className="absolute right-5 top-5 text-xs font-black tracking-widest text-white/80">
                  {category.number}
                </span>

                <div className="absolute bottom-0 left-0 w-full p-7 text-white">

                  <p className="text-[10px] font-bold tracking-[0.2em] text-amber-400">
                    {category.subtitle}
                  </p>

                  <h3 className="mt-3 text-3xl font-black">
                    {category.name}
                  </h3>

                  <div className="mt-5 flex items-center justify-between border-t border-white/30 pt-4">

                    <span className="text-xs font-semibold tracking-widest">
                      EXPLORE NOW
                    </span>

                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black transition group-hover:bg-amber-500">
                      <ArrowUpRight size={20} />
                    </span>

                  </div>

                </div>

              </Link>

            ))}

          </div>

        </div>

      </section>


      {/* TRENDING PRODUCTS */}

      <section className="bg-white px-6 py-24 lg:px-10">

        <div className="mx-auto max-w-full">

          <div className="mb-12 flex flex-wrap items-end justify-between gap-5">

            <div>
              <p className="text-xs font-black tracking-[0.3em] text-amber-700">
                THE LATEST COLLECTION
              </p>

              <h2 className="mt-4 text-4xl font-black sm:text-5xl">
                Trending Products<span className="text-amber-500">.</span>
              </h2>

              <p className="mt-4 text-sm text-gray-500">
                The products everyone is talking about.
              </p>
            </div>

            <Link
              to="/shop"
              className="flex items-center gap-3 rounded-full bg-neutral-950 px-6 py-3 text-xs font-bold tracking-widest text-white transition hover:bg-amber-500 hover:text-black"
            >
              SHOP EVERYTHING
              <ArrowRight size={17} />
            </Link>

          </div>

          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">

            {products.slice(0, 4).map((product) => (

              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
              />

            ))}

          </div>

        </div>

      </section>


      {/* PROMOTIONAL BANNER */}

      <section className="px-6 pb-24 lg:px-10">

        <div className="relative mx-auto max-w-full overflow-hidden rounded-[30px] bg-[#17140f]">

          <img
            src="https://images.unsplash.com/photo-1607082349566-187342175e2f?w=1800"
            alt="Exclusive shopping sale"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover opacity-30"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />

          <div className="relative grid items-center gap-10 px-8 py-20 sm:px-14 lg:grid-cols-2 lg:px-20">

            <div>

              <div className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-4 py-2 text-[10px] font-black tracking-widest text-black">
                <Zap size={14} />
                EXCLUSIVE SHOPPING EVENT
              </div>

              <h2 className="mt-8 text-5xl font-black leading-tight text-white sm:text-6xl">
                Shop More.
                <br />
                Save More.
                <br />
                <span className="font-serif font-normal italic text-amber-400">
                  Live Better.
                </span>
              </h2>

              <p className="mt-6 max-w-md text-sm leading-7 text-gray-300">
                Discover exciting collections, special deals and
                amazing shopping opportunities at AVA Mall.
              </p>

              <Link
                to="/offers"
                className="mt-9 inline-flex items-center gap-4 rounded-full bg-amber-500 px-8 py-4 text-sm font-black text-black transition hover:bg-white"
              >
                DISCOVER OFFERS
                <ArrowRight size={19} />
              </Link>

            </div>

            <div className="hidden justify-center lg:flex">

              <div className="flex h-64 w-64 rotate-6 flex-col items-center justify-center rounded-full border-2 border-amber-400/50 bg-amber-400/10 text-center backdrop-blur-sm">

                <p className="text-sm font-bold tracking-[0.3em] text-amber-300">
                  SPECIAL SALE
                </p>

                <h3 className="mt-3 text-7xl font-black text-white">
                  50%
                </h3>

                <p className="mt-2 text-lg font-bold tracking-widest text-amber-400">
                  OFF
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* STORE SECTION */}

      <section className="bg-[#faf9f6] px-6 py-24 lg:px-10">

        <div className="mx-auto max-w-full">

          <div className="mb-12 flex flex-wrap items-end justify-between gap-5">

            <div>
              <p className="text-xs font-black tracking-[0.3em] text-amber-700">
                BRANDS YOU LOVE
              </p>

              <h2 className="mt-4 text-4xl font-black sm:text-5xl">
                Discover Our Stores<span className="text-amber-500">.</span>
              </h2>

              <p className="mt-4 text-sm text-gray-500">
                Explore popular brands and exclusive collections.
              </p>
            </div>

            <Link
              to="/stores"
              className="group flex items-center gap-3 text-sm font-black transition hover:text-amber-700"
            >
              ALL STORES

              <ArrowUpRight
                size={20}
                className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>

          </div>

          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">

            {stores.slice(0, 3).map((store) => (

              <StoreCard
                key={store.id}
                store={store}
              />

            ))}

          </div>

          <div className="mt-12 text-center">

            <Link
              to="/stores"
              className="inline-flex items-center gap-4 rounded-full border border-neutral-900 px-9 py-4 text-xs font-black tracking-widest transition hover:bg-neutral-900 hover:text-white"
            >
              EXPLORE ALL STORES
              <ArrowRight size={18} />
            </Link>

          </div>

        </div>

      </section>


      {/* NEWSLETTER / FINAL CTA */}

      <section className="bg-white px-6 py-24 lg:px-10">

        <div className="mx-auto max-w-full text-center">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-100 text-amber-700">
            <Heart size={30} />
          </div>

          <p className="mt-7 text-xs font-black tracking-[0.3em] text-amber-700">
            THE AVA EXPERIENCE
          </p>

          <h2 className="mt-5 text-4xl font-black leading-tight sm:text-6xl">
            Your Style.
            <br />
            Your Shopping.
            <span className="font-serif font-normal italic text-amber-600">
              Your AVA.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-8 text-gray-500">
            Everything you love, all in one destination.
            Explore the world of AVA Mall and discover something special.
          </p>

          <Link
            to="/shop"
            className="mt-9 inline-flex items-center gap-4 rounded-full bg-neutral-950 px-10 py-5 text-sm font-black tracking-widest text-white transition hover:bg-amber-500 hover:text-black"
          >
            START SHOPPING
            <ArrowRight size={20} />
          </Link>

        </div>

      </section>

    </main>
  );
}
