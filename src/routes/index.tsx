import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Leaf, Tractor, Scissors, Droplets, Building2, Truck } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import work1 from "@/assets/work-1.jpg";

const aboutImg = work1;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Trexo Haljastus — hooldusteenus, niitmine ja trimmerdamine",
      },
      {
        name: "description",
        content:
          "Trexo Haljastus: hooldusteenus, traktoriga niitmine, trimmerdamine ja kivi sillutise pesemine. Hoiame teie aia ja õue korras aastaringselt.",
      },
      {
        property: "og:title",
        content: "Trexo Haljastus — hooldusteenus ja niitmine",
      },
      {
        property: "og:description",
        content:
          "Hooldusteenus, traktoriga niitmine, trimmerdamine ja kivi sillutise pesemine Põlvamaal.",
      },
    ],
  }),
  component: Index,
});

const HIGHLIGHTS = [
  {
    icon: Leaf,
    title: "Hooldusteenus",
    text: "Aia- ja õuehooldus aastaringselt — hoiame teie välimaalruumi korras ja ilusana.",
  },
  {
    icon: Tractor,
    title: "Traktoriga niitmine",
    text: "Suurte ja avatud alade niitmine traktoriga — kiire, ühtlane ja puhas tulemus.",
  },
  {
    icon: Scissors,
    title: "Trimmerdamine",
    text: "Servade, piirete ja raskesti ligipääsetavate kohtade trimmerdamine.",
  },
  {
    icon: Droplets,
    title: "Kivi sillutise pesemine",
    text: "Kiviteede, terrasside ja sillutiste pesemine — puhas pind ilmub uuesti välja.",
  },
  {
    icon: Building2,
    title: "Kinnisvarahooldus",
    text: "Kinnisvara ja ühiste alade hooldus lepingu alusel — kogu väliala korras aastaringselt.",
  },
  {
    icon: Truck,
    title: "Välikoristus, haljastusjääkide äravedu",
    text: "Välialade koristamine ja haljastusjäätmete äravedu — okste, lehtede ja muru prügist vaba õue.",
  },
];

function Index() {
  return (
    <div>
      {/* Hero */}
      <section className="relative">
        <div className="relative h-[60vh] min-h-[440px] w-full overflow-hidden">
          <img
            src={heroImg}
            alt="Hooldatud aed ja muru"
            width={1920}
            height={1080}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20" />
          <div className="absolute inset-0 flex items-end">
            <div className="mx-auto w-full max-w-6xl px-4 pb-12 sm:px-6 sm:pb-16">
              <p className="mb-3 text-sm font-medium uppercase tracking-widest text-white/80">
                Aia ja õue hooldus
              </p>
              <h1 className="max-w-2xl font-display text-4xl font-medium leading-tight text-white sm:text-5xl md:text-6xl">
                Hoiame teie aia ja õue korras aastaringselt
              </h1>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
                Hooldusteenus, traktoriga niitmine, trimmerdamine ja kivi
                sillutise pesemine Tallinnas ja ümbruskonnas.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  to="/hinnapakkumine"
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
                >
                  Küsi hinnapakkumist
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/teenused"
                  className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20"
                >
                  Vaata teenuseid
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {HIGHLIGHTS.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-md"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                <item.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Intro / about */}
      <section className="bg-secondary/40">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24 md:items-center">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-primary">
              Meist
            </p>
            <h2 className="mt-2 font-display text-3xl font-medium leading-tight sm:text-4xl">
              Väike ja sihikas meeskond teie aia heaks
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Trexo Haljastus keskendub ühele: teie aia ja õue korras hoidmisele.
              Pakume hooldusteenust, traktoriga niitmist, trimmerdamist ja kivi
              sillutise pesemist — nii suurte kruntide kui ka väiksemate
              aedade jaoks.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Tuleme kohale, kuulame teie vajadusi ja leppime kokku sobiva
              hoolduskava. Hoiame teie väliala puhta ja hooldatuna.
            </p>
            <Link
              to="/teenused"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            >
              Vaata kõiki teenuseid
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="overflow-hidden rounded-2xl">
            <img
              src={aboutImg}
              alt="Hooldatud välimaalruum"
              width={1024}
              height={768}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-16 text-center sm:px-6 md:py-20">
          <h2 className="max-w-2xl font-display text-3xl font-medium leading-tight sm:text-4xl">
            Vajate oma aiale hooldust? Räägime üle.
          </h2>
          <p className="max-w-xl text-base text-primary-foreground/85">
            Täitke lihtne vorm ja võtame teiega ühendust esimesel võimalusel.
            Hinnapakkumine on tasuta.
          </p>
          <Link
            to="/hinnapakkumine"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
          >
            Küsi hinnapakkumist
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
