import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { createClient } from "@supabase/supabase-js";

const quoteSchema = z.object({
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

export const submitQuote = createServerFn({ method: "POST" })
  .inputValidator((data) => quoteSchema.parse(data))
  .handler(async ({ data }) => {
    const url =
      process.env["SUPABASE_URL"] ||
      import.meta.env["VITE_SUPABASE_URL"];
    const key =
      process.env["SUPABASE_PUBLISHABLE_KEY"] ||
      import.meta.env["VITE_SUPABASE_PUBLISHABLE_KEY"];

    if (!url || !key) {
      throw new Error("Server ei ole seadistatud. Vabandame häda pärast.");
    }

    const client = createClient(url, key, {
      auth: { persistSession: false, autoRefreshToken: false },
    });

    const { error } = await client.from("quote_requests").insert({
      name: data.name,
      email: data.email,
      phone: data.phone,
      work_description: data.workDescription,
    });

    if (error) {
      console.error("quote insert failed", error.message);
      throw new Error("Päringu salvestamine ebaõnnestus. Proovige hiljem uuesti.");
    }

    return { success: true as const };
  });
