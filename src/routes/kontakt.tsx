import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt — Trexo Haljastus" },
      {
        name: "description",
        content:
          "Võtke meiega ühendust: telefon, e-post ja aadress. Trexo Haljastus Põlvamaal.",
      },
      { property: "og:title", content: "Kontakt — Trexo Haljastus" },
      {
        property: "og:description",
        content:
          "Võtke meiega ühendust: telefon, e-post ja aadress. Trexo Haljastus Põlvamaal.",
      },
    ],
  }),
  component: Kontakt,
});

function Kontakt() {
  return (
    <div>
      <section className="border-b border-border bg-secondary/30">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Kontakt
          </p>
          <h1 className="mt-2 max-w-2xl font-display text-4xl font-medium leading-tight sm:text-5xl">
            Võtke meiega ühendust
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            Kasvatame aedu ja ideid üheskoos.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 md:py-20">
        <div className="space-y-4">
          <ContactCard
            icon={Phone}
            title="Telefon"
            value="+372 56907208"
            href="tel:+37256907208"
            note="E–P 8–19.00"
          />
          <ContactCard
            icon={Mail}
            title="E-post"
            value="trex0gr0up1@gmail.com"
            href="mailto:trex0gr0up1@gmail.com"
            note="Vastame ühe tööpäeva jooksul"
          />
          <ContactCard
            icon={MapPin}
            title="Aadress"
            value="Põlva"
            note="Kontor ja laoplats"
          />
        </div>

        <div className="overflow-hidden rounded-2xl border border-border bg-secondary/40 p-8">
          <h2 className="font-display text-2xl font-semibold">
            Räägime teie aiast
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Teil on olemas mõte või plaan? Andke teada — aitame selle kujundada
            ja teostada. Hinnapakkumine on tasuta.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <ArrowRight className="h-4 w-4 text-primary" />
              Tutvumine ja nõustamine krundil
            </li>
            <li className="flex items-center gap-2">
              <ArrowRight className="h-4 w-4 text-primary" />
              Aiakujundusplaan ja eelarve
            </li>
            <li className="flex items-center gap-2">
              <ArrowRight className="h-4 w-4 text-primary" />
              Teostamine ja hooldus
            </li>
          </ul>
          <Link
            to="/hinnapakkumine"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
          >
            Küsi hinnapakkumist
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

function ContactCard({
  icon: Icon,
  title,
  value,
  href,
  note,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  value: string;
  href?: string;
  note?: string;
}) {
  return (
    <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          {title}
        </p>
        {href ? (
          <a
            href={href}
            className="mt-1 block text-lg font-semibold text-foreground hover:text-primary"
          >
            {value}
          </a>
        ) : (
          <p className="mt-1 text-lg font-semibold text-foreground">{value}</p>
        )}
        {note && <p className="mt-1 text-sm text-muted-foreground">{note}</p>}
      </div>
    </div>
  );
}
