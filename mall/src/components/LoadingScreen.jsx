
export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-[9999] flex min-h-screen items-center justify-center overflow-hidden bg-[#090909]">

      {/* Background decoration */}
      <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-amber-500/10 blur-[100px]" />

      <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-orange-500/10 blur-[100px]" />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center px-6 text-center">

        {/* Animated Logo */}
        <div className="relative mb-10 flex h-28 w-28 items-center justify-center">

          {/* Outer spinning circle */}
          <div className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-amber-500 border-r-amber-500" />

          {/* Inner circle */}
          <div className="absolute inset-3 animate-[spin_3s_linear_infinite_reverse] rounded-full border border-amber-500/30" />

          {/* Logo */}
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-300 via-amber-500 to-orange-600 text-3xl font-black text-black shadow-[0_0_40px_rgba(245,158,11,0.3)]">
            A
          </div>

          {/* Decorative dots */}
          <div className="absolute -right-1 top-5 h-3 w-3 animate-pulse rounded-full bg-amber-400" />

          <div className="absolute -bottom-1 left-5 h-2 w-2 animate-ping rounded-full bg-orange-400" />

        </div>

        {/* Brand Name */}
        <h1 className="text-5xl font-black tracking-[0.25em] text-white sm:text-6xl">
          AVA<span className="text-amber-500">.</span>
        </h1>

        <p className="mt-4 text-xs font-semibold uppercase tracking-[0.4em] text-amber-500">
          Your World of Shopping
        </p>

        {/* Loading Text */}
        <div className="mt-12 flex items-center gap-2">
          <span className="text-sm font-medium tracking-widest text-gray-300">
            PREPARING YOUR EXPERIENCE
          </span>

          <span className="flex gap-1">
            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-amber-500" />
            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-amber-500 [animation-delay:150ms]" />
            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-amber-500 [animation-delay:300ms]" />
          </span>
        </div>

        {/* Progress Bar */}
        <div className="mt-7 h-1 w-64 overflow-hidden rounded-full bg-white/10 sm:w-80">
          <div className="h-full w-1/2 animate-[loading_1.5s_ease-in-out_infinite] rounded-full bg-gradient-to-r from-amber-400 to-orange-500" />
        </div>

        {/* Bottom Text */}
        <p className="mt-6 text-[10px] tracking-[0.3em] text-gray-500">
          DISCOVER · SHOP · ENJOY
        </p>

      </div>

      {/* Bottom decoration */}
      <div className="absolute bottom-8 text-xs tracking-widest text-gray-600">
        © AVA MALL
      </div>

      {/* Animation */}
      <style>{`
        @keyframes loading {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(200%);
          }
        }
      `}</style>

    </div>
  );
}
