import { Link } from "@tanstack/react-router";
import { Leaf, Phone, Mail, MapPin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Leaf className="h-5 w-5" />
            </span>
            <span className="font-display text-xl font-semibold tracking-tight">
              Trexo
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Hooldusteenus, traktoriga niitmine, trimmerdamine ja kivi
            sillutise pesemine. Hoiame teie aia ja õue korras.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
            Kontakt
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>Põlva</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-primary" />
              <a href="tel:+37256907208" className="hover:text-foreground">
                +372 56907208
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-primary" />
              <a
                href="mailto:trex0gr0up1@gmail.com"
                className="hover:text-foreground"
              >
                trex0gr0up1@gmail.com
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
            Lehed
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>
              <Link to="/teenused" className="hover:text-foreground">
                Teenused
              </Link>
            </li>
            <li>
              <Link to="/hinnapakkumine" className="hover:text-foreground">
                Küsi hinnapakkumist
              </Link>
            </li>
            <li>
              <Link to="/kontakt" className="hover:text-foreground">
                Kontakt
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto max-w-6xl px-4 py-6 text-center text-xs text-muted-foreground sm:px-6">
          © {new Date().getFullYear()} Trexo Haljastus. Kõik õigused kaitstud.
        </div>
      </div>
    </footer>
  );
}
