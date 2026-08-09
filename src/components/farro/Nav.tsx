import { useEffect, useState } from "react";
import { farro } from "@/data/farro";

const links = [
  { label: "Experience", href: "#experience" },
  { label: "Menu", href: "#menu" },
  { label: "About", href: "#about" },
  { label: "Visit", href: "#visit" },
];

export function Nav() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        solid ? "bg-espresso/25 backdrop-blur-[2px]" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-5 md:h-20 md:px-10">
        <a
          href="#top"
          className="font-display text-2xl tracking-[0.3em] text-flour text-on-film md:text-3xl"
        >
          {farro.name}
        </a>

        <div className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="label-xs link-underline text-flour/85 text-on-film transition-colors hover:text-flour"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href={farro.reservationUrl}
            className="label-xs hidden bg-terracotta px-5 py-2.5 text-flour transition-colors hover:bg-toasted md:inline-block"
          >
            Reserve
          </a>
          <a
            href={farro.reservationUrl}
            className="label-xs bg-terracotta px-3.5 py-2 text-flour md:hidden"
          >
            Reserve
          </a>
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-8 w-8 flex-col items-center justify-center gap-1.5 md:hidden"
          >
            <span className="block h-px w-5 bg-flour" />
            <span className="block h-px w-5 bg-flour" />
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-flour/15 bg-espresso/95 px-5 py-6 md:hidden">
          <ul className="space-y-4">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="label-xs text-flour/85"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
