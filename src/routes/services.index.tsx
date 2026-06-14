import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { ALL_SERVICES } from "@/lib/services";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services — Aargu Digital Marketing Agency" },
      { name: "description", content: "SEO, ecommerce, content, PPC, CRO, social, web development and more. Explore Aargu's full suite of digital marketing services." },
    ],
  }),
  component: ServicesIndex,
});

function ServicesIndex() {
  return (
    <>
      <section className="border-b border-border bg-surface">
        <div className="container-page py-20 md:py-28">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">Services</p>
          <h1 className="mt-4 max-w-3xl text-balance text-5xl md:text-7xl">
            Everything you need to grow online — under one roof.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Twelve sharp disciplines. One senior team. Pick the services you need today, add
            more as you scale — without juggling agencies or onboarding a new vendor every quarter.
          </p>
        </div>
      </section>

      <section className="container-page py-20">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ALL_SERVICES.map((s) => {
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
                <h2 className="mt-6 text-2xl">{s.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{s.blurb}</p>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}
