
import { useState } from "react";
import { Link } from "react-router-dom";

import {
  X,
  UserRound,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  ShoppingBag,
  Sparkles,
} from "lucide-react";

export default function AuthModal({ open, onClose }) {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");

  if (!open) return null;

  function handleSubmit(e) {
    e.preventDefault();
    setMessage(
      "Demo authentication only. Connect a backend to enable real accounts."
    );
  }

  function switchMode(login) {
    setIsLogin(login);
    setMessage("");
    setShowPassword(false);
  }

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/70 p-3 backdrop-blur-md sm:p-6">

      <div className="relative flex max-h-[95vh] w-full max-w-full overflow-hidden rounded-[28px] bg-white shadow-2xl">

        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-5 top-5 z-20 rounded-full bg-white/90 p-2.5 text-gray-700 shadow-sm transition hover:rotate-90 hover:bg-black hover:text-white"
        >
          <X size={20} />
        </button>

        {/* Left Promotional Section */}
        <div className="relative hidden w-[45%] flex-col justify-between overflow-hidden bg-[#171717] p-10 text-white md:flex">

          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 via-transparent to-black" />

          <div className="relative z-10">

            {/* AVA PREMIUM MALL LOGO */}
            <Link
              to="/"
              onClick={onClose}
              className="group flex shrink-0 items-center gap-2 sm:gap-3"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-orange-600 text-xl font-black text-black shadow-lg transition group-hover:rotate-6 sm:h-12 sm:w-12 sm:text-2xl">
                A
              </div>

              <div>
                <h1 className="text-xl font-black tracking-[0.12em] text-white sm:text-2xl">
                  AVA<span className="text-amber-400">.</span>
                </h1>

                <p className="text-[8px] font-bold tracking-[0.25em] text-gray-400 sm:text-[9px]">
                  PREMIUM MALL
                </p>
              </div>
            </Link>

            {/* Promotional Content */}
            <div className="mt-24">

              <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-400/10 px-4 py-2 text-xs font-semibold text-amber-300">
                <Sparkles size={14} />
                YOUR STYLE, YOUR WORLD
              </span>

              <h2 className="text-5xl font-black leading-tight">
                Discover.
                <br />
                Shop.
                <br />
                <span className="text-amber-400">
                  Experience.
                </span>
              </h2>

              <p className="mt-6 max-w-xs leading-7 text-gray-400">
                Everything you love, all in one place.
                Join AVA MALL and discover a smarter
                way to shop.
              </p>

            </div>
          </div>

          {/* Footer */}
          <div className="relative z-10">

            <div className="mb-5 h-px bg-white/15" />

            <p className="text-sm text-gray-400">
              Premium shopping. Exceptional experience.
            </p>

            <p className="mt-2 text-xs text-gray-600">
              © 2026 AVA MALL. All rights reserved.
            </p>

          </div>

          {/* Decorative Circles */}
          <div className="absolute -bottom-24 -right-20 h-80 w-80 rounded-full border border-amber-400/20" />

          <div className="absolute -bottom-12 -right-8 h-56 w-56 rounded-full border border-amber-400/20" />

        </div>

        {/* Right Authentication Section */}
        <div className="w-full overflow-y-auto p-6 sm:p-10 md:w-[55%] md:p-14">

          {/* Heading */}
          <div className="mb-8 md:mt-5">

            {/* Mobile Logo */}
            <Link
              to="/"
              onClick={onClose}
              className="group mb-6 inline-flex items-center gap-2 md:hidden"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-orange-600 text-xl font-black text-black shadow-lg transition group-hover:rotate-6">
                A
              </div>

              <div>
                <h1 className="text-xl font-black tracking-[0.12em] text-neutral-900">
                  AVA<span className="text-amber-600">.</span>
                </h1>

                <p className="text-[8px] font-bold tracking-[0.25em] text-gray-400">
                  PREMIUM MALL
                </p>
              </div>
            </Link>

            <p className="mb-3 text-xs font-bold uppercase tracking-[3px] text-amber-600">
              Welcome to AVA MALL
            </p>

            <h2 className="text-3xl font-black tracking-tight text-gray-900 sm:text-4xl">
              {isLogin ? "Welcome Back!" : "Create Account"}
            </h2>

            <p className="mt-3 text-sm text-gray-500">
              {isLogin
                ? "Sign in to continue your shopping journey."
                : "Create an account and discover something amazing."}
            </p>

          </div>

          {/* Login / Signup Tabs */}
          <div className="mb-8 flex rounded-xl bg-gray-100 p-1">

            <button
              type="button"
              onClick={() => switchMode(true)}
              className={`w-1/2 rounded-lg py-3 text-sm font-bold transition-all ${
                isLogin
                  ? "bg-white text-black shadow-sm"
                  : "text-gray-500 hover:text-black"
              }`}
            >
              Login
            </button>

            <button
              type="button"
              onClick={() => switchMode(false)}
              className={`w-1/2 rounded-lg py-3 text-sm font-bold transition-all ${
                !isLogin
                  ? "bg-white text-black shadow-sm"
                  : "text-gray-500 hover:text-black"
              }`}
            >
              Sign Up
            </button>

          </div>

          {/* Authentication Form */}
          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Full Name */}
            {!isLogin && (
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Full Name
                </label>

                <div className="flex items-center gap-3 rounded-xl border border-gray-200 px-4 transition focus-within:border-amber-500 focus-within:ring-4 focus-within:ring-amber-500/10">

                  <UserRound size={19} className="text-gray-400" />

                  <input
                    type="text"
                    placeholder="Enter your full name"
                    required
                    autoComplete="name"
                    className="w-full bg-transparent py-4 text-sm outline-none"
                  />

                </div>
              </div>
            )}

            {/* Email */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Email Address
              </label>

              <div className="flex items-center gap-3 rounded-xl border border-gray-200 px-4 transition focus-within:border-amber-500 focus-within:ring-4 focus-within:ring-amber-500/10">

                <Mail size={19} className="text-gray-400" />

                <input
                  type="email"
                  placeholder="you@example.com"
                  required
                  autoComplete="email"
                  className="w-full bg-transparent py-4 text-sm outline-none"
                />

              </div>
            </div>

            {/* Password */}
            <div>
              <div className="mb-2 flex items-center justify-between">

                <label className="text-sm font-semibold text-gray-700">
                  Password
                </label>

                {isLogin && (
                  <button
                    type="button"
                    onClick={() =>
                      setMessage("Connect a password recovery backend.")
                    }
                    className="text-xs font-bold text-amber-600 hover:text-amber-700"
                  >
                    Forgot Password?
                  </button>
                )}

              </div>

              <div className="flex items-center gap-3 rounded-xl border border-gray-200 px-4 transition focus-within:border-amber-500 focus-within:ring-4 focus-within:ring-amber-500/10">

                <Lock size={19} className="text-gray-400" />

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  minLength={6}
                  required
                  autoComplete={
                    isLogin ? "current-password" : "new-password"
                  }
                  className="w-full bg-transparent py-4 text-sm outline-none"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={
                    showPassword ? "Hide password" : "Show password"
                  }
                  className="text-gray-400 hover:text-black"
                >
                  {showPassword ? (
                    <EyeOff size={19} />
                  ) : (
                    <Eye size={19} />
                  )}
                </button>

              </div>
            </div>

            {/* Terms */}
            {!isLogin && (
              <label className="flex items-start gap-2 text-xs text-gray-500">
                <input
                  type="checkbox"
                  required
                  className="mt-0.5 accent-amber-600"
                />

                <span>
                  I agree to the Terms & Conditions and Privacy Policy.
                </span>
              </label>
            )}

            {/* Submit */}
            <button
              type="submit"
              className="group flex w-full items-center justify-center gap-3 rounded-xl bg-black py-4 font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-600 hover:shadow-amber-500/20"
            >
              {isLogin ? "Sign In to Account" : "Create My Account"}

              <ArrowRight
                size={19}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>

          </form>

          {/* Message */}
          {message && (
            <p
              role="status"
              className="mt-4 rounded-xl bg-amber-50 p-3 text-center text-xs text-amber-800"
            >
              {message}
            </p>
          )}

          {/* Divider */}
          <div className="my-7 flex items-center gap-4">

            <div className="h-px flex-1 bg-gray-200" />

            <span className="text-xs font-medium text-gray-400">
              OR CONTINUE WITH
            </span>

            <div className="h-px flex-1 bg-gray-200" />

          </div>

          {/* Social Login */}
          <div className="grid grid-cols-2 gap-3">

            {/* Google */}
            <button
              type="button"
              onClick={() =>
                setMessage("Connect Google OAuth to enable sign in.")
              }
              className="flex items-center justify-center gap-2 rounded-xl border border-gray-200 py-3 text-sm font-semibold text-gray-700 transition hover:border-black hover:bg-gray-50"
            >
              <span className="text-xl font-black text-blue-600">
                G
              </span>
              Google
            </button>

            {/* Apple */}
            <button
              type="button"
              onClick={() =>
                setMessage("Connect Apple OAuth to enable sign in.")
              }
              className="flex items-center justify-center gap-2 rounded-xl border border-gray-200 py-3 text-sm font-semibold text-gray-700 transition hover:border-black hover:bg-gray-50"
            >
              <span className="text-xl font-bold text-black">
                ●
              </span>
              Apple
            </button>

          </div>

          {/* Bottom Switch */}
          <p className="mt-8 text-center text-sm text-gray-500">

            {isLogin
              ? "New to AVA MALL?"
              : "Already have an account?"}

            <button
              type="button"
              onClick={() => switchMode(!isLogin)}
              className="ml-2 font-bold text-amber-600 hover:underline"
            >
              {isLogin ? "Create Account" : "Sign In"}
            </button>

          </p>

        </div>
      </div>
    </div>
  );
}
