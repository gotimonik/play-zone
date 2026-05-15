import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms of use for Nexus Play.",
  alternates: { canonical: absoluteUrl("/terms") }
};

export default function TermsPage() {
  return (
    <article className="glass mx-auto max-w-3xl rounded-lg p-6 sm:p-8">
      <h1 className="text-4xl font-black text-white">Terms</h1>
      <p className="mt-5 leading-7 text-slate-300">
        Nexus Play is provided for casual browser gameplay and discovery. Use the platform lawfully,
        respect third-party game rights, and avoid attempts to disrupt embedded services.
      </p>
      <h2 className="mt-8 text-2xl font-black text-white">Availability</h2>
      <p className="mt-3 leading-7 text-slate-300">
        Embedded games depend on remote sources and may occasionally be unavailable or changed by
        their providers.
      </p>
    </article>
  );
}
