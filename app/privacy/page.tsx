import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Games Play Fantacy.",
  alternates: { canonical: absoluteUrl("/privacy") }
};

export default function PrivacyPage() {
  return (
    <article className="glass mx-auto max-w-3xl rounded-lg p-6 sm:p-8">
      <h1 className="text-4xl font-black text-white">Privacy Policy</h1>
      <p className="mt-5 leading-7 text-slate-300">
        Games Play Fantacy stores recently played game slugs in your browser localStorage to improve your
        experience. If analytics is enabled by the site owner, usage is measured with IP
        anonymization and aggregate reporting.
      </p>
      <h2 className="mt-8 text-2xl font-black text-white">Embedded games</h2>
      <p className="mt-3 leading-7 text-slate-300">
        Games are loaded through third-party iframe URLs. Those providers may process technical data
        according to their own policies.
      </p>
    </article>
  );
}
