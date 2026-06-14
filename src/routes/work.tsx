import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, TrendingUp } from "lucide-react";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Our Work — Aargu" },
      { name: "description", content: "A look at the brands we've helped scale through SEO, paid media, content and conversion work." },
    ],
  }),
  component: Work,
});

const projects = [
  { brand: "Boscia", category: "Beauty · Ecommerce", metric: "+212% organic revenue", note: "Replatformed and rebuilt topical authority across skincare." },
  { brand: "Bosch", category: "Industrial · Lead Gen", metric: "3.1x qualified pipeline", note: "Programmatic SEO and paid search across 8 EU markets." },
  { brand: "Easton", category: "Sports · DTC", metric: "+184% direct sales", note: "Full-funnel paid social with creative iteration cadence." },
  { brand: "Jouer", category: "Beauty · Ecommerce", metric: "+96% email revenue", note: "Klaviyo lifecycle rebuild with segmentation overhaul." },
  { brand: "Robin McGraw", category: "Personal Brand · Ecom", metric: "Top-3 for hero terms", note: "SEO + content engine launching new product lines." },
  { brand: "Confidential SaaS", category: "B2B · Series B", metric: "60% lower CAC", note: "PPC restructure and landing page testing program." },
];

function Work() {
  return (
    <>
      <section className="border-b border-border bg-surface">
        <div className="container-page py-20 md:py-28">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">Our work</p>
          <h1 className="mt-4 max-w-3xl text-balance text-5xl md:text-7xl">
            Brands we've helped <em className="italic text-accent">scale.</em>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Every project we take on is built around one thing: growth. Smart strategy,
            powerful visuals, and digital marketing that gets noticed.
          </p>
        </div>
      </section>

      <section className="container-page py-20">
        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((p) => (
            <article key={p.brand} className="group relative overflow-hidden rounded-3xl border border-border bg-surface-elevated p-8 transition hover:border-foreground/40">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">{p.category}</p>
                  <h2 className="mt-2 font-display text-4xl">{p.brand}</h2>
                </div>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground transition group-hover:text-accent" />
              </div>
              <div className="mt-8 flex items-center gap-3 rounded-xl bg-foreground px-4 py-3 text-background">
                <TrendingUp className="h-4 w-4 text-accent" />
                <p className="text-sm font-medium">{p.metric}</p>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">{p.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container-page pb-24">
        <div className="rounded-3xl border border-border bg-surface-elevated p-10 text-center md:p-16">
          <h2 className="text-balance text-4xl md:text-5xl">Want to be the next case study?</h2>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-1.5 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background hover:opacity-90">
            Let's talk <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
