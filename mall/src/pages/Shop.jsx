
import { useMemo, useState, useEffect } from "react";

import {
  Search,
  SlidersHorizontal,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  ShoppingBag,
  X,
  LayoutGrid,
  Shirt,
  Smartphone,
  Footprints,
  Watch,
  Star,
  Zap,
} from "lucide-react";

import {
  Link,
  useSearchParams,
} from "react-router-dom";

import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

const categories = [
  { name: "All", icon: LayoutGrid },
  { name: "Fashion", icon: Shirt },
  { name: "Electronics", icon: Smartphone },
  { name: "Footwear", icon: Footprints },
  { name: "Accessories", icon: Watch },
];

export default function Shop({ onAddToCart }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState(
    searchParams.get("category") || "All"
  );
  const [sort, setSort] = useState("default");

  // Sync category with URL
  useEffect(() => {
    const urlCategory = searchParams.get("category");

    if (urlCategory) {
      setCategory(urlCategory);
    } else {
      setCategory("All");
    }
  }, [searchParams]);

  const selectCategory = (value) => {
    setCategory(value);

    if (value === "All") {
      setSearchParams({});
    } else {
      setSearchParams({ category: value });
    }
  };

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = products.filter((product) => {
      const productName = product.name?.toLowerCase() || "";

      const productCategory =
        product.category?.toLowerCase() || "";

      const matchesSearch =
        productName.includes(search.toLowerCase());

      const matchesCategory =
        category === "All" ||
        productCategory === category.toLowerCase();

      return matchesSearch && matchesCategory;
    });

    if (sort === "low") {
      result = [...result].sort(
        (a, b) => a.price - b.price
      );
    }

    if (sort === "high") {
      result = [...result].sort(
        (a, b) => b.price - a.price
      );
    }

    if (sort === "rating") {
      result = [...result].sort(
        (a, b) => (b.rating || 0) - (a.rating || 0)
      );
    }

    return result;
  }, [search, category, sort]);

  const clearFilters = () => {
    setSearch("");
    setSort("default");
    selectCategory("All");
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#faf9f6]">

      {/* SHOP HERO */}

      <section className="relative overflow-hidden bg-[#11110f] text-white">

        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1800"
          alt="AVA shopping collection"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/30" />

        <div className="absolute -right-20 top-0 h-80 w-80 rounded-full bg-amber-500/10 blur-[100px]" />

        <div className="relative mx-auto max-w-full px-6 py-24 lg:px-10 lg:py-32">

          <div className="max-w-3xl">

            <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-5 py-3 text-[10px] font-black tracking-[0.25em] text-amber-400">
              <Sparkles size={15} />
              THE AVA COLLECTION
            </div>

            <h1 className="mt-8 text-5xl font-black leading-tight sm:text-6xl lg:text-8xl">
              Find Your
              <br />
              <span className="font-serif font-normal italic text-amber-400">
                Something Special.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-sm leading-8 text-gray-300 sm:text-base">
              Discover exceptional products, explore your favorite
              collections and experience shopping in a whole new way.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-5">

              <a
                href="#collections"
                className="inline-flex items-center gap-3 rounded-full bg-amber-500 px-8 py-4 text-xs font-black tracking-widest text-black transition hover:bg-white"
              >
                EXPLORE PRODUCTS
                <ArrowRight size={18} />
              </a>

              <div className="flex items-center gap-2 text-xs font-semibold text-gray-300">
                <ShoppingBag size={18} className="text-amber-400" />
                Discover your favorites
              </div>

            </div>

          </div>

          <div className="mt-16 flex flex-wrap gap-12 border-t border-white/20 pt-8">

            <div>
              <h3 className="text-3xl font-black text-amber-400">
                {products.length}+
              </h3>
              <p className="mt-2 text-[10px] tracking-widest text-gray-400">
                PRODUCTS
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-black text-amber-400">
                50+
              </h3>
              <p className="mt-2 text-[10px] tracking-widest text-gray-400">
                BRANDS
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-black text-amber-400">
                24/7
              </h3>
              <p className="mt-2 text-[10px] tracking-widest text-gray-400">
                SHOPPING
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* CATEGORY QUICK LINKS */}

      <section
        id="collections"
        className="border-b border-gray-100 bg-white"
      >

        <div className="mx-auto max-w-full px-6 py-8 lg:px-10">

          <p className="mb-6 text-[10px] font-black tracking-[0.25em] text-gray-400">
            EXPLORE COLLECTIONS
          </p>

          <div className="flex gap-3 overflow-x-auto pb-2">

            {categories.map((item) => {
              const Icon = item.icon;

              return (
                <button
                  key={item.name}
                  onClick={() => selectCategory(item.name)}
                  className={`flex shrink-0 items-center gap-3 rounded-full border px-6 py-4 text-xs font-black transition duration-300 ${
                    category === item.name
                      ? "border-neutral-950 bg-neutral-950 text-white shadow-lg"
                      : "border-gray-200 bg-white text-gray-600 hover:border-amber-500 hover:text-amber-700"
                  }`}
                >
                  <Icon size={17} />
                  {item.name}
                </button>
              );
            })}

          </div>

        </div>

      </section>


      {/* PRODUCT SHOPPING AREA */}

      <section className="mx-auto max-w-full px-6 py-16 lg:px-10 lg:py-24">

        {/* Heading */}

        <div className="mb-10 flex flex-wrap items-end justify-between gap-5">

          <div>
            <p className="text-[10px] font-black tracking-[0.3em] text-amber-700">
              HANDPICKED FOR YOU
            </p>

            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              Shop Collection
              <span className="text-amber-500">.</span>
            </h2>

            <p className="mt-4 text-sm text-gray-500">
              Explore our latest and most popular products.
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white px-5 py-3 text-xs font-bold text-gray-600">
            {filteredProducts.length} PRODUCTS FOUND
          </div>

        </div>


        {/* Search and Sort */}

        <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm sm:p-6">

          <div className="grid gap-4 lg:grid-cols-[1fr_auto]">

            {/* Search */}

            <div className="relative">

              <Search
                size={20}
                className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search products, brands and collections..."
                className="w-full rounded-xl border border-gray-200 bg-[#faf9f6] py-4 pl-14 pr-12 text-sm outline-none transition focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-100"
              />

              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black"
                  aria-label="Clear search"
                >
                  <X size={19} />
                </button>
              )}

            </div>


            {/* Sorting */}

            <div className="flex items-center gap-3">

              <SlidersHorizontal
                size={20}
                className="shrink-0 text-amber-700"
              />

              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="w-full cursor-pointer rounded-xl border border-gray-200 bg-[#faf9f6] px-5 py-4 text-sm font-semibold outline-none focus:border-amber-500 lg:w-64"
              >
                <option value="default">
                  Default Sorting
                </option>

                <option value="low">
                  Price: Low to High
                </option>

                <option value="high">
                  Price: High to Low
                </option>

                <option value="rating">
                  Top Rated
                </option>

              </select>

            </div>

          </div>


          {/* Active Filters */}

          <div className="mt-5 flex flex-wrap items-center justify-between gap-3">

            <div className="flex flex-wrap items-center gap-2">

              <span className="text-xs text-gray-400">
                Active category:
              </span>

              <span className="rounded-full bg-amber-50 px-4 py-2 text-xs font-bold text-amber-800">
                {category}
              </span>

              {search && (
                <span className="rounded-full bg-gray-100 px-4 py-2 text-xs font-semibold text-gray-700">
                  Search: {search}
                </span>
              )}

            </div>

            <button
              onClick={clearFilters}
              className="text-xs font-bold text-gray-500 underline decoration-gray-300 underline-offset-4 transition hover:text-amber-700"
            >
              CLEAR ALL FILTERS
            </button>

          </div>

        </div>


        {/* Product Grid */}

        <div className="mb-8 mt-14 flex items-end justify-between">

          <div>
            <p className="text-[10px] font-black tracking-[0.25em] text-amber-700">
              YOUR NEXT FAVORITE
            </p>

            <h3 className="mt-2 text-2xl font-black sm:text-3xl">
              {category === "All" ? "All Products" : category}
            </h3>
          </div>

          <span className="hidden items-center gap-2 text-xs font-semibold text-gray-400 sm:flex">
            <Star size={15} className="text-amber-500" />
            Discover something amazing
          </span>

        </div>


        {filteredProducts.length > 0 ? (

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

            {filteredProducts.map((product) => (

              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
              />

            ))}

          </div>

        ) : (

          /* Empty State */

          <div className="rounded-3xl border border-gray-100 bg-white px-6 py-24 text-center shadow-sm">

            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-amber-50 text-amber-700">
              <Search size={32} />
            </div>

            <h3 className="mt-7 text-3xl font-black">
              No Products Found
            </h3>

            <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-gray-500">
              We couldn't find products matching your search.
              Try another keyword or explore a different category.
            </p>

            <button
              onClick={clearFilters}
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-neutral-950 px-8 py-4 text-xs font-black tracking-widest text-white transition hover:bg-amber-500 hover:text-black"
            >
              RESET FILTERS
              <ArrowRight size={18} />
            </button>

          </div>

        )}

      </section>


      {/* BOTTOM PROMOTION */}

      <section className="px-6 pb-24 lg:px-10">

        <div className="relative mx-auto max-w-full overflow-hidden rounded-[30px] bg-neutral-950">

          <img
            src="https://images.unsplash.com/photo-1607082349566-187342175e2f?w=1600"
            alt="AVA Mall shopping deals"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover opacity-30"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />

          <div className="relative max-w-2xl px-8 py-16 text-white sm:px-14 sm:py-20">

            <div className="flex items-center gap-2 text-amber-400">
              <Zap size={18} />

              <span className="text-[10px] font-black tracking-[0.3em]">
                SPECIAL SHOPPING EVENT
              </span>
            </div>

            <h2 className="mt-6 text-4xl font-black leading-tight sm:text-6xl">
              More Style.
              <br />
              More Savings.
              <span className="font-serif font-normal italic text-amber-400">
                More AVA.
              </span>
            </h2>

            <p className="mt-5 max-w-md text-sm leading-7 text-gray-300">
              Don't miss our exclusive shopping offers and
              discover amazing collections.
            </p>

            <Link
              to="/offers"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-amber-500 px-8 py-4 text-xs font-black tracking-widest text-black transition hover:bg-white"
            >
              EXPLORE OFFERS
              <ArrowUpRight size={18} />
            </Link>

          </div>

        </div>

      </section>


      {/* FINAL CTA */}

      <section className="border-t border-gray-100 bg-white px-6 py-20 text-center">

        <p className="text-[10px] font-black tracking-[0.3em] text-amber-700">
          THE AVA EXPERIENCE
        </p>

        <h2 className="mt-5 text-4xl font-black sm:text-5xl">
          Shopping Made Special.
        </h2>

        <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-gray-500">
          Explore more, discover more and enjoy everything
          AVA Mall has to offer.
        </p>

        <Link
          to="/stores"
          className="mt-8 inline-flex items-center gap-3 rounded-full border border-neutral-900 px-8 py-4 text-xs font-black tracking-widest transition hover:bg-neutral-950 hover:text-white"
        >
          DISCOVER OUR STORES
          <ArrowRight size={18} />
        </Link>

      </section>

    </main>
  );
}
