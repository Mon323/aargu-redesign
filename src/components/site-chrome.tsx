import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown, Menu, X, ArrowUpRight } from "lucide-react";

const services = [
  { title: "SEO", desc: "Rank higher, organically.", href: "/services/seo" },
  { title: "Ecommerce Marketing", desc: "Scale online stores.", href: "/services/ecommerce" },
  { title: "Content Marketing", desc: "Stories that convert.", href: "/services/content" },
  { title: "Pay Per Click", desc: "Profitable paid ads.", href: "/services/ppc" },
  { title: "Social Media", desc: "Build a real audience.", href: "/services/social" },
  { title: "Web & App Dev", desc: "Fast, modern builds.", href: "/services/web" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="container-page flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-display text-2xl tracking-tight">
          <span className="grid h-8 w-8 place-items-center rounded-md bg-foreground text-background font-sans text-sm font-bold">A</span>
          <span>aargu</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          <Link to="/" className="px-3 py-2 text-sm font-medium text-muted-foreground transition hover:text-foreground">Home</Link>
          <div className="group relative">
            <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-muted-foreground transition hover:text-foreground">
              Services <ChevronDown className="h-3.5 w-3.5" />
            </button>
            <div className="invisible absolute left-1/2 top-full -translate-x-1/2 pt-3 opacity-0 transition-all group-hover:visible group-hover:opacity-100">
              <div className="w-[560px] rounded-2xl border border-border bg-surface-elevated p-3 shadow-soft">
                <div className="grid grid-cols-2 gap-1">
                  {services.map((s) => (
                    <Link key={s.href} to={s.href} className="group/item rounded-xl p-3 transition hover:bg-secondary">
                      <div className="flex items-center justify-between">
                        <p className="font-semibold text-foreground">{s.title}</p>
                        <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 transition group-hover/item:opacity-100" />
                      </div>
                      <p className="mt-0.5 text-xs text-muted-foreground">{s.desc}</p>
                    </Link>
                  ))}
                </div>
                <Link to="/services" className="mt-2 flex items-center justify-between rounded-xl bg-foreground px-4 py-3 text-sm font-medium text-background">
                  Explore all services <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
          <Link to="/about" className="px-3 py-2 text-sm font-medium text-muted-foreground transition hover:text-foreground">About</Link>
          <Link to="/work" className="px-3 py-2 text-sm font-medium text-muted-foreground transition hover:text-foreground">Work</Link>
          <Link to="/contact" className="px-3 py-2 text-sm font-medium text-muted-foreground transition hover:text-foreground">Contact</Link>
        </nav>

        <div className="hidden md:block">
          <Link to="/contact" className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition hover:opacity-90">
            Start a project <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden" aria-label="Menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-surface-elevated md:hidden">
          <div className="container-page space-y-1 py-4">
            <Link to="/" onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2.5 text-sm font-medium hover:bg-secondary">Home</Link>
            <button onClick={() => setMobileServices(!mobileServices)} className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium hover:bg-secondary">
              Services <ChevronDown className={`h-4 w-4 transition ${mobileServices ? "rotate-180" : ""}`} />
            </button>
            {mobileServices && (
              <div className="ml-3 space-y-0.5 border-l border-border pl-3">
                {services.map((s) => (
                  <Link key={s.href} to={s.href} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground">
                    {s.title}
                  </Link>
                ))}
                <Link to="/services" onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2 text-sm font-medium text-accent">All services →</Link>
              </div>
            )}
            <Link to="/about" onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2.5 text-sm font-medium hover:bg-secondary">About</Link>
            <Link to="/work" onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2.5 text-sm font-medium hover:bg-secondary">Work</Link>
            <Link to="/contact" onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2.5 text-sm font-medium hover:bg-secondary">Contact</Link>
            <Link to="/contact" onClick={() => setOpen(false)} className="mt-2 flex items-center justify-center gap-1.5 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background">
              Start a project <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-border bg-surface">
      <div className="container-page py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 font-display text-2xl">
              <span className="grid h-8 w-8 place-items-center rounded-md bg-foreground text-background font-sans text-sm font-bold">A</span>
              <span>aargu</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              We become part of your mission, working with the same dedication and accountability as an in-house team.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Services</p>
            <ul className="mt-4 space-y-2 text-sm">
              {services.slice(0, 4).map((s) => (
                <li key={s.href}><Link to={s.href} className="text-foreground/80 hover:text-accent">{s.title}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Company</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/about" className="text-foreground/80 hover:text-accent">About</Link></li>
              <li><Link to="/work" className="text-foreground/80 hover:text-accent">Our Work</Link></li>
              <li><Link to="/contact" className="text-foreground/80 hover:text-accent">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Aargu. All rights reserved.</p>
          <p>Crafted with devotion · Your inner circle</p>
        </div>
      </div>
    </footer>
  );
}
