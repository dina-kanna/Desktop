
import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  ShoppingBag,
  UserRound,
  Menu,
  X,
  ArrowRight,
} from "lucide-react";

export default function Navbar({
  cartCount = 0,
  onCartOpen,
  onAuthOpen,
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: "HOME", path: "/" },
    { name: "SHOP", path: "/shop" },
    { name: "STORES", path: "/stores" },
    { name: "OFFERS", path: "/offers" },
    { name: "CONTACT", path: "/contact" },
  ];

  // Close menu and scroll correctly after navigation
  useEffect(() => {
    setMenuOpen(false);

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [location.pathname]);

  const desktopClass = ({ isActive }) =>
    `relative whitespace-nowrap py-3 text-[11px] font-bold tracking-wider transition-all duration-300 ${
      isActive
        ? "text-amber-600"
        : "text-gray-500 hover:text-amber-600"
    }`;

  const mobileClass = ({ isActive }) =>
    `flex items-center justify-between rounded-xl px-5 py-4 text-sm font-bold transition ${
      isActive
        ? "bg-amber-50 text-amber-700"
        : "text-gray-700 hover:bg-gray-50"
    }`;

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-neutral-950 px-3 py-2 text-center text-[9px] font-semibold tracking-widest text-white sm:text-[11px]">
        ✨ WELCOME TO AVA MALL — DISCOVER YOUR WORLD OF SHOPPING ✨
      </div>

      {/* Main Navbar */}
      <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 shadow-sm backdrop-blur-xl">

        <div className="mx-auto flex min-h-[76px] max-w-full items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">

          {/* Logo */}
          <Link
            to="/"
            className="group flex shrink-0 items-center gap-2 sm:gap-3"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-orange-600 text-xl font-black text-black shadow-lg transition group-hover:rotate-6 sm:h-12 sm:w-12 sm:text-2xl">
              A
            </div>

            <div>
              <h1 className="text-xl font-black tracking-[0.12em] text-neutral-900 sm:text-2xl">
                AVA<span className="text-amber-600">.</span>
              </h1>

              <p className="text-[8px] font-bold tracking-[0.25em] text-gray-400 sm:text-[9px]">
                PREMIUM MALL
              </p>
            </div>
          </Link>

          {/* Desktop + Tablet Navigation */}
          <nav className="hidden items-center gap-4 md:flex lg:gap-7 xl:gap-9">
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/"}
                className={desktopClass}
              >
                {({ isActive }) => (
                  <>
                    {link.name}

                    <span
                      className={`absolute bottom-0 left-0 h-[2px] rounded-full bg-amber-500 transition-all duration-300 ${
                        isActive ? "w-full" : "w-0"
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex shrink-0 items-center gap-2 sm:gap-3">

            {/* Account */}
            <button
              onClick={() => onAuthOpen?.()}
              className="hidden items-center gap-2 rounded-full border border-gray-200 px-3 py-2 text-[10px] font-bold transition hover:border-amber-500 hover:bg-amber-50 lg:flex xl:px-4"
            >
              <UserRound size={16} />
              ACCOUNT
            </button>

            {/* Cart */}
            <button
              onClick={() => onCartOpen?.()}
              aria-label={`Open cart, ${cartCount} items`}
              className="relative flex items-center gap-2 rounded-full bg-neutral-950 px-3 py-2.5 text-white transition hover:bg-amber-600 sm:px-4"
            >
              <ShoppingBag size={18} />

              <span className="hidden text-[11px] font-bold sm:block">
                CART
              </span>

              {cartCount > 0 && (
                <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-amber-500 px-1 text-[10px] font-black text-black">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 text-neutral-900 transition hover:bg-gray-100 md:hidden"
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`overflow-hidden border-t border-gray-100 bg-white transition-all duration-300 md:hidden ${
            menuOpen
              ? "max-h-[500px] opacity-100"
              : "max-h-0 border-transparent opacity-0"
          }`}
        >
          <div className="px-5 py-5">

            <p className="mb-4 text-xs font-bold tracking-[0.2em] text-amber-600">
              EXPLORE AVA MALL
            </p>

            <nav className="space-y-2">
              {links.map((link, index) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === "/"}
                  onClick={() => setMenuOpen(false)}
                  className={mobileClass}
                >
                  <span>
                    <span className="mr-4 text-xs text-gray-400">
                      0{index + 1}
                    </span>
                    {link.name}
                  </span>

                  <ArrowRight size={17} />
                </NavLink>
              ))}
            </nav>

            <button
              onClick={() => {
                setMenuOpen(false);
                onAuthOpen?.();
              }}
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-neutral-950 py-4 text-sm font-bold text-white transition hover:bg-amber-600"
            >
              <UserRound size={18} />
              MY ACCOUNT
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
