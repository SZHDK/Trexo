import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, CheckCircle2, ArrowRight } from "lucide-react";
import { submitQuote } from "@/lib/quote.functions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export const Route = createFileRoute("/hinnapakkumine")({
  head: () => ({
    meta: [
      { title: "Küsi hinnapakkumist — Trexo Haljastus" },
      {
        name: "description",
        content:
          "Täitke vorm ja võtame teiega ühendust. Tasuta ja kohustuseta hinnapakkumine teie aia või haljastusprojektile.",
      },
      { property: "og:title", content: "Küsi hinnapakkumist — Trexo Haljastus" },
      {
        property: "og:description",
        content:
          "Täitke vorm ja võtame teiega ühendust. Tasuta ja kohustuseta hinnapakkumine.",
      },
    ],
  }),
  component: Hinnapakkumine,
});

const schema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Palun sisestage oma nimi")
    .max(100, "Nimi on liiga pikk"),
  email: z
    .string()
    .trim()
    .email("Palun sisestage korrektne e-posti aadress")
    .max(255),
  phone: z
    .string()
    .trim()
    .min(5, "Palun sisestage telefoninumber")
    .max(30),
  workDescription: z
    .string()
    .trim()
    .min(10, "Kirjeldage palun tööd vähemalt mõne lausega")
    .max(2000, "Kirjeldus on liiga pikk"),
});

type FormValues = z.infer<typeof schema>;

function Hinnapakkumine() {
  const [done, setDone] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  async function onSubmit(values: FormValues) {
    try {
      await submitQuote({ data: values });
      setDone(true);
      reset();
      toast.success("Aitäh! Võtame teiega varsti ühendust.");
    } catch (err) {
      const message =
        err instanceof Error
          ? err.message
          : "Päringu saatmine ebaõnnestus. Proovige hiljem uuesti.";
      toast.error(message);
    }
  }

  return (
    <div>
      <section className="border-b border-border bg-secondary/30">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Hinnapakkumine
          </p>
          <h1 className="mt-2 max-w-2xl font-display text-4xl font-medium leading-tight sm:text-5xl">
            Küsi hinnapakkumist
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            Kirjeldage oma plaan ja võtame teiega ühendust. Hinnapakkumine on
            tasuta ja kohustuseta — vastame tavaliselt ühe tööpäeva jooksul.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.4fr_1fr] md:py-20">
        <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
          {done ? (
            <div className="flex h-full flex-col items-start justify-center py-8">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                <CheckCircle2 className="h-7 w-7" />
              </span>
              <h2 className="mt-5 font-display text-2xl font-semibold">
                Aitäh teie päringu eest!
              </h2>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
                Saime teie teate kätte. Võtame teiega ühendust esimesel
                võimalusel, et leppida kokku tutvumiskohtumisel.
              </p>
              <Button
                variant="outline"
                className="mt-6"
                onClick={() => setDone(false)}
              >
                Saada veel üks päring
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
              <div className="space-y-2">
                <Label htmlFor="name">Nimi *</Label>
                <Input
                  id="name"
                  placeholder="Teie ees- ja perekonnanimi"
                  {...register("name")}
                  aria-invalid={!!errors.name}
                />
                {errors.name && (
                  <p className="text-sm text-destructive">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="email">E-post *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="nimi@example.com"
                    {...register("email")}
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && (
                    <p className="text-sm text-destructive">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Telefoninumber *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+372 5xxx xxxx"
                    {...register("phone")}
                    aria-invalid={!!errors.phone}
                  />
                  {errors.phone && (
                    <p className="text-sm text-destructive">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="workDescription">Töö kirjeldus *</Label>
                <Textarea
                  id="workDescription"
                  rows={6}
                  placeholder="Kirjeldage, mis tööd soovite teha: aia kujundus, muru rajamine, kivitee, valgustus jne. Mida rohkem detaile, seda täpsema pakkumise saame teha."
                  {...register("workDescription")}
                  aria-invalid={!!errors.workDescription}
                />
                {errors.workDescription && (
                  <p className="text-sm text-destructive">
                    {errors.workDescription.message}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full gap-2 sm:w-auto"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Saadetakse…
                  </>
                ) : (
                  <>
                    Saada päring
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </Button>

              <p className="text-xs text-muted-foreground">
                * Kohustuslikud väljad. Teie andmeid kasutatakse ainult
                hinnapakkumise andmiseks.
              </p>
            </form>
          )}
        </div>

        <aside className="space-y-6">
          <div className="rounded-2xl border border-border bg-secondary/40 p-6">
            <h2 className="text-lg font-semibold">Mis juhtub edasi?</h2>
            <ol className="mt-4 space-y-4 text-sm text-muted-foreground">
              <li className="flex gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                  1
                </span>
                <span>Vastame teile ühe tööpäeva jooksul.</span>
              </li>
              <li className="flex gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                  2
                </span>
                <span>Lepime kokku tutvumiskohtumisel teie krundil.</span>
              </li>
              <li className="flex gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                  3
                </span>
                <span>Saadame teile selge ja ümbrikuta hinnapakkumise.</span>
              </li>
            </ol>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6">
            <h2 className="text-lg font-semibold">Eelista helistada?</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Võtke otse ühendust:
            </p>
            <a
              href="tel:+37256907208"
              className="mt-3 block text-lg font-semibold text-primary"
            >
              +372 56907208
            </a>
            <p className="mt-1 text-sm text-muted-foreground">
              E–P 8–19.00
            </p>
          </div>
        </aside>
      </section>
    </div>
  );
}
