import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowUpRight, ArrowRight, Sparkles, Target, Users, Zap, CheckCircle2,
  TrendingUp, Globe2, BarChart3,
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

const LOGOS = ["Boscia", "Bosch", "Easton", "Jouer", "Robin McGraw", "Lumen", "Northstar", "Vellum"];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-60" />

        <div className="container-page relative pb-28 pt-24 md:pb-36 md:pt-32">
          <div className="grid items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <div className="inline-flex animate-fade-in items-center gap-2 rounded-full border border-border/80 bg-surface-elevated/70 px-3.5 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inset-0 animate-ping rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                </span>
                Taking on new partners · Q3 2026
              </div>
              <h1 className="mt-8 animate-fade-up text-balance text-6xl font-semibold md:text-8xl">
                Your dream,<br />
                <span className="text-gradient">our devotion.</span>
              </h1>
              <p className="mt-7 max-w-xl animate-fade-up text-lg leading-relaxed text-muted-foreground" style={{ animationDelay: "120ms" }}>
                Aargu is the inner circle for ambitious brands. We embed with your
                team — same dedication, same accountability, sharper execution.
              </p>
              <div className="mt-10 flex flex-wrap gap-3 animate-fade-up" style={{ animationDelay: "240ms" }}>
                <Link to="/services" className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background transition hover:shadow-glow">
                  Explore services
                  <ArrowUpRight className="h-4 w-4 transition group-hover:rotate-45" />
                </Link>
                <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-elevated/60 px-6 py-3.5 text-sm font-medium backdrop-blur transition hover:border-accent/60 hover:text-accent">
                  Book a 30-min call <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted-foreground animate-fade-up" style={{ animationDelay: "360ms" }}>
                <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-accent" /> Senior-only team</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-accent" /> Transparent reporting</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-accent" /> No lock-in</div>
              </div>
            </div>

            {/* BENTO */}
            <div className="relative animate-scale-in" style={{ animationDelay: "200ms" }}>
              <div className="relative grid aspect-square w-full grid-cols-6 grid-rows-6 gap-3">
                <div className="col-span-4 row-span-3 group relative overflow-hidden rounded-3xl border border-border/80 glass p-6 hover-lift">
                  <div className="flex items-center justify-between">
                    <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Organic traffic</p>
                    <TrendingUp className="h-4 w-4 text-accent" />
                  </div>
                  <p className="mt-3 font-display text-5xl font-semibold tracking-tight">+312%</p>
                  <div className="mt-4 flex h-16 items-end gap-1.5">
                    {[28, 42, 35, 58, 48, 72, 65, 88, 76, 95].map((h, i) => (
                      <div key={i} className="flex-1 rounded-sm bg-accent/40 transition group-hover:bg-accent" style={{ height: `${h}%` }} />
                    ))}
                  </div>
                </div>
                <div className="col-span-2 row-span-3 relative overflow-hidden rounded-3xl bg-accent p-5 text-accent-foreground hover-lift">
                  <Target className="h-5 w-5" />
                  <p className="mt-8 text-[10px] uppercase tracking-[0.18em] opacity-80">ROAS</p>
                  <p className="mt-1 font-display text-4xl font-semibold">8.4×</p>
                  <p className="mt-1 text-xs opacity-80">vs. 2.1× industry avg</p>
                </div>
                <div className="col-span-3 row-span-3 rounded-3xl border border-border/80 glass p-5 hover-lift">
                  <Users className="h-5 w-5 text-accent" />
                  <p className="mt-5 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Brands scaled</p>
                  <p className="mt-1 font-display text-4xl font-semibold">120+</p>
                </div>
                <div className="col-span-3 row-span-3 rounded-3xl border border-border/80 glass p-5 hover-lift">
                  <Zap className="h-5 w-5 text-accent" />
                  <p className="mt-5 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Avg. payback</p>
                  <p className="mt-1 font-display text-4xl font-semibold">90d</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* LOGO MARQUEE */}
        <div className="relative bg-ink py-7">
          <div className="flex overflow-hidden">
            <div className="flex shrink-0 items-center gap-16 px-8 marquee">
              {[...LOGOS, ...LOGOS].map((b, i) => (
                <span key={i} className="whitespace-nowrap font-display text-2xl font-medium text-ink-muted transition hover:text-ink-foreground">
                  {b}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="container-page py-28">
        <div className="flex flex-col items-end justify-between gap-6 md:flex-row">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              <Sparkles className="h-3.5 w-3.5" /> Our craft
            </p>
            <h2 className="mt-4 text-5xl font-semibold md:text-6xl">
              A full suite to grow<br />your brand <span className="text-gradient">online.</span>
            </h2>
            <p className="mt-5 max-w-lg text-muted-foreground">
              From SEO and paid media to content, CRO, and engineering — one team,
              one roadmap, one shared scoreboard.
            </p>
          </div>
          <Link to="/services" className="group inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-foreground hover:text-accent">
            View all services
            <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ALL_SERVICES.slice(0, 9).map((s, i) => {
            const Icon = s.icon;
            return (
              <Link
                key={s.slug}
                to={"/services/$slug" as never}
                params={{ slug: s.slug } as never}
                className="group relative overflow-hidden rounded-2xl border border-border/70 bg-card p-7 hover-lift hover:border-accent/40"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <div className="relative flex items-start justify-between">
                  <div className="grid h-12 w-12 place-items-center rounded-xl border border-border bg-surface text-foreground transition group-hover:border-accent/50 group-hover:bg-accent/10 group-hover:text-accent">
                    <Icon className="h-5 w-5" />
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground transition group-hover:rotate-45 group-hover:text-accent" />
                </div>
                <h3 className="relative mt-6 text-2xl font-semibold">{s.title}</h3>
                <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">{s.blurb}</p>
              </Link>
            );
          })}
        </div>
      </section>

      {/* SEO BAND */}
      <section className="container-page">
        <div className="relative overflow-hidden rounded-[2rem] bg-ink p-10 text-ink-foreground md:p-16">
          <div className="relative grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent-glow">
                <BarChart3 className="h-3.5 w-3.5" /> SEO that compounds
              </p>
              <h2 className="mt-4 text-5xl font-semibold md:text-6xl">
                Build a moat<br />competitors <span className="text-gradient">can't buy.</span>
              </h2>
              <p className="mt-5 max-w-md text-ink-muted">
                Powerful, technical SEO that grows visibility, captures intent,
                and converts. Long after the last ad runs.
              </p>
              <Link to={"/services/$slug" as never} params={{ slug: "seo" } as never} className="mt-7 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-medium text-accent-foreground transition hover:shadow-glow">
                Learn more <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="rounded-2xl bg-card p-7 text-foreground shadow-soft">
              <div className="flex items-center justify-between">
                <p className="text-sm text-muted-foreground">Free SEO audit</p>
                <Globe2 className="h-4 w-4 text-accent" />
              </div>
              <p className="mt-1 font-display text-2xl font-semibold">Test your website in 60 seconds</p>
              <form className="mt-6 space-y-3">
                <input className="w-full rounded-lg border border-border bg-surface/60 px-4 py-3 text-sm placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30" placeholder="Your name" />
                <input className="w-full rounded-lg border border-border bg-surface/60 px-4 py-3 text-sm placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30" placeholder="Email address" />
                <input className="w-full rounded-lg border border-border bg-surface/60 px-4 py-3 text-sm placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30" placeholder="https://yoursite.com" />
                <button type="button" className="inline-flex w-full items-center justify-center gap-1.5 rounded-lg bg-foreground px-4 py-3 text-sm font-medium text-background transition hover:opacity-90">
                  Get my score <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-page pb-28 pt-28">
        <div className="relative overflow-hidden rounded-[2rem] bg-ink p-12 text-ink-foreground md:p-20">
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="relative max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-glow">Let's build</p>
            <h2 className="mt-4 text-balance text-6xl font-semibold md:text-7xl">
              Your growth<br />is our <span className="text-gradient">mission.</span>
            </h2>
            <p className="mt-6 max-w-xl text-lg text-ink-muted">
              Whether you're scaling fast, breaking into new markets, or rebuilding
              your category — there's no limit to how far we can go together.
            </p>
            <Link to="/contact" className="mt-9 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-medium text-accent-foreground transition hover:shadow-glow">
              Start the conversation <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
