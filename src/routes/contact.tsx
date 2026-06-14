import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Aargu" },
      { name: "description", content: "Tell us about your goals. We'll come back with a sharp plan within 48 hours." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <section className="border-b border-border bg-surface">
        <div className="container-page py-20 md:py-28">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">Contact</p>
          <h1 className="mt-4 max-w-3xl text-balance text-5xl md:text-7xl">
            Let's <em className="italic text-accent">work</em> together.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Your growth is our mission. Drop a few details and we'll come back within 48 hours
            with an honest read on where to focus first.
          </p>
        </div>
      </section>

      <section className="container-page py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div className="space-y-6">
            {[
              { Icon: Mail, label: "Email", value: "hello@aargu.com" },
              { Icon: Phone, label: "Phone", value: "+1 (555) 010-0420" },
              { Icon: MapPin, label: "Studio", value: "Los Angeles · Remote-first" },
            ].map(({ Icon, label, value }) => (
              <div key={label} className="flex items-start gap-4 rounded-2xl border border-border bg-surface-elevated p-5">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-foreground text-background">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">{label}</p>
                  <p className="mt-1 font-medium">{value}</p>
                </div>
              </div>
            ))}
            <div className="rounded-2xl border border-border bg-foreground p-6 text-background">
              <p className="font-display text-2xl">48-hour reply.</p>
              <p className="mt-2 text-sm text-background/70">
                A senior strategist reads every inquiry — no SDR funnel, no scripted call.
              </p>
            </div>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="rounded-3xl border border-border bg-surface-elevated p-8 md:p-10"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Your name" placeholder="Jane Doe" />
              <Field label="Email" type="email" placeholder="jane@brand.com" />
              <Field label="Company" placeholder="Brand, Inc." />
              <Field label="Website" placeholder="brand.com" />
            </div>
            <div className="mt-5">
              <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">What are you trying to grow?</label>
              <textarea rows={5} placeholder="Tell us about your goals, timeline and current stack…" className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:border-foreground focus:outline-none" />
            </div>
            <button className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background hover:opacity-90">
              Send inquiry <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

function Field({ label, type = "text", placeholder }: { label: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{label}</label>
      <input type={type} placeholder={placeholder} className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:border-foreground focus:outline-none" />
    </div>
  );
}
