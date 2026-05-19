"use client";

import { useState } from "react";

export function ShareButtons({ title, url }: { title: string; url: string }) {
  const [copied, setCopied] = useState(false);
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  async function copy() {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }

  return (
    <div className="flex flex-wrap gap-2">
      <a
        href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`}
        target="_blank"
        rel="noreferrer"
        className="rounded-full border border-white/10 px-4 py-2 text-sm font-bold text-slate-200 transition hover:border-cyan-300 hover:text-white"
      >
        X
      </a>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
        target="_blank"
        rel="noreferrer"
        className="rounded-full border border-white/10 px-4 py-2 text-sm font-bold text-slate-200 transition hover:border-cyan-300 hover:text-white"
      >
        Facebook
      </a>
      <button
        type="button"
        onClick={copy}
        className="rounded-full border border-white/10 px-4 py-2 text-sm font-bold text-slate-200 transition hover:border-cyan-300 hover:text-white"
      >
        {copied ? "Copied" : "Copy link"}
      </button>
    </div>
  );
}
