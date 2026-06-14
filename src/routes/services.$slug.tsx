import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowUpRight, Check } from "lucide-react";
import { ALL_SERVICES } from "@/lib/services";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const svc = ALL_SERVICES.find((s) => s.slug === params.slug);
    if (!svc) throw notFound();
    return { svc };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.svc.title} — Aargu` },
          { name: "description", content: loaderData.svc.blurb },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <div className="container-page py-32 text-center">
      <h1 className="text-5xl">Service not found</h1>
      <Link to="/services" className="mt-6 inline-block text-accent">← All services</Link>
    </div>
  ),
  component: ServiceDetail,
});

function ServiceDetail() {
  const { svc } = Route.useLoaderData();
  const Icon = svc.icon;
  const related = ALL_SERVICES.filter((s) => s.slug !== svc.slug).slice(0, 3);

  return (
    <>
      <section className="border-b border-border bg-surface">
        <div className="container-page py-20 md:py-28">
          <Link to="/services" className="text-sm text-muted-foreground hover:text-foreground">← Services</Link>
          <div className="mt-6 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <div className="inline-grid h-14 w-14 place-items-center rounded-2xl bg-foreground text-background">
                <Icon className="h-6 w-6" />
              </div>
              <h1 className="mt-6 max-w-3xl text-balance text-5xl md:text-6xl">{svc.title}</h1>
              <p className="mt-5 max-w-2xl text-lg text-muted-foreground">{svc.blurb}</p>
            </div>
            <Link to="/contact" className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background hover:opacity-90">
              Start a project <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="container-page py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">What's included</p>
            <h2 className="mt-3 text-4xl">A focused engagement built around outcomes.</h2>
            <p className="mt-4 text-muted-foreground">
              We start with research, ship in 2-week sprints, and report on the metrics that
              actually move the business. No vanity dashboards.
            </p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {svc.bullets.map((b: string) => (
              <li key={b} className="flex items-start gap-3 rounded-xl border border-border bg-surface-elevated p-5">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <span className="text-sm font-medium">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container-page pb-20">
        <div className="rounded-3xl bg-foreground p-10 text-background md:p-16">
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { k: "01", t: "Discover", d: "We audit your stack, market and competitors to find the highest-leverage moves." },
              { k: "02", t: "Build", d: "Senior specialists execute in tight sprints with weekly check-ins." },
              { k: "03", t: "Scale", d: "We double down on what works and compound the wins month over month." },
            ].map((step) => (
              <div key={step.k}>
                <p className="font-display text-5xl text-accent">{step.k}</p>
                <h3 className="mt-3 text-2xl">{step.t}</h3>
                <p className="mt-2 text-sm text-background/70">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page pb-24">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="text-3xl">Related services</h2>
          <Link to="/services" className="text-sm text-muted-foreground hover:text-accent">All services →</Link>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {related.map((s) => {
            const I = s.icon;
            return (
              <Link key={s.slug} to={"/services/$slug" as never} params={{ slug: s.slug } as never} className="group rounded-2xl border border-border bg-surface-elevated p-6 hover:border-foreground/40">
                <I className="h-5 w-5 text-accent" />
                <h3 className="mt-4 text-xl">{s.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{s.blurb}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium group-hover:text-accent">
                  Read more <ArrowUpRight className="h-4 w-4" />
                </span>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}
