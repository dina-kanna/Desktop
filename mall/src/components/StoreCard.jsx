
import { MapPin, Star, ArrowUpRight } from "lucide-react";

export default function StoreCard({ store }) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-2xl">

      {/* Store Image */}
      <div className="relative h-60 overflow-hidden bg-gray-100">

        <img
          src={store.image}
          alt={store.name}
          loading="lazy"
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

        <span className="absolute left-5 top-5 rounded-full bg-amber-500 px-4 py-2 text-[10px] font-black tracking-wider text-black">
          {store.offer || "EXPLORE STORE"}
        </span>

        <div className="absolute bottom-5 left-5 text-white">
          <p className="text-xs font-bold uppercase tracking-widest text-amber-400">
            {store.category}
          </p>

          <h3 className="mt-2 text-2xl font-black">
            {store.name}
          </h3>
        </div>

        <div className="absolute bottom-5 right-5 flex h-10 w-10 items-center justify-center rounded-full bg-white text-black transition group-hover:bg-amber-500">
          <ArrowUpRight size={20} />
        </div>

      </div>

      {/* Store Details */}
      <div className="p-6">

        <p className="text-sm leading-6 text-gray-500">
          {store.description}
        </p>

        <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-5">

          <div className="flex items-center gap-2 text-sm font-bold">
            <Star size={16} fill="#f59e0b" className="text-amber-500" />
            {store.rating || "4.8"}
          </div>

          <div className="flex items-center gap-1 text-xs font-semibold text-gray-400">
            <MapPin size={14} />
            {store.location || "AVA Mall"}
          </div>

        </div>

      </div>

    </div>
  );
}
