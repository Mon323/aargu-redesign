import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowUpRight, ArrowRight, Sparkles, Target, Users, Zap, CheckCircle2,
} from "lucide-react";
import { ALL_SERVICES } from "@/lib/services";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aargu — Your Inner Circle for Digital Growth" },
      { name: "description", content: "Full-service digital marketing agency with 20+ years in ecommerce. SEO, content, PPC, CRO and web development that drives real results." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-60" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-radial)" }} />
        <div className="container-page relative pb-24 pt-20 md:pb-32 md:pt-28">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-elevated px-3 py-1 text-xs font-medium text-muted-foreground">
                <Sparkles className="h-3.5 w-3.5 text-accent" /> At AARGU · 20+ years in ecommerce
              </div>
              <h1 className="mt-6 text-balance text-5xl md:text-7xl">
                Your dream,<br />our <em className="italic text-accent">devotion.</em>
              </h1>
              <p className="mt-6 max-w-xl text-lg text-muted-foreground">
                We work as your inner circle — becoming part of your mission with the same
                dedication and accountability as an in-house team.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/services" className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition hover:opacity-90">
                  Our Services <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link to="/contact" className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface-elevated px-6 py-3 text-sm font-medium transition hover:border-foreground">
                  Book a call <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-accent" /> Senior-only team</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-accent" /> Transparent reporting</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-accent" /> No long-term lock-in</div>
              </div>
            </div>

            <div className="relative">
              <div className="relative mx-auto aspect-square w-full max-w-md">
                <div className="absolute inset-0 rounded-3xl bg-foreground/5 blur-3xl" />
                <div className="relative grid h-full grid-cols-6 grid-rows-6 gap-3">
                  <div className="col-span-4 row-span-3 rounded-2xl border border-border bg-surface-elevated p-5 shadow-soft">
                    <p className="text-xs uppercase tracking-widest text-muted-foreground">Organic traffic</p>
                    <p className="mt-2 font-display text-4xl">+312%</p>
                    <div className="mt-3 h-16 w-full rounded-lg" style={{ background: "var(--gradient-accent)", opacity: 0.85 }} />
                  </div>
                  <div className="col-span-2 row-span-3 rounded-2xl border border-border bg-foreground p-5 text-background">
                    <Target className="h-5 w-5 text-accent" />
                    <p className="mt-6 text-xs uppercase tracking-widest opacity-60">ROAS</p>
                    <p className="mt-1 font-display text-3xl">8.4x</p>
                  </div>
                  <div className="col-span-3 row-span-3 rounded-2xl border border-border bg-surface-elevated p-5">
                    <Users className="h-5 w-5 text-accent" />
                    <p className="mt-4 text-xs uppercase tracking-widest text-muted-foreground">Brands scaled</p>
                    <p className="mt-1 font-display text-3xl">120+</p>
                  </div>
                  <div className="col-span-3 row-span-3 rounded-2xl border border-border bg-surface-elevated p-5">
                    <Zap className="h-5 w-5 text-accent" />
                    <p className="mt-4 text-xs uppercase tracking-widest text-muted-foreground">Avg. payback</p>
                    <p className="mt-1 font-display text-3xl">90 days</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="container-page py-24">
        <div className="flex flex-col items-end justify-between gap-6 md:flex-row">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">Our services</p>
            <h2 className="mt-3 text-4xl md:text-5xl">A full suite to grow your brand online.</h2>
            <p className="mt-4 text-muted-foreground">
              From SEO and paid ads to content and strategy, we help you connect with your
              audience and drive real results — backed by 20+ years of ecommerce experience.
            </p>
          </div>
          <Link to="/services" className="inline-flex shrink-0 items-center gap-1.5 text-sm font-medium hover:text-accent">
            View all services <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ALL_SERVICES.slice(0, 9).map((s) => {
            const Icon = s.icon;
            return (
              <Link
                key={s.slug}
                to={"/services/$slug" as never}
                params={{ slug: s.slug } as never}
                className="group relative overflow-hidden rounded-2xl border border-border bg-surface-elevated p-6 transition hover:border-foreground/40 hover:shadow-soft"
              >
                <div className="flex items-start justify-between">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-secondary text-foreground transition group-hover:bg-foreground group-hover:text-background">
                    <Icon className="h-5 w-5" />
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground transition group-hover:text-accent" />
                </div>
                <h3 className="mt-6 text-2xl">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.blurb}</p>
              </Link>
            );
          })}
        </div>
      </section>

      {/* SEO BAND */}
      <section className="container-page">
        <div className="relative overflow-hidden rounded-3xl bg-foreground p-10 text-background md:p-16">
          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full" style={{ background: "var(--gradient-accent)", filter: "blur(80px)", opacity: 0.5 }} />
          <div className="relative grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">SEO that compounds</p>
              <h2 className="mt-3 text-4xl md:text-5xl">Your business SEO solution.</h2>
              <p className="mt-4 max-w-md text-background/70">
                Powerful SEO that boosts visibility and drives organic growth. Rank higher,
                reach the right audience, and build a moat competitors can't buy.
              </p>
              <Link to={"/services/$slug" as never} params={{ slug: "seo" } as never} className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition hover:opacity-90">
                Learn more <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <p className="text-sm text-background/60">Free SEO score</p>
              <p className="mt-1 font-display text-2xl">Test your website in 60 seconds</p>
              <form className="mt-5 space-y-3">
                <input className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-sm placeholder:text-background/40 focus:border-accent focus:outline-none" placeholder="Your name" />
                <input className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-sm placeholder:text-background/40 focus:border-accent focus:outline-none" placeholder="Email address" />
                <input className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-sm placeholder:text-background/40 focus:border-accent focus:outline-none" placeholder="Website URL" />
                <button type="button" className="inline-flex w-full items-center justify-center gap-1.5 rounded-lg bg-accent px-4 py-3 text-sm font-medium text-accent-foreground hover:opacity-90">
                  Get my score <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* WORK */}
      <section className="container-page py-24">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">Our latest projects</p>
          <h2 className="mt-3 text-4xl md:text-5xl">Brands we've helped scale.</h2>
          <p className="mt-4 text-muted-foreground">
            Every project we take on is built around one thing: growth. Smart strategy,
            powerful visuals, and digital marketing that gets noticed.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3 lg:grid-cols-5">
          {["Boscia", "Bosch", "Easton", "Jouer", "Robin McGraw"].map((b) => (
            <div key={b} className="flex h-32 items-center justify-center bg-surface-elevated font-display text-2xl text-muted-foreground transition hover:bg-foreground hover:text-background">
              {b}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-page pb-24">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-surface-elevated p-10 md:p-20">
          <div className="absolute inset-0 grid-bg opacity-50" />
          <div className="relative max-w-3xl">
            <h2 className="text-balance text-5xl md:text-6xl">Let's work <em className="italic text-accent">together.</em></h2>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Your growth is our mission. Whether you're building a brand, scaling fast, or
              breaking into new markets — there's no limit to how far we can go together.
            </p>
            <Link to="/contact" className="mt-8 inline-flex items-center gap-1.5 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition hover:opacity-90">
              Start the conversation <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
