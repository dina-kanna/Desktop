
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

import {
  Search,
  Store,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  ShoppingBag,
  X,
  Shirt,
  Smartphone,
  Footprints,
  Heart,
  House,
  Utensils,
  SlidersHorizontal,
} from "lucide-react";

import { stores } from "../data/stores";
import StoreCard from "../components/StoreCard";

const categories = [
  { name: "All", icon: Store },
  { name: "Fashion", icon: Shirt },
  { name: "Electronics", icon: Smartphone },
  { name: "Footwear", icon: Footprints },
  { name: "Beauty", icon: Heart },
  { name: "Home", icon: House },
  { name: "Food & Dining", icon: Utensils },
];

const categoryImages = {
  Fashion:
    "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=900",
  Electronics:
    "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=900",
  Footwear:
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=900",
  Beauty:
    "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=900",
  Home:
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=900",
  "Food & Dining":
    "https://images.unsplash.com/photo-1542838132-92c53300491e?w=900",
  Accessories:
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=900",
};

export default function Stores() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredStores = useMemo(() => {
    return stores.filter((store) => {
      const query = search.toLowerCase();

      const matchesSearch =
        store.name.toLowerCase().includes(query) ||
        store.category.toLowerCase().includes(query) ||
        (store.description || "").toLowerCase().includes(query);

      const matchesCategory =
        category === "All" || store.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  const featuredStore = stores[0];

  return (
    <main className="min-h-screen bg-[#faf9f6]">

      {/* HERO */}

      <section className="relative overflow-hidden bg-[#11100e] text-white">

        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1800"
          alt="Luxury shopping mall"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/30" />

        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-amber-500/20 blur-[120px]" />

        <div className="relative mx-auto grid max-w-full items-center gap-12 px-6 py-24 lg:grid-cols-2 lg:px-10 lg:py-32">

          <div>

            <div className="inline-flex items-center gap-3 rounded-full border border-amber-400/30 bg-amber-400/10 px-5 py-3 text-[10px] font-black tracking-[0.25em] text-amber-400">
              <Sparkles size={16} />
              DISCOVER THE AVA EXPERIENCE
            </div>

            <h1 className="mt-8 text-5xl font-black leading-tight sm:text-6xl lg:text-7xl">

              Explore Our

              <br />

              <span className="font-serif font-normal italic text-amber-400">
                Stores & Brands.
              </span>

            </h1>

            <p className="mt-7 max-w-lg text-sm leading-8 text-gray-300 sm:text-base">
              Discover extraordinary collections, iconic brands,
              lifestyle essentials and everything you love
              under one roof at AVA MALL.
            </p>

            <a
              href="#all-stores"
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-amber-500 px-8 py-4 text-xs font-black tracking-widest text-black transition hover:bg-white"
            >
              EXPLORE STORES
              <ArrowRight size={18} />
            </a>

            <div className="mt-14 flex flex-wrap gap-10 border-t border-white/20 pt-8">

              <div>
                <h3 className="text-3xl font-black text-amber-400">
                  {stores.length}+
                </h3>
                <p className="mt-2 text-[10px] tracking-widest text-gray-400">
                  UNIQUE STORES
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-black text-amber-400">
                  {new Set(stores.map((store) => store.category)).size}
                </h3>
                <p className="mt-2 text-[10px] tracking-widest text-gray-400">
                  CATEGORIES
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-black text-amber-400">
                  100%
                </h3>
                <p className="mt-2 text-[10px] tracking-widest text-gray-400">
                  SHOPPING STYLE
                </p>
              </div>

            </div>

          </div>


          {/* FEATURED STORE */}

          <div className="relative">

            {featuredStore && (
              <div className="relative overflow-hidden rounded-[30px] border border-white/20 bg-white/10 p-3 shadow-2xl backdrop-blur-md">

                <div className="relative h-[420px] overflow-hidden rounded-[23px]">

                  <img
                    src={
                      featuredStore.image ||
                      categoryImages[featuredStore.category] ||
                      categoryImages.Fashion
                    }
                    alt={featuredStore.name}
                    className="h-full w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-7">

                    <span className="rounded-full bg-amber-500 px-4 py-2 text-[9px] font-black tracking-widest text-black">
                      FEATURED STORE
                    </span>

                    <h2 className="mt-5 text-4xl font-black">
                      {featuredStore.name}
                    </h2>

                    <p className="mt-3 text-sm text-gray-300">
                      {featuredStore.description}
                    </p>

                    <div className="mt-6 flex items-center gap-2 text-xs font-bold text-amber-400">
                      DISCOVER COLLECTIONS
                      <ArrowUpRight size={17} />
                    </div>

                  </div>

                </div>

              </div>
            )}

            <div className="absolute -bottom-5 -right-3 flex h-24 w-24 rotate-12 flex-col items-center justify-center rounded-full bg-amber-500 text-center text-[10px] font-black leading-4 text-black shadow-xl">
              YOUR
              <br />
              STYLE
              <br />
              YOUR WAY
            </div>

          </div>

        </div>

      </section>


      {/* CATEGORY SECTION */}

      <section className="mx-auto max-w-full px-6 py-20 lg:px-10">

        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">

          <div>
            <p className="text-[10px] font-black tracking-[0.3em] text-amber-700">
              FIND YOUR FAVORITES
            </p>

            <h2 className="mt-4 text-4xl font-black">
              Shop By Category<span className="text-amber-500">.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-gray-500">
            From everyday essentials to the latest trends,
            discover stores that match your lifestyle.
          </p>

        </div>


        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">

          {categories.slice(1).map((item) => {

            const Icon = item.icon;

            const count = stores.filter(
              (store) => store.category === item.name
            ).length;

            return (

              <button
                key={item.name}
                onClick={() => {
                  setCategory(item.name);
                  document.getElementById("all-stores")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                className={`group rounded-2xl border p-5 text-left transition duration-300 hover:-translate-y-1 hover:shadow-lg ${
                  category === item.name
                    ? "border-amber-500 bg-amber-50"
                    : "border-gray-100 bg-white hover:border-amber-300"
                }`}
              >

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f8f2e6] text-amber-700 transition group-hover:bg-amber-500 group-hover:text-black">
                  <Icon size={23} />
                </div>

                <h3 className="mt-5 text-sm font-black">
                  {item.name}
                </h3>

                <p className="mt-2 text-xs text-gray-400">
                  {count} {count === 1 ? "Store" : "Stores"}
                </p>

              </button>

            );

          })}

        </div>

      </section>


      {/* ALL STORES */}

      <section
        id="all-stores"
        className="bg-white px-6 py-20 lg:px-10"
      >

        <div className="mx-auto max-w-full">

          <div className="mb-10 text-center">

            <p className="text-[10px] font-black tracking-[0.3em] text-amber-700">
              THE AVA COLLECTION
            </p>

            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              All Our Stores
            </h2>

            <p className="mt-4 text-sm text-gray-500">
              Find the perfect store for everything you need.
            </p>

          </div>


          {/* SEARCH */}

          <div className="mx-auto mb-8 max-w-2xl">

            <div className="relative">

              <Search
                size={20}
                className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search stores, brands or categories..."
                className="w-full rounded-2xl border border-gray-200 bg-[#faf9f6] py-5 pl-14 pr-14 text-sm outline-none transition focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10"
              />

              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black"
                >
                  <X size={19} />
                </button>
              )}

            </div>

          </div>


          {/* FILTERS */}

          <div className="mb-10 flex flex-wrap items-center justify-center gap-3">

            <div className="mr-2 flex items-center gap-2 text-xs font-bold text-gray-400">
              <SlidersHorizontal size={16} />
              FILTER:
            </div>

            {categories.map((item) => (

              <button
                key={item.name}
                onClick={() => setCategory(item.name)}
                className={`rounded-full px-6 py-3 text-xs font-black transition ${
                  category === item.name
                    ? "bg-neutral-950 text-amber-400 shadow-lg"
                    : "bg-[#f5f3ee] text-gray-600 hover:bg-amber-100 hover:text-black"
                }`}
              >
                {item.name}
              </button>

            ))}

          </div>


          {/* RESULTS */}

          <div className="mb-7 flex items-center justify-between">

            <p className="text-sm font-bold text-gray-600">
              Showing{" "}
              <span className="text-black">
                {filteredStores.length}
              </span>{" "}
              stores
            </p>

            <span className="text-xs font-bold tracking-widest text-amber-700">
              AVA MALL DIRECTORY
            </span>

          </div>


          {/* STORE GRID */}

          {filteredStores.length > 0 ? (

            <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">

              {filteredStores.map((store) => (

                <StoreCard
                  key={store.id}
                  store={store}
                />

              ))}

            </div>

          ) : (

            <div className="rounded-3xl bg-[#faf9f6] px-6 py-24 text-center">

              <Store
                size={45}
                className="mx-auto text-amber-500"
              />

              <h3 className="mt-6 text-2xl font-black">
                No Stores Found
              </h3>

              <p className="mt-3 text-sm text-gray-500">
                Try another search or choose a different category.
              </p>

              <button
                onClick={() => {
                  setSearch("");
                  setCategory("All");
                }}
                className="mt-7 rounded-full bg-black px-8 py-3 text-xs font-black text-white transition hover:bg-amber-500 hover:text-black"
              >
                CLEAR FILTERS
              </button>

            </div>

          )}

        </div>

      </section>


      {/* PROMO BANNER */}

      <section className="bg-[#11100e] px-6 py-24 text-center text-white">

        <div className="mx-auto max-w-3xl">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-500 text-black">
            <ShoppingBag size={30} />
          </div>

          <p className="mt-7 text-[10px] font-black tracking-[0.3em] text-amber-400">
            YOUR SHOPPING JOURNEY STARTS HERE
          </p>

          <h2 className="mt-5 text-4xl font-black sm:text-5xl">
            Find Your Style.
            <br />
            <span className="font-serif font-normal italic text-amber-400">
              Find Your Store.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-gray-400">
            Explore exciting collections and discover
            something special at AVA MALL.
          </p>

          <Link
            to="/shop"
            className="mt-9 inline-flex items-center gap-3 rounded-full bg-amber-500 px-9 py-4 text-xs font-black tracking-widest text-black transition hover:bg-white"
          >
            EXPLORE PRODUCTS
            <ArrowRight size={18} />
          </Link>

        </div>

      </section>

    </main>
  );
}
