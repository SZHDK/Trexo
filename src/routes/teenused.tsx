import { createFileRoute, Link } from "@tanstack/react-router";
import { Leaf, Tractor, Scissors, Droplets, Building2, Truck, ArrowRight, Check } from "lucide-react";

export const Route = createFileRoute("/teenused")({
  head: () => ({
    meta: [
      { title: "Teenused — Trexo Haljastus" },
      {
        name: "description",
        content:
          "Hooldusteenus, traktoriga niitmine, trimmerdamine ja kivi sillutise pesemine. Trexo Haljastus hoiab teie aia ja õue korras.",
      },
      { property: "og:title", content: "Teenused — Trexo Haljastus" },
      {
        property: "og:description",
        content:
          "Hooldusteenus, traktoriga niitmine, trimmerdamine ja kivi sillutise pesemine.",
      },
    ],
  }),
  component: Teenused,
});

const SERVICES = [
  {
    icon: Leaf,
    title: "Hooldusteenus",
    text: "Aia- ja õuehooldus. Muru niitmine, lehtede koristamine, hooajatööd ja välimaalruumi korras hoidmine vastavalt teie vajadustele.",
  },
  {
    icon: Tractor,
    title: "Traktoriga niitmine",
    text: "Suurte ja avatud alade niitmine traktoriga. Kiire ja ühtlane tulemus suurematele kruntidele, põldudele ja muruplatsidele.",
  },
  {
    icon: Scissors,
    title: "Trimmerdamine",
    text: "Servade, piirete, puude ja raskesti ligipääsetavate kohtade trimmerdamine — seal, kus niiduk ei jõua.",
  },
  {
    icon: Droplets,
    title: "Kivi sillutise pesemine",
    text: "Kiviteede, terrasside ja sillutise puhastamine pesemisega. Eemaldame mustuse ja sammalde — pind näeb välja nagu uus.",
  },
  {
    icon: Building2,
    title: "Kinnisvarahooldus",
    text: "Kinnisvara ja ühiste alade hooldus — muru, teed, trepid ja välialad korras aastaringselt vastavalt lepingule.",
  },
  {
    icon: Truck,
    title: "Välikoristus, haljastusjääkide äravedu",
    text: "Välialade koristamine ja haljastusjäätmete (oksad, lehed, muru) äravedu — jätme teie õue puhta ja puhta.",
  },
];

const PROCESS = [
  {
    step: "1",
    title: "Tutvumine",
    text: "Külastame teie krunti ja kuulame teie soovid. Ning arutame, mis hooldustööd on vaja.",
  },
  {
    step: "2",
    title: "Pakkumine",
    text: "Koostame selge hinnapakkumise. Kinnitame üheskoos detailid ja ajakava.",
  },
  {
    step: "3",
    title: "Teostamine",
    text: "Teostame tööd kokkulepitud ajakava järgi, korralikult ja puhtalt.",
  },
  {
    step: "4",
    title: "Jätkuv hooldus",
    text: "Pakume jätkuvat hooldust, et teie aia ja õue ala püsib korras.",
  },
];

function Teenused() {
  return (
    <div>
      <section className="border-b border-border bg-secondary/30">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Teenused
          </p>
          <h1 className="mt-2 max-w-2xl font-display text-4xl font-medium leading-tight sm:text-5xl">
            Teie aia ja õue hooldus ühest kohast
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            Hooldusteenus, traktoriga niitmine, trimmerdamine ja kivi
            sillutise pesemine. Hoiame teie välimaalruumi korras ja puhtana
            läbi kogu aasta.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-md"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <service.icon className="h-6 w-6" />
              </span>
              <h2 className="mt-4 text-xl font-semibold">{service.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {service.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="bg-secondary/40">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Kuidas me töötame
          </p>
          <h2 className="mt-2 font-display text-3xl font-medium leading-tight sm:text-4xl">
            Lihtne ja selge protsess
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((p) => (
              <div key={p.step} className="relative rounded-2xl border border-border bg-card p-6">
                <span className="font-display text-3xl font-semibold text-primary/40">
                  {p.step}
                </span>
                <h3 className="mt-2 text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {p.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
        <div className="flex flex-col items-start gap-6 rounded-2xl border border-border bg-card p-8 sm:p-10 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-display text-2xl font-medium sm:text-3xl">
              Valmis oma aeda hooldama?
            </h2>
            <p className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
              <Check className="h-4 w-4 text-primary" />
              Tasuta hinnapakkumine
            </p>
          </div>
          <Link
            to="/hinnapakkumine"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
          >
            Küsi hinnapakkumist
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
