
import { ShoppingCart, Star } from "lucide-react";

export default function ProductCard({ product, onAddToCart }) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-gray-100 bg-white transition duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="relative h-64 overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
        />

        <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-bold text-black shadow">
          {product.discount}% OFF
        </span>

        <span className="absolute right-4 top-4 rounded-full bg-black px-3 py-1 text-xs font-semibold text-white">
          {product.tag}
        </span>
      </div>

      <div className="p-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-amber-600">
          {product.category}
        </p>

        <h3 className="mt-2 text-lg font-bold text-gray-900">
          {product.name}
        </h3>

        <div className="mt-2 flex items-center gap-1 text-sm text-amber-500">
          <Star size={15} fill="currentColor" />
          <span className="font-semibold">{product.rating}</span>
          <span className="text-gray-400">/ 5</span>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div>
            <span className="text-xl font-black">
              ₹{product.price.toLocaleString("en-IN")}
            </span>
            <p className="text-sm text-gray-400 line-through">
              ₹{product.oldPrice.toLocaleString("en-IN")}
            </p>
          </div>

          <button
            onClick={() => onAddToCart(product)}
            className="rounded-xl bg-black p-3 text-white transition hover:bg-amber-600"
            aria-label={`Add ${product.name} to cart`}
          >
            <ShoppingCart size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
