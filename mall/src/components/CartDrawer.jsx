
import { useState } from "react";
import {
  X,
  Minus,
  Plus,
  ShoppingBag,
  Trash2,
  ArrowLeft,
  ArrowRight,
  MapPin,
  CreditCard,
  Truck,
  CheckCircle,
  ShieldCheck,
  Package,
  Home,
} from "lucide-react";

export default function CartDrawer({
  open,
  onClose,
  cart,
  onIncrease,
  onDecrease,
  onRemove,
  onOrderComplete,
}) {
  const [step, setStep] = useState("cart");
  const [paymentMethod, setPaymentMethod] = useState("upi");
  const [order, setOrder] = useState(null);

  const [address, setAddress] = useState({
    name: "",
    phone: "",
    email: "",
    street: "",
    city: "",
    pincode: "",
  });

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const totalItems = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const handleClose = () => {
    setStep("cart");
    setOrder(null);
    onClose?.();
  };

  const placeOrder = (e) => {
    e.preventDefault();

    const newOrder = {
      id: "AVA" + Date.now().toString().slice(-8),
      items: [...cart],
      total,
      paymentMethod,
      address: { ...address },
      date: new Date().toLocaleDateString("en-IN"),
      status: "Confirmed",
    };

    setOrder(newOrder);
    setStep("success");

    onOrderComplete?.(newOrder);
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm"
      onClick={handleClose}
    >
      <div
        className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col overflow-hidden bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* HEADER */}
        <div className="border-b border-gray-100 p-5 sm:p-6">

          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-black text-neutral-900">
                {step === "cart" && "Your Cart"}
                {step === "payment" && "Checkout"}
                {step === "success" && "Order Confirmed"}
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                {step === "cart" && `${totalItems} items in your cart`}
                {step === "payment" && "Delivery & payment details"}
                {step === "success" && "Thank you for shopping with AVA"}
              </p>
            </div>

            <button
              onClick={handleClose}
              className="rounded-full p-2 transition hover:bg-gray-100"
              aria-label="Close cart"
            >
              <X size={24} />
            </button>
          </div>

          {/* CHECKOUT STEPS */}
          {step !== "success" && (
            <div className="mt-6 flex items-center gap-2">

              <div className="flex flex-1 items-center gap-2">
                <div className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold ${
                  step === "cart"
                    ? "bg-amber-500 text-black"
                    : "bg-green-500 text-white"
                }`}>
                  {step === "payment" ? <CheckCircle size={17} /> : "1"}
                </div>

                <span className="text-xs font-bold">Cart</span>
              </div>

              <div className={`h-1 flex-1 rounded-full ${
                step === "payment" ? "bg-amber-500" : "bg-gray-200"
              }`} />

              <div className="flex flex-1 items-center gap-2">
                <div className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold ${
                  step === "payment"
                    ? "bg-amber-500 text-black"
                    : "bg-gray-100 text-gray-400"
                }`}>
                  2
                </div>

                <span className={`text-xs font-bold ${
                  step === "payment" ? "text-black" : "text-gray-400"
                }`}>
                  Payment
                </span>
              </div>
            </div>
          )}
        </div>

        {/* CART STEP */}
        {step === "cart" && (
          <>
            <div className="flex-1 space-y-5 overflow-y-auto p-5 sm:p-6">

              {cart.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <ShoppingBag size={65} className="text-gray-300" />

                  <h3 className="mt-5 text-xl font-bold">
                    Your cart is empty
                  </h3>

                  <p className="mt-2 text-sm text-gray-500">
                    Add some products to get started!
                  </p>

                  <button
                    onClick={handleClose}
                    className="mt-6 rounded-xl bg-black px-6 py-3 font-bold text-white transition hover:bg-amber-600"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 border-b border-gray-100 pb-5"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-24 w-24 rounded-xl bg-gray-100 object-cover"
                    />

                    <div className="min-w-0 flex-1">
                      <h3 className="font-bold text-neutral-900">
                        {item.name}
                      </h3>

                      <p className="mt-1 font-black text-amber-600">
                        ₹{item.price.toLocaleString("en-IN")}
                      </p>

                      <div className="mt-3 flex items-center gap-3">

                        <button
                          onClick={() => onDecrease(item.id)}
                          className="rounded-lg border p-1.5 transition hover:bg-gray-100"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={14} />
                        </button>

                        <span className="font-bold">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() => onIncrease(item.id)}
                          className="rounded-lg border p-1.5 transition hover:bg-gray-100"
                          aria-label="Increase quantity"
                        >
                          <Plus size={14} />
                        </button>

                        <button
                          onClick={() => onRemove(item.id)}
                          className="ml-auto text-red-500 transition hover:text-red-700"
                          aria-label="Remove item"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="border-t bg-white p-5 sm:p-6">

                <div className="mb-3 flex justify-between text-sm">
                  <span className="text-gray-500">Subtotal</span>
                  <span className="font-bold">
                    ₹{total.toLocaleString("en-IN")}
                  </span>
                </div>

                <div className="mb-4 flex justify-between text-lg">
                  <span className="font-bold">Total</span>
                  <span className="font-black text-amber-600">
                    ₹{total.toLocaleString("en-IN")}
                  </span>
                </div>

                <button
                  disabled={cart.length === 0}
                  onClick={() => setStep("payment")}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-neutral-950 py-4 font-bold text-white transition hover:bg-amber-600"
                >
                  PROCEED TO CHECKOUT
                  <ArrowRight size={18} />
                </button>

                <p className="mt-3 text-center text-xs text-gray-400">
                  Secure checkout · Easy shopping
                </p>
              </div>
            )}
          </>
        )}

        {/* PAYMENT STEP */}
        {step === "payment" && (
          <form
            onSubmit={placeOrder}
            className="flex flex-1 flex-col overflow-hidden"
          >
            <div className="flex-1 space-y-6 overflow-y-auto p-5 sm:p-6">

              {/* Delivery Details */}
              <div>
                <div className="mb-4 flex items-center gap-2">
                  <MapPin className="text-amber-600" size={21} />

                  <h3 className="font-black text-neutral-900">
                    Delivery Address
                  </h3>
                </div>

                <div className="space-y-3">

                  <input
                    required
                    type="text"
                    placeholder="Full Name"
                    value={address.name}
                    onChange={(e) =>
                      setAddress({ ...address, name: e.target.value })
                    }
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-amber-500"
                  />

                  <input
                    required
                    type="tel"
                    pattern="[0-9]{10}"
                    maxLength={10}
                    placeholder="10-digit Mobile Number"
                    value={address.phone}
                    onChange={(e) =>
                      setAddress({ ...address, phone: e.target.value })
                    }
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-amber-500"
                  />

                  <input
                    required
                    type="email"
                    placeholder="Email Address"
                    value={address.email}
                    onChange={(e) =>
                      setAddress({ ...address, email: e.target.value })
                    }
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-amber-500"
                  />

                  <textarea
                    required
                    rows={2}
                    placeholder="House No, Street, Area"
                    value={address.street}
                    onChange={(e) =>
                      setAddress({ ...address, street: e.target.value })
                    }
                    className="w-full resize-none rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-amber-500"
                  />

                  <div className="grid grid-cols-2 gap-3">

                    <input
                      required
                      type="text"
                      placeholder="City"
                      value={address.city}
                      onChange={(e) =>
                        setAddress({ ...address, city: e.target.value })
                      }
                      className="min-w-0 rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-amber-500"
                    />

                    <input
                      required
                      type="text"
                      inputMode="numeric"
                      pattern="[0-9]{6}"
                      maxLength={6}
                      placeholder="PIN Code"
                      value={address.pincode}
                      onChange={(e) =>
                        setAddress({ ...address, pincode: e.target.value })
                      }
                      className="min-w-0 rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-amber-500"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Methods */}
              <div>
                <div className="mb-4 flex items-center gap-2">
                  <CreditCard className="text-amber-600" size={21} />

                  <h3 className="font-black text-neutral-900">
                    Payment Method
                  </h3>
                </div>

                <div className="space-y-3">

                  {/* UPI */}
                  <label className={`flex cursor-pointer items-center gap-3 rounded-xl border p-4 transition ${
                    paymentMethod === "upi"
                      ? "border-amber-500 bg-amber-50"
                      : "border-gray-200"
                  }`}>
                    <input
                      type="radio"
                      name="payment"
                      value="upi"
                      checked={paymentMethod === "upi"}
                      onChange={() => setPaymentMethod("upi")}
                      className="accent-amber-500"
                    />

                    <div className="flex-1">
                      <p className="text-sm font-bold">UPI Payment</p>
                      <p className="mt-1 text-xs text-gray-500">
                        Google Pay, PhonePe, Paytm
                      </p>
                    </div>

                    <span className="text-xl">📱</span>
                  </label>

                  {/* Card */}
                  <label className={`flex cursor-pointer items-center gap-3 rounded-xl border p-4 transition ${
                    paymentMethod === "card"
                      ? "border-amber-500 bg-amber-50"
                      : "border-gray-200"
                  }`}>
                    <input
                      type="radio"
                      name="payment"
                      value="card"
                      checked={paymentMethod === "card"}
                      onChange={() => setPaymentMethod("card")}
                      className="accent-amber-500"
                    />

                    <div className="flex-1">
                      <p className="text-sm font-bold">Credit / Debit Card</p>
                      <p className="mt-1 text-xs text-gray-500">
                        Visa, Mastercard, RuPay
                      </p>
                    </div>

                    <CreditCard size={23} className="text-gray-500" />
                  </label>

                  {/* COD */}
                  <label className={`flex cursor-pointer items-center gap-3 rounded-xl border p-4 transition ${
                    paymentMethod === "cod"
                      ? "border-amber-500 bg-amber-50"
                      : "border-gray-200"
                  }`}>
                    <input
                      type="radio"
                      name="payment"
                      value="cod"
                      checked={paymentMethod === "cod"}
                      onChange={() => setPaymentMethod("cod")}
                      className="accent-amber-500"
                    />

                    <div className="flex-1">
                      <p className="text-sm font-bold">
                        Cash on Delivery
                      </p>
                      <p className="mt-1 text-xs text-gray-500">
                        Pay when your order arrives
                      </p>
                    </div>

                    <Truck size={23} className="text-gray-500" />
                  </label>
                </div>
              </div>

              {/* Order Summary */}
              <div className="rounded-xl bg-gray-50 p-4">
                <h3 className="mb-3 font-bold">Order Summary</h3>

                <div className="flex justify-between text-sm text-gray-500">
                  <span>Products ({totalItems})</span>
                  <span>₹{total.toLocaleString("en-IN")}</span>
                </div>

                <div className="mt-3 flex justify-between border-t pt-3">
                  <span className="font-bold">Total Amount</span>

                  <span className="font-black text-amber-600">
                    ₹{total.toLocaleString("en-IN")}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-gray-400">
                <ShieldCheck size={17} />
                Secure checkout experience
              </div>
            </div>

            {/* Payment Footer */}
            <div className="border-t bg-white p-5 sm:p-6">

              <button
                type="button"
                onClick={() => setStep("cart")}
                className="mb-3 flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-black"
              >
                <ArrowLeft size={16} />
                Back to Cart
              </button>

              <button
                type="submit"
                disabled={cart.length === 0}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-neutral-950 py-4 font-bold text-white transition hover:bg-amber-600"
              >
                PLACE ORDER · ₹{total.toLocaleString("en-IN")}
                <ArrowRight size={18} />
              </button>

              <p className="mt-3 text-center text-[10px] text-gray-400">
                Demo checkout only. Online payments are not processed.
              </p>
            </div>
          </form>
        )}

        {/* ORDER SUCCESS */}
        {step === "success" && order && (
          <div className="flex flex-1 flex-col items-center justify-center overflow-y-auto p-6 text-center">

            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-green-50">
              <CheckCircle size={60} className="text-green-500" />
            </div>

            <h2 className="mt-6 text-2xl font-black text-neutral-900">
              Order Confirmed!
            </h2>

            <p className="mt-3 max-w-xs text-sm leading-6 text-gray-500">
              Thank you for shopping with AVA Mall. Your order has been successfully placed.
            </p>

            {/* Order Details */}
            <div className="mt-7 w-full rounded-2xl border border-gray-100 bg-gray-50 p-5 text-left">

              <div className="flex items-center justify-between border-b border-gray-200 pb-4">
                <div>
                  <p className="text-xs text-gray-400">ORDER NUMBER</p>
                  <p className="mt-1 font-black text-amber-600">
                    {order.id}
                  </p>
                </div>

                <Package size={27} className="text-amber-600" />
              </div>

              <div className="space-y-4 pt-4">

                <div className="flex justify-between gap-3 text-sm">
                  <span className="text-gray-500">Order Date</span>
                  <span className="font-bold">{order.date}</span>
                </div>

                <div className="flex justify-between gap-3 text-sm">
                  <span className="text-gray-500">Items</span>
                  <span className="font-bold">
                    {order.items.reduce(
                      (sum, item) => sum + item.quantity,
                      0
                    )}
                  </span>
                </div>

                <div className="flex justify-between gap-3 text-sm">
                  <span className="text-gray-500">Payment</span>
                  <span className="font-bold">
                    {order.paymentMethod === "upi"
                      ? "UPI (Demo)"
                      : order.paymentMethod === "card"
                      ? "Card (Demo)"
                      : "Cash on Delivery"}
                  </span>
                </div>

                <div className="flex justify-between gap-3 text-sm">
                  <span className="text-gray-500">Payment Status</span>
                  <span className="font-bold text-green-600">
                    {order.paymentMethod === "cod"
                      ? "Pay on Delivery"
                      : "Not Charged (Demo)"}
                  </span>
                </div>

                <div className="flex justify-between border-t border-gray-200 pt-4">
                  <span className="font-bold">Total Paid / Due</span>
                  <span className="font-black text-amber-600">
                    ₹{order.total.toLocaleString("en-IN")}
                  </span>
                </div>
              </div>
            </div>

            {/* Delivery Address */}
            <div className="mt-4 w-full rounded-2xl border border-gray-100 p-5 text-left">
              <div className="mb-3 flex items-center gap-2">
                <Home size={19} className="text-amber-600" />
                <h3 className="font-bold">Delivery Address</h3>
              </div>

              <p className="text-sm font-bold">{order.address.name}</p>
              <p className="mt-1 text-sm text-gray-500">
                {order.address.street}, {order.address.city}
              </p>
              <p className="text-sm text-gray-500">
                PIN: {order.address.pincode}
              </p>
              <p className="mt-1 text-sm text-gray-500">
                Phone: {order.address.phone}
              </p>
            </div>

            <div className="mt-6 flex w-full items-center justify-center gap-2 text-sm text-green-600">
              <ShieldCheck size={18} />
              Thank you for choosing AVA Mall!
            </div>

            <button
              onClick={handleClose}
              className="mt-7 w-full rounded-xl bg-neutral-950 py-4 font-bold text-white transition hover:bg-amber-600"
            >
              CONTINUE SHOPPING
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
