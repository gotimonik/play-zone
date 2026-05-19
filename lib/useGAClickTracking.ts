"use client";

import { useEffect } from "react";
import { event } from "@/lib/analytics";

type TrackableElement = HTMLElement & {
  dataset: DOMStringMap;
};

function locationFor(element: HTMLElement) {
  if (element.closest("header")) return "header";
  if (element.closest("footer")) return "footer";
  if (element.closest("nav")) return "navigation";
  if (element.closest("aside")) return "sidebar";
  if (element.closest("main")) return "main";
  return "document";
}

function readableText(element: HTMLElement) {
  return element.textContent?.replace(/\s+/g, " ").trim().slice(0, 120);
}

export function useGAClickTracking() {
  useEffect(() => {
    const onClick = (evt: MouseEvent) => {
      const target = evt.target as HTMLElement | null;
      if (!target) return;

      const tracked = target.closest("[data-ga-click], a[href], button") as TrackableElement | null;
      if (!tracked) return;

      const link = tracked.closest("a[href]") as HTMLAnchorElement | null;
      const action = tracked.dataset.gaClick || (link ? "link_click" : "button_click");
      const label = tracked.dataset.gaLabel || readableText(tracked);

      event(action, {
        location: tracked.dataset.gaLocation || locationFor(tracked),
        label,
        link_url: link?.href,
        link_text: link ? readableText(link) : undefined,
        element_type: link ? "link" : tracked.tagName.toLowerCase(),
        page_path: window.location.pathname + window.location.search
      });
    };

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);
}
