import Link from "next/link";

export function SectionHeading({
  eyebrow,
  title,
  href
}: {
  eyebrow?: string;
  title: string;
  href?: string;
}) {
  return (
    <div className="mb-5 flex items-end justify-between gap-4">
      <div>
        {eyebrow ? (
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-cyan-300">{eyebrow}</p>
        ) : null}
        <h2 className="mt-2 text-2xl font-black text-white sm:text-3xl">{title}</h2>
      </div>
      {href ? (
        <Link href={href} className="text-sm font-bold text-pink-200 transition hover:text-white">
          View all
        </Link>
      ) : null}
    </div>
  );
}
