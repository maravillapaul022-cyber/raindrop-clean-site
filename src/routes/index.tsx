import { createFileRoute } from "@tanstack/react-router";
import logoAsset from "@assets/raindrop-logo.png";
import { useState } from "react";
import {
  Phone,
  Menu,
  X,
  Star,
  Droplets,
  Home,
  Building2,
  Wrench,
  SprayCan,
  ShieldCheck,
  Users,
  Clock,
  MapPin,
  Mail,
  Facebook,
  Instagram,
  ArrowRight,
  Check,
} from "lucide-react";


export const Route = createFileRoute("/")({
  component: Landing,
  head: () => ({
    meta: [
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Raindrop Window Cleaning",
          image: "",
          telephone: "+1-587-985-1020",
          address: {
            "@type": "PostalAddress",
            streetAddress: "10824 19B Ave NW",
            addressLocality: "Edmonton",
            addressRegion: "AB",
            postalCode: "T6J 6N8",
            addressCountry: "CA",
          },
          areaServed: "Edmonton, AB",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "5.0",
            reviewCount: "26",
          },
        }),
      },
    ],
  }),
});

const PHONE = "1 (587) 985-1020";
const PHONE_TEL = "+15879851020";

const NAV = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

function Logo({ className = "" }: { className?: string }) {
  return (
    <a href="#top" className={`inline-flex items-center ${className}`}>
      <img
        src={logoAsset.url}
        alt="Raindrop Window Cleaning"
        className="h-11 w-auto object-contain"
      />
    </a>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 md:px-8">
        <Logo />
        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <a
            href={`tel:${PHONE_TEL}`}
            className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
          >
            <Phone className="h-4 w-4" /> {PHONE}
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 rounded-full gradient-hero px-4 py-2 text-sm font-semibold text-white shadow-soft transition-transform hover:-translate-y-0.5"
          >
            Free Estimate <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <button
          onClick={() => setOpen((s) => !s)}
          className="grid h-10 w-10 place-items-center rounded-md border border-border md:hidden"
          aria-label="Menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-3">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-foreground hover:bg-secondary"
              >
                {n.label}
              </a>
            ))}
            <div className="mt-2 grid grid-cols-2 gap-2">
              <a
                href={`tel:${PHONE_TEL}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-3 py-2.5 text-sm font-semibold"
              >
                <Phone className="h-4 w-4" /> Call
              </a>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center rounded-full gradient-hero px-3 py-2.5 text-sm font-semibold text-white"
              >
                Free Estimate
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function Stars({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-0.5 ${className}`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
      ))}
    </div>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden gradient-sky">
      {/* subtle ripple accents */}
      <div className="pointer-events-none absolute -left-24 top-24 h-64 w-64 rounded-full border border-primary/15 animate-ripple" />
      <div className="pointer-events-none absolute right-10 bottom-24 h-40 w-40 rounded-full border border-primary/15 animate-ripple [animation-delay:1.2s]" />

      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-5 pb-24 pt-16 md:px-8 md:pb-32 md:pt-24 lg:flex-row lg:items-center">
        <div className="flex-1 text-foreground">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium shadow-soft">
            <Stars />
            <span className="text-muted-foreground">5.0 from 26 Google reviews</span>
          </div>
          <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-[64px]">
            Edmonton's Trusted <br className="hidden sm:block" />
            <span className="text-gradient">Window Cleaning</span>{" "}
            Experts.
          </h1>
          <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
            Residential and commercial window cleaning done right —
            spot-free with our water-fed pole system, safe and thorough on
            everything from bungalows to 6-storey buildings.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full gradient-hero px-6 py-3.5 text-sm font-semibold text-white shadow-glass transition-transform hover:-translate-y-0.5"
            >
              Get a Free Estimate <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-semibold text-foreground shadow-soft transition-colors hover:bg-secondary"
            >
              <Phone className="h-4 w-4" /> {PHONE}
            </a>
          </div>

          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-4 border-t border-border pt-6">
            <div>
              <dt className="text-xs uppercase tracking-widest text-muted-foreground">Since</dt>
              <dd className="mt-1 font-display text-2xl font-bold text-foreground">2016</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest text-muted-foreground">Rating</dt>
              <dd className="mt-1 font-display text-2xl font-bold text-foreground">5.0★</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest text-muted-foreground">Purity</dt>
              <dd className="mt-1 font-display text-2xl font-bold text-foreground">0 ppm</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="mx-auto max-w-4xl scroll-mt-20 px-5 py-20 md:px-8 md:py-28">
      <div className="text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          About Us
        </span>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
          A family-run business,{" "}
          <span className="text-gradient">obsessed with clear glass.</span>
        </h2>
        <p className="mt-6 text-base leading-relaxed text-muted-foreground">
          Raindrop Window Cleaning was founded in 2016 by Julian and Trish.
          Julian handles the windows and gutters; Trish runs the office and
          lends a hand on jobs when things get busy. We're friendly,
          professional, reliable, honest, and (a bit obsessively)
          detail-oriented.
        </p>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          We use a specialized water-fed pole system that filters tap water
          down to <strong className="text-foreground">0 ppm</strong> — no
          minerals, no spots, no streaks. For the trickier spots we still
          reach for classic ladders and squeegees, the way it's always been
          done right.
        </p>
        <ul className="mx-auto mt-8 grid max-w-2xl gap-3 text-left sm:grid-cols-2">
          {[
            "Family-owned since 2016",
            "Fully insured & safety-certified",
            "Spot-free 0 ppm filtration",
            "Residential & commercial",
          ].map((f) => (
            <li key={f} className="flex items-start gap-2 text-sm font-medium">
              <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                <Check className="h-3.5 w-3.5" />
              </span>
              {f}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const SERVICES = [
  {
    icon: Home,
    title: "Residential Window Cleaning",
    desc: "Interior and exterior windows, screens, and tracks — leaving your home bright and streak-free.",
  },
  {
    icon: Building2,
    title: "Commercial Window Cleaning",
    desc: "Offices, storefronts, and multi-unit buildings up to 6 stories. Scheduled or one-time service.",
  },
  {
    icon: Wrench,
    title: "Gutter Cleaning",
    desc: "Full hand-removal of leaves and debris, plus a flush to keep water flowing where it should.",
  },
  {
    icon: SprayCan,
    title: "Power Washing",
    desc: "Driveways, siding, decks, and patios refreshed with the right pressure for the right surface.",
  },
];

function Services() {
  return (
    <section id="services" className="scroll-mt-20 gradient-sky py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Services
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            Everything to keep your property{" "}
            <span className="text-gradient">crystal clear.</span>
          </h2>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s) => (
            <div
              key={s.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-soft transition-transform hover:-translate-y-1"
            >
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary/5 transition-all group-hover:scale-125" />
              <span className="relative grid h-12 w-12 place-items-center rounded-xl gradient-hero text-white shadow-soft">
                <s.icon className="h-6 w-6" />
              </span>
              <h3 className="relative mt-5 text-lg font-bold">{s.title}</h3>
              <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import galleryInterior from "@/assets/gallery-interior.webp";
import galleryCommercial from "@/assets/gallery-commercial.jpg";
import galleryVanOld from "@/assets/gallery-van-old.jpg";
import galleryVanBranded from "@/assets/gallery-van-branded.jpg";

const GALLERY = [
  {
    label: "Interior Windows",
    span: "sm:row-span-2",
    src: galleryInterior.url,
  },
  {
    label: "Commercial Building",
    span: "",
    src: galleryCommercial.url,
  },
  {
    label: "On the Road",
    span: "",
    src: galleryVanOld.url,
  },
  {
    label: "Raindrop Van",
    span: "sm:row-span-2",
    src: galleryVanBranded.url,
  },
];

function Gallery() {
  return (
    <section id="gallery" className="mx-auto max-w-7xl scroll-mt-20 px-5 py-20 md:px-8 md:py-28">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Our Work
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            On the job across Edmonton.
          </h2>
        </div>
        <a
          href="#contact"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
        >
          Book your job <ArrowRight className="h-4 w-4" />
        </a>
      </div>

      <div className="mt-10 grid auto-rows-[200px] grid-cols-2 gap-3 sm:auto-rows-[240px] md:gap-4">
        {GALLERY.map((g, i) => (
          <div
            key={i}
            className={`group relative overflow-hidden rounded-2xl border border-border bg-secondary shadow-soft ${g.span}`}
          >
            <img
              src={g.src}
              alt={g.label}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <span className="absolute bottom-3 left-4 text-sm font-semibold text-white drop-shadow">
              {g.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

const REASONS = [
  {
    icon: Droplets,
    title: "Spot-free 0 ppm water",
    desc: "Our filtered water leaves no minerals behind — glass dries perfectly clear, every time.",
  },
  {
    icon: ShieldCheck,
    title: "Safety-certified at height",
    desc: "Rope, harness, and ladder work performed by trained, insured pros on buildings up to 6 stories.",
  },
  {
    icon: Users,
    title: "Family-owned & personal",
    desc: "You'll deal directly with Julian and Trish — no call centres, no rotating crews.",
  },
  {
    icon: Clock,
    title: "Fast & easy to book",
    desc: "Reply-in-hours quotes, straightforward pricing, and reliable arrival windows.",
  },
];

function Why() {
  return (
    <section className="relative overflow-hidden bg-[oklch(0.15_0.05_255)] py-20 text-white md:py-28">
      <div className="pointer-events-none absolute inset-0 opacity-40" style={{ background: "radial-gradient(600px circle at 20% 20%, oklch(0.55 0.17 245 / 0.4), transparent), radial-gradient(500px circle at 80% 80%, oklch(0.6 0.15 220 / 0.35), transparent)" }} />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[oklch(0.82_0.12_230)]">
            Why Raindrop
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            Cleaner glass. Zero fuss.
          </h2>
          <p className="mt-4 text-white/70">
            We're small on purpose — so every job gets our full attention and the
            same standards we'd want on our own home.
          </p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {REASONS.map((r) => (
            <div
              key={r.title}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur transition-colors hover:bg-white/[0.08]"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-white/10 text-[oklch(0.86_0.12_220)]">
                <r.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-base font-bold">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                {r.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const REVIEWS = [
  {
    quote:
      "Julian was quick to respond, easy to book, and did excellent work on our exterior windows.",
    name: "Hilda L.",
    tag: "Local Guide",
  },
  {
    quote:
      "Highly recommend — quality work, professional, reasonable rates, and easy to communicate with.",
    name: "Rebecca N.",
    tag: "Google Review",
  },
  {
    quote:
      "Squeezed in a gutter cleaning last-minute and did such a great job we had him do the windows too.",
    name: "Brendan M.",
    tag: "Local Guide",
  },
  {
    quote:
      "Thorough and professional — our windows have never looked better, and the gutters were a mess before he tackled them.",
    name: "Kelsey S.",
    tag: "Local Guide",
  },
];

function Reviews() {
  return (
    <section id="reviews" className="mx-auto max-w-7xl scroll-mt-20 px-5 py-20 md:px-8 md:py-28">
      <div className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:items-start lg:gap-16">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Reviews
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            5.0 stars, <br />
            26 reasons.
          </h2>
          <div className="mt-6 flex items-center gap-3">
            <div className="font-display text-5xl font-extrabold text-gradient">5.0</div>
            <div>
              <Stars />
              <div className="mt-1 text-xs text-muted-foreground">
                Based on 26 Google reviews
              </div>
            </div>
          </div>
          <p className="mt-6 max-w-md text-sm text-muted-foreground">
            We're proud to have earned a perfect rating from our Edmonton
            customers — homeowners, condo boards, and business owners.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {REVIEWS.map((r) => (
            <figure
              key={r.name}
              className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-soft"
            >
              <Stars />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground">
                "{r.quote}"
              </blockquote>
              <figcaption className="mt-6 flex items-center justify-between border-t border-border pt-4">
                <span className="text-sm font-semibold">{r.name}</span>
                <span className="text-xs text-muted-foreground">{r.tag}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="scroll-mt-20 gradient-sky py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Free Estimate
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
              Get a quote in{" "}
              <span className="text-gradient">under 24 hours.</span>
            </h2>
            <p className="mt-4 max-w-md text-muted-foreground">
              Tell us about your property and what you need cleaned. We'll get
              back to you fast with a straightforward quote.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href={`tel:${PHONE_TEL}`}
                className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4 shadow-soft transition-transform hover:-translate-y-0.5"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl gradient-hero text-white">
                  <Phone className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">Call us</div>
                  <div className="truncate font-semibold">{PHONE}</div>
                </div>
              </a>
              <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4 shadow-soft">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                  <MapPin className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">Visit</div>
                  <div className="text-sm font-semibold">10824 19B Ave NW, Edmonton, AB T6J 6N8</div>
                </div>
              </div>
              <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4 shadow-soft">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                  <Clock className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">Hours</div>
                  <div className="text-sm font-semibold">Mon – Sat · Closes 5:30 PM</div>
                </div>
              </div>
            </div>

            <div className="mt-6 overflow-hidden rounded-2xl border border-border shadow-soft">
              <iframe
                title="Raindrop Window Cleaning location"
                src="https://www.google.com/maps?q=10824+19B+Ave+NW+Edmonton+AB&output=embed"
                width="100%"
                height="240"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block"
              />
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="rounded-3xl border border-border bg-card p-6 shadow-glass md:p-8"
          >
            {sent ? (
              <div className="flex h-full min-h-[400px] flex-col items-center justify-center text-center">
                <span className="grid h-14 w-14 place-items-center rounded-full gradient-hero text-white">
                  <Check className="h-7 w-7" />
                </span>
                <h3 className="mt-5 text-xl font-bold">Thanks — we'll be in touch!</h3>
                <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                  We'll get back to you with a quote shortly. For urgent jobs,
                  give us a call at {PHONE}.
                </p>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-bold">Request an estimate</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  No pressure, no obligation.
                </p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <Field label="Name" name="name" required />
                  <Field label="Phone" name="phone" type="tel" required />
                  <div className="sm:col-span-2">
                    <Field label="Email" name="email" type="email" required />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      Service needed
                    </label>
                    <select
                      name="service"
                      className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-ring/30"
                      defaultValue=""
                    >
                      <option value="" disabled>Choose a service…</option>
                      <option>Residential window cleaning</option>
                      <option>Commercial window cleaning</option>
                      <option>Gutter cleaning</option>
                      <option>Power washing</option>
                      <option>Multiple / not sure</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      maxLength={1000}
                      className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-ring/30"
                      placeholder="Property type, number of stories, anything else we should know…"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full gradient-hero px-6 py-3.5 text-sm font-semibold text-white shadow-soft transition-transform hover:-translate-y-0.5"
                >
                  Send request <ArrowRight className="h-4 w-4" />
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        maxLength={255}
        className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-ring/30"
      />
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-[oklch(0.13_0.04_255)] text-white/80">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-4 md:px-8">
        <div className="md:col-span-2">
          <Logo className="[&_span:first-child]:!text-white [&_.text-foreground]:!text-white" />
          <p className="mt-4 max-w-sm text-sm text-white/60">
            Family-owned window cleaning, gutter cleaning, and power washing
            serving Edmonton and surrounding areas since 2016.
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href="https://www.facebook.com/"
              aria-label="Facebook"
              className="grid h-10 w-10 place-items-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href="https://instagram.com/raindrop_window_cleaning"
              aria-label="Instagram"
              className="grid h-10 w-10 place-items-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
            >
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div>
          <div className="text-xs font-semibold uppercase tracking-widest text-white/50">Contact</div>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0" />
              <a href={`tel:${PHONE_TEL}`}>{PHONE}</a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
              <span>10824 19B Ave NW,<br />Edmonton, AB T6J 6N8</span>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 shrink-0" />
              <a href="mailto:raindrop.w.cleaning@gmail.com" className="break-all hover:text-white">raindrop.w.cleaning@gmail.com</a>
            </li>
          </ul>
        </div>
        <div>
          <div className="text-xs font-semibold uppercase tracking-widest text-white/50">Services</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="#services" className="hover:text-white">Residential windows</a></li>
            <li><a href="#services" className="hover:text-white">Commercial windows</a></li>
            <li><a href="#services" className="hover:text-white">Gutter cleaning</a></li>
            <li><a href="#services" className="hover:text-white">Power washing</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-5 text-xs text-white/50 md:flex-row md:px-8">
          <span>© {new Date().getFullYear()} Raindrop Window Cleaning. All rights reserved.</span>
          <span>Serving Edmonton, AB and surrounding areas.</span>
        </div>
      </div>
    </footer>
  );
}

function Landing() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Why />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
