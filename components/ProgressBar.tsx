"use client";

import { usePathname, useSearchParams } from "next/navigation";

export function ProgressBar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const key = `${pathname}?${searchParams.toString()}`;

  return (
    <div className="fixed left-0 top-0 z-60 h-1 w-full bg-transparent">
      <div
        key={key}
        className="route-progress h-full bg-linear-to-r from-cyan-300 via-pink-400 to-lime-300"
      />
    </div>
  );
}
