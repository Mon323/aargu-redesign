import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Heart, Compass, Gauge, Lock } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Aargu" },
      { name: "description", content: "Aargu is a senior-only digital marketing team with 20+ years in ecommerce. We work as your inner circle." },
    ],
  }),
  component: About,
});

const values = [
  { icon: Heart, t: "Devotion", d: "Your goals become ours. We measure success by your growth, not by hours billed." },
  { icon: Compass, t: "Honesty", d: "Plain-language strategy and reporting. No jargon, no smoke, no vanity metrics." },
  { icon: Gauge, t: "Speed", d: "We ship in two-week sprints — small bets, fast feedback, compounding wins." },
  { icon: Lock, t: "Accountability", d: "Senior owners on every project. You always know who has the pen." },
];

function About() {
  return (
    <>
      <section className="border-b border-border bg-surface">
        <div className="container-page py-20 md:py-28">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">About Aargu</p>
          <h1 className="mt-4 max-w-4xl text-balance text-5xl md:text-7xl">
            We work as your <em className="italic text-accent">inner circle</em> — not just another vendor.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            For 20+ years we've helped ecommerce and growth-stage brands climb rankings, win
            new customers and build engines that compound. We embed deeply, move quickly, and
            treat your P&L like our own.
          </p>
        </div>
      </section>

      <section className="container-page py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-4xl md:text-5xl">A small, senior team — by design.</h2>
            <p className="mt-5 text-muted-foreground">
              Most agencies are pyramids: senior sales, junior delivery. We're flat. Every
              specialist who touches your account has 8+ years of experience in their craft and
              real receipts in your category.
            </p>
            <p className="mt-4 text-muted-foreground">
              That's how we move faster, decide better, and build things that keep paying
              after the engagement ends.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { n: "20+", l: "Years in ecommerce" },
              { n: "120+", l: "Brands scaled" },
              { n: "8.4x", l: "Average ROAS" },
              { n: "90d", l: "Median payback" },
            ].map((s) => (
              <div key={s.l} className="rounded-2xl border border-border bg-surface-elevated p-6">
                <p className="font-display text-5xl">{s.n}</p>
                <p className="mt-2 text-sm text-muted-foreground">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-20">
        <h2 className="text-4xl md:text-5xl">What we stand for.</h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <div key={v.t} className="rounded-2xl border border-border bg-surface-elevated p-6">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-foreground text-background">
                <v.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-2xl">{v.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page pb-24">
        <div className="rounded-3xl bg-ink p-10 text-ink-foreground md:p-16">
          <h2 className="max-w-2xl text-balance text-4xl md:text-5xl">Ready to bring us inside?</h2>
          <p className="mt-4 max-w-xl text-ink-muted">Tell us about your goals — we'll come back with a sharp, opinionated plan within 48 hours.</p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-1.5 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground hover:opacity-90">
            Start the conversation <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
