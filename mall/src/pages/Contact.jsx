
import { useState } from "react";

import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  ArrowRight,
  MessageCircle,
  Headphones,
  CheckCircle,
  Sparkles,
  Navigation,
  Globe,
  Camera,
  Users,
} from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const contactDetails = [
    {
      icon: MapPin,
      title: "Visit Our Mall",
      detail: "AVA MALL, Madurai, Tamil Nadu, India",
      extra: "Come and experience shopping with us.",
      link: "https://www.google.com/maps/search/?api=1&query=shopping+mall+Madurai+Tamil+Nadu",
    },
    {
      icon: Phone,
      title: "Call Our Team",
      detail: "+91 98765 43210",
      extra: "Available during mall opening hours.",
      link: "tel:+919876543210",
    },
    {
      icon: Mail,
      title: "Email Support",
      detail: "support@avamall.com",
      extra: "We would love to hear from you.",
      link: "mailto:support@avamall.com",
    },
    {
      icon: Clock,
      title: "Opening Hours",
      detail: "Monday – Sunday",
      extra: "10:00 AM – 10:00 PM",
      link: null,
    },
  ];

  const supportFeatures = [
    {
      icon: Headphones,
      title: "Friendly Support",
      text: "Our team is ready to answer your questions.",
    },
    {
      icon: CheckCircle,
      title: "Quick Assistance",
      text: "We aim to make your experience smooth and easy.",
    },
    {
      icon: Sparkles,
      title: "Your Feedback Matters",
      text: "Your suggestions help us improve AVA MALL.",
    },
  ];

  function handleChange(e) {
    const { name, value } = e.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);
    setSubmitted(false);

    // Demo submission only.
    // Connect a backend or email service to deliver messages.

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);

      setForm({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 800);
  }

  return (
    <main className="min-h-screen bg-[#faf9f6]">

      {/* HERO SECTION */}

      <section className="relative overflow-hidden bg-[#100f0d] text-white">

        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1800"
          alt="AVA Mall shopping experience"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/40" />

        <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-amber-500/20 blur-[120px]" />

        <div className="relative mx-auto max-w-full px-6 py-28 text-center lg:py-36">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-amber-400/30 bg-amber-400/10 text-amber-400">
            <MessageCircle size={30} />
          </div>

          <p className="mt-8 text-[10px] font-black tracking-[0.35em] text-amber-400">
            WE ARE ALWAYS HAPPY TO HELP
          </p>

          <h1 className="mt-5 text-5xl font-black sm:text-6xl lg:text-7xl">
            Let's Start a
            <br />
            <span className="font-serif font-normal italic text-amber-400">
              Conversation.
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-xl text-sm leading-8 text-gray-300 sm:text-base">
            Have a question, suggestion or feedback?
            Our team is here to make your AVA MALL
            shopping experience extraordinary.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <a
              href="#contact-form"
              className="inline-flex items-center gap-3 rounded-full bg-amber-500 px-8 py-4 text-xs font-black tracking-widest text-black transition hover:bg-white"
            >
              SEND A MESSAGE
              <ArrowRight size={18} />
            </a>

            <a
              href="tel:+919876543210"
              className="inline-flex items-center gap-3 rounded-full border border-white/30 px-8 py-4 text-xs font-bold tracking-widest transition hover:bg-white hover:text-black"
            >
              <Phone size={16} />
              CALL US
            </a>

          </div>
        </div>
      </section>

      {/* CONTACT INFORMATION */}

      <section className="mx-auto max-w-full px-6 py-20 lg:px-10">

        <div className="mb-12 text-center">

          <p className="text-[10px] font-black tracking-[0.3em] text-amber-700">
            GET IN TOUCH
          </p>

          <h2 className="mt-4 text-4xl font-black sm:text-5xl">
            We'd Love to Hear From You.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-500">
            Reach out to our friendly team. Whether it's a
            shopping question or feedback, we're ready to help.
          </p>

        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {contactDetails.map((item) => {
            const Icon = item.icon;

            const content = (
              <div className="h-full rounded-2xl border border-gray-100 bg-white p-7 transition duration-300 hover:-translate-y-2 hover:border-amber-300 hover:shadow-xl">

                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-amber-50 text-amber-700 transition hover:bg-amber-500 hover:text-black">
                  <Icon size={26} />
                </div>

                <h3 className="mt-6 text-lg font-black">
                  {item.title}
                </h3>

                <p className="mt-3 break-words text-sm font-bold text-gray-800">
                  {item.detail}
                </p>

                <p className="mt-2 text-xs leading-6 text-gray-500">
                  {item.extra}
                </p>

                {item.link && (
                  <div className="mt-5 flex items-center gap-2 text-xs font-black text-amber-700">
                    CONTACT NOW
                    <ArrowRight size={15} />
                  </div>
                )}

              </div>
            );

            return item.link ? (
              <a
                key={item.title}
                href={item.link}
                target={
                  item.link.startsWith("https")
                    ? "_blank"
                    : undefined
                }
                rel={
                  item.link.startsWith("https")
                    ? "noreferrer"
                    : undefined
                }
                className="block"
              >
                {content}
              </a>
            ) : (
              <div key={item.title}>
                {content}
              </div>
            );
          })}

        </div>
      </section>

      {/* FORM AND SIDE PANEL */}

      <section className="bg-white px-6 py-20">

        <div className="mx-auto grid max-w-full gap-12 lg:grid-cols-2 lg:gap-20">

          {/* LEFT INFORMATION */}

          <div className="flex flex-col justify-center">

            <p className="text-[10px] font-black tracking-[0.3em] text-amber-700">
              CONTACT OUR TEAM
            </p>

            <h2 className="mt-5 text-4xl font-black leading-tight sm:text-5xl">
              Your Experience
              <br />
              <span className="font-serif font-normal italic text-amber-600">
                Matters to Us.
              </span>
            </h2>

            <p className="mt-7 max-w-lg text-sm leading-8 text-gray-500">
              At AVA MALL, we believe great shopping begins
              with great service. Tell us what you need and
              we'll do our best to help you.
            </p>

            <div className="mt-10 space-y-7">

              {supportFeatures.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.title} className="flex gap-5">

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#faf3e5] text-amber-700">
                      <Icon size={23} />
                    </div>

                    <div>
                      <h3 className="font-black">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-gray-500">
                        {item.text}
                      </p>
                    </div>

                  </div>
                );
              })}

            </div>

            {/* SOCIAL LINKS */}

            <div className="mt-12 border-t border-gray-100 pt-8">

              <p className="text-xs font-black tracking-widest">
                CONNECT WITH AVA MALL
              </p>

              <div className="mt-5 flex gap-3">

                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-950 text-white transition hover:bg-amber-500 hover:text-black"
                >
                  <Camera size={20} />
                </a>

                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-950 text-white transition hover:bg-amber-500 hover:text-black"
                >
                  <Users size={20} />
                </a>

                <a
                  href="mailto:support@avamall.com"
                  aria-label="Email"
                  className="flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-950 text-white transition hover:bg-amber-500 hover:text-black"
                >
                  <Mail size={20} />
                </a>

              </div>
            </div>

          </div>

          {/* CONTACT FORM */}

          <div
            id="contact-form"
            className="rounded-[28px] border border-gray-100 bg-[#faf9f6] p-7 shadow-sm sm:p-10"
          >

            <div className="mb-8">

              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-neutral-950 text-amber-400">
                <Send size={25} />
              </div>

              <h2 className="mt-6 text-3xl font-black">
                Send Us a Message
              </h2>

              <p className="mt-3 text-sm text-gray-500">
                Fill in your details and let us know how we can help.
              </p>

            </div>

            {submitted && (
              <div
                role="status"
                className="mb-7 flex items-start gap-3 rounded-xl border border-green-200 bg-green-50 p-5 text-green-800"
              >

                <CheckCircle size={22} className="mt-0.5 shrink-0" />

                <div>
                  <h3 className="font-black">
                    Thank you for contacting us!
                  </h3>

                  <p className="mt-1 text-sm">
                    Your demo message has been submitted successfully.
                  </p>
                </div>

              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">

              <div className="grid gap-5 sm:grid-cols-2">

                <div>
                  <label className="mb-2 block text-xs font-black">
                    YOUR NAME *
                  </label>

                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    type="text"
                    required
                    placeholder="Enter your name"
                    className="w-full rounded-xl border border-gray-200 bg-white px-5 py-4 text-sm outline-none transition focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs font-black">
                    EMAIL ADDRESS *
                  </label>

                  <input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    type="email"
                    required
                    placeholder="Enter your email"
                    className="w-full rounded-xl border border-gray-200 bg-white px-5 py-4 text-sm outline-none transition focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10"
                  />
                </div>

              </div>

              <div className="grid gap-5 sm:grid-cols-2">

                <div>
                  <label className="mb-2 block text-xs font-black">
                    PHONE NUMBER
                  </label>

                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    type="tel"
                    placeholder="+91 98765 43210"
                    className="w-full rounded-xl border border-gray-200 bg-white px-5 py-4 text-sm outline-none transition focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs font-black">
                    SUBJECT *
                  </label>

                  <select
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-gray-200 bg-white px-5 py-4 text-sm outline-none transition focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10"
                  >
                    <option value="">Select a subject</option>
                    <option value="General Enquiry">General Enquiry</option>
                    <option value="Store Information">Store Information</option>
                    <option value="Shopping Support">Shopping Support</option>
                    <option value="Offers & Discounts">Offers & Discounts</option>
                    <option value="Feedback">Feedback</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

              </div>

              <div>
                <label className="mb-2 block text-xs font-black">
                  YOUR MESSAGE *
                </label>

                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell us how we can help you..."
                  className="w-full resize-none rounded-xl border border-gray-200 bg-white px-5 py-4 text-sm outline-none transition focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-neutral-950 py-5 text-xs font-black tracking-widest text-white transition hover:bg-amber-500 hover:text-black disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "SENDING..." : "SEND MESSAGE"}
                <Send size={17} />
              </button>

              <p className="text-center text-[11px] leading-6 text-gray-400">
                By submitting this form, you agree to be contacted
                regarding your enquiry.
              </p>

            </form>
          </div>

        </div>
      </section>

      {/* LOCATION SECTION */}

      <section className="mx-auto max-w-full px-6 py-20 lg:px-10">

        <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">

          <div>
            <p className="text-[10px] font-black tracking-[0.3em] text-amber-700">
              FIND US HERE
            </p>

            <h2 className="mt-4 text-4xl font-black">
              Visit AVA MALL
            </h2>

            <p className="mt-3 text-sm text-gray-500">
              Come and enjoy an amazing shopping experience.
            </p>
          </div>

          <a
            href="https://www.google.com/maps/search/?api=1&query=shopping+mall+Madurai+Tamil+Nadu"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-neutral-950 px-7 py-4 text-xs font-black text-white transition hover:bg-amber-500 hover:text-black"
          >
            <Navigation size={17} />
            GET DIRECTIONS
          </a>

        </div>

        <div className="grid overflow-hidden rounded-[25px] border border-gray-100 bg-white shadow-lg lg:grid-cols-2">

          <div className="relative min-h-[320px]">

            <iframe
              title="Map showing Madurai, Tamil Nadu"
              src="https://maps.google.com/maps?q=Madurai%2C%20Tamil%20Nadu%2C%20India&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "320px" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

          </div>

          <div className="flex flex-col justify-center p-9 sm:p-12">

            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-amber-50 text-amber-700">
              <MapPin size={27} />
            </div>

            <h3 className="mt-7 text-2xl font-black">
              AVA MALL
            </h3>

            <p className="mt-4 text-sm leading-8 text-gray-500">
              Madurai,
              <br />
              Tamil Nadu,
              <br />
              India.
            </p>

            <div className="mt-7 flex items-center gap-3 border-t border-gray-100 pt-6">
              <Globe size={20} className="text-amber-600" />

              <span className="text-sm font-bold">
                Open Every Day · 10 AM – 10 PM
              </span>
            </div>

          </div>

        </div>
      </section>

      {/* FINAL CTA */}

      <section className="bg-[#11100e] px-6 py-20 text-center text-white">

        <p className="text-[10px] font-black tracking-[0.3em] text-amber-400">
          WE'RE JUST A MESSAGE AWAY
        </p>

        <h2 className="mt-5 text-4xl font-black sm:text-5xl">
          Let's Make Shopping
          <br />
          <span className="font-serif font-normal italic text-amber-400">
            More Extraordinary.
          </span>
        </h2>

        <a
          href="mailto:support@avamall.com"
          className="mt-9 inline-flex items-center gap-3 rounded-full bg-amber-500 px-9 py-4 text-xs font-black tracking-widest text-black transition hover:bg-white"
        >
          EMAIL OUR TEAM
          <ArrowRight size={18} />
        </a>

      </section>

    </main>
  );
}
