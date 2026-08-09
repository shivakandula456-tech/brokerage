import { useEffect, useRef, useState } from "react";
import { farro } from "@/data/farro";

type Scene = {
  start: number;
  end: number;
  eyebrow?: string;
  title: string;
  titleAlt?: string;
  body?: string;
  position: "left" | "right" | "center";
  size?: "hero" | "large" | "xl";
  cta?: { label: string; href: string }[];
  chips?: string[];
  note?: string;
};

// Timings tuned against the film: wide kitchen (0–1.5s), sandwich build (1.5–4s),
// crane lift on the left (4–6s), close-up spreading (6–8s), finished hoist (8–10s).
const scenes: Scene[] = [
  {
    start: -0.06,
    end: 0.13,
    eyebrow: farro.locality,
    title: "FARRO",
    body: "A world built around flavour.",
    position: "center",
    size: "hero",
  },
  {
    start: 0.15,
    end: 0.29,
    eyebrow: "Welcome to",
    title: "The world of Farro",
    body: "Modern flavours shaped through craft, curiosity and a little imagination.",
    position: "left",
  },
  {
    start: 0.31,
    end: 0.45,
    eyebrow: "Built by hand",
    title: "Crafted with obsession.",
    body: "Every ingredient matters. Every detail has a purpose. Every plate begins long before it reaches the table.",
    position: "right",
  },
  {
    start: 0.47,
    end: 0.6,
    eyebrow: "The Farro kitchen",
    title: "Flavours without borders.",
    chips: ["Modern Indian", "Mediterranean", "Italian", "Desserts", "Bar Food"],
    note: "Different influences. One Farro table.",
    position: "left",
  },
  {
    start: 0.62,
    end: 0.77,
    title: "Every plate",
    titleAlt: "is a world.",
    body: "Built layer by layer. Ingredient by ingredient. Moment by moment.",
    position: "center",
    size: "xl",
  },
  {
    start: 0.79,
    end: 0.89,
    eyebrow: "From our world",
    title: "To your table.",
    position: "right",
    cta: [{ label: "Explore the menu", href: farro.menuUrl }],
  },
  {
    start: 0.91,
    end: 1.0,
    title: "FARRO",
    body: "An evening of flavour in Koregaon Park.",
    position: "center",
    size: "hero",
    cta: [
      { label: "Reserve your table", href: farro.reservationUrl },
      { label: "Get directions", href: farro.mapsUrl },
    ],
  },
];

const chapters = ["Enter", "Craft", "Flavour", "Table", "Farro"];

const clamp = (v: number, a = 0, b = 1) => Math.min(Math.max(v, a), b);

function sceneOpacity(p: number, s: Scene) {
  const span = s.end - s.start;
  const enter = span * 0.22;
  const exit = span * 0.22;
  if (p < s.start || p >= s.end) return 0;
  if (p < s.start + enter) return (p - s.start) / enter;
  if (p > s.end - exit) return (s.end - p) / exit;
  return 1;
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const on = () => setReduced(mq.matches);
    on();
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);
  return reduced;
}

export function VideoWorld() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [progress, setProgress] = useState(0);
  const [ready, setReady] = useState(false);
  const [loaderGone, setLoaderGone] = useState(false);
  const [percent, setPercent] = useState(0);
  const reduced = usePrefersReducedMotion();

  // Loading — wait for enough of the film before entering the kitchen.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    let raf = 0;
    const tick = () => {
      const d = video.duration || 10;
      const buffered = video.buffered.length
        ? video.buffered.end(video.buffered.length - 1)
        : 0;
      const pct = Math.round(clamp(buffered / d) * 100);
      setPercent((prev) => (pct > prev ? pct : prev));
      if (video.readyState >= 3 || pct >= 98) {
        setPercent(100);
        setReady(true);
        window.setTimeout(() => setLoaderGone(true), 900);
        return;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    const fallback = window.setTimeout(() => {
      setReady(true);
      window.setTimeout(() => setLoaderGone(true), 900);
    }, 9000);
    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(fallback);
    };
  }, []);

  // Scroll-driven scrubbing engine.
  useEffect(() => {
    if (reduced) return;
    const wrap = wrapRef.current;
    const video = videoRef.current;
    if (!wrap || !video) return;

    let raf = 0;
    let visible = true;
    let target = 0;
    let current = 0;
    let lastPainted = -1;

    const io = new IntersectionObserver(
      (entries) => {
        visible = entries.some((e) => e.isIntersecting);
        if (visible && !raf) raf = requestAnimationFrame(loop);
      },
      { rootMargin: "100px" },
    );
    io.observe(wrap);

    function loop() {
      const w = wrapRef.current;
      const v = videoRef.current;
      if (!w || !v) return;

      const rect = w.getBoundingClientRect();
      const distance = w.offsetHeight - window.innerHeight;
      target = clamp(distance > 0 ? -rect.top / distance : 0);

      current += (target - current) * 0.12;
      if (Math.abs(target - current) < 0.0004) current = target;

      const duration = v.duration || 10;
      const time = clamp(current, 0, 0.999) * duration;
      if (Math.abs(time - lastPainted) > 1 / 90 && v.readyState >= 2) {
        lastPainted = time;
        try {
          v.currentTime = time;
        } catch {
          /* seek not ready */
        }
      }
      setProgress((p) => (Math.abs(p - current) > 0.0015 ? current : p));

      raf = visible ? requestAnimationFrame(loop) : 0;
    }

    raf = requestAnimationFrame(loop);
    return () => {
      io.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, [reduced]);

  const active = scenes.find((s) => progress >= s.start && progress <= s.end);
  const veilX =
    active?.position === "right" ? "72%" : active?.position === "left" ? "28%" : "50%";

  return (
    <div
      ref={wrapRef}
      id="top"
      className="relative h-[340vh] md:h-[420vh] lg:h-[500vh]"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-espresso">
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover object-[62%_center] md:object-center"
          poster={farro.posterUrl}
          muted
          playsInline
          preload="auto"
          disablePictureInPicture
          aria-hidden="true"
        >
          <source src={farro.videoWebmUrl} type="video/webm" />
          <source src={farro.videoUrl} type="video/mp4" />
        </video>

        {/* readability veil, positioned away from the action */}
        <div
          className="pointer-events-none absolute inset-0 film-veil transition-[background] duration-700"
          style={{ ["--veil-x" as string]: veilX, opacity: active ? 1 : 0.35 }}
        />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-espresso/55 to-transparent" />

        {/* dissolve into the cream website */}
        <div
          className="pointer-events-none absolute inset-0 bg-cream"
          style={{ opacity: clamp((progress - 0.985) / 0.015) }}
        />

        {/* scenes */}
        <div className="pointer-events-none absolute inset-0">
          {scenes.map((s) => {
            const o = reduced ? 1 : sceneOpacity(progress, s);
            if (o <= 0.001 && !reduced) return null;
            const align =
              s.position === "left"
                ? "items-start text-left md:pl-[8%] lg:pl-[10%]"
                : s.position === "right"
                  ? "items-end text-right md:pr-[8%] lg:pr-[10%]"
                  : "items-center text-center";
            const width = s.position === "center" ? "max-w-3xl" : "max-w-xl";
            const local = clamp((progress - s.start) / (s.end - s.start));
            return (
              <div
                key={s.title + s.start}
                className={`absolute inset-0 flex flex-col justify-center px-6 md:px-0 ${align}`}
                style={{
                  opacity: o,
                  filter: `blur(${(1 - o) * 6}px)`,
                  transform: `translate3d(0, ${(1 - o) * 30}px, 0)`,
                }}
              >
                <div className={`${width} pointer-events-auto`}>
                  {s.eyebrow && (
                    <p className="label-xs mb-4 text-flour/70 text-on-film">
                      {s.eyebrow}
                    </p>
                  )}
                  <h2
                    className={`font-display text-flour text-on-film leading-[0.95] ${
                      s.size === "hero"
                        ? "text-[clamp(3.5rem,14vw,11rem)] tracking-[0.18em]"
                        : s.size === "xl"
                          ? "text-[clamp(2.8rem,9vw,8rem)]"
                          : "text-[clamp(2.2rem,6vw,5rem)]"
                    }`}
                  >
                    {s.title}
                    {s.titleAlt && (
                      <>
                        <br />
                        <span
                          className="inline-block transition-all duration-500"
                          style={{
                            opacity: clamp((local - 0.35) / 0.2),
                            transform: `translateY(${(1 - clamp((local - 0.35) / 0.2)) * 20}px)`,
                          }}
                        >
                          {s.titleAlt}
                        </span>
                      </>
                    )}
                  </h2>

                  {s.chips && (
                    <div
                      className={`mt-7 flex flex-wrap gap-x-4 gap-y-2 ${
                        s.position === "right" ? "justify-end" : s.position === "center" ? "justify-center" : ""
                      }`}
                    >
                      {s.chips.map((c, i) => (
                        <span
                          key={c}
                          className="label-xs text-flour text-on-film transition-all duration-500"
                          style={{
                            opacity: clamp((local - 0.2 - i * 0.1) / 0.12),
                          }}
                        >
                          {c}
                          {i < s.chips!.length - 1 && (
                            <span className="ml-4 text-terracotta">×</span>
                          )}
                        </span>
                      ))}
                    </div>
                  )}

                  {s.body && (
                    <p className="mt-6 max-w-md text-sm leading-relaxed text-flour/85 text-on-film md:text-base">
                      {s.body}
                    </p>
                  )}
                  {s.note && (
                    <p className="mt-6 text-sm text-flour/70 text-on-film">{s.note}</p>
                  )}

                  {s.cta && (
                    <div
                      className={`mt-8 flex flex-wrap gap-4 ${
                        s.position === "right"
                          ? "justify-end"
                          : s.position === "center"
                            ? "justify-center"
                            : ""
                      }`}
                    >
                      {s.cta.map((c, i) => (
                        <a
                          key={c.label}
                          href={c.href}
                          target={c.href.startsWith("http") ? "_blank" : undefined}
                          rel="noreferrer"
                          className={`label-xs group inline-flex items-center gap-2 px-6 py-3 transition-colors ${
                            i === 0
                              ? "bg-terracotta text-flour hover:bg-toasted"
                              : "border border-flour/50 text-flour hover:bg-flour/10"
                          }`}
                        >
                          {c.label}
                          <span className="transition-transform duration-300 group-hover:translate-x-2">
                            →
                          </span>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* scroll invitation */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-8 flex flex-col items-center gap-3"
          style={{ opacity: clamp(1 - progress / 0.05) }}
        >
          <span className="label-xs text-flour/80 text-on-film">Scroll to enter</span>
          <span className="scroll-nudge block h-10 w-px bg-flour/60" />
        </div>

        {/* chapter rail */}
        <div className="pointer-events-none absolute right-6 top-1/2 hidden -translate-y-1/2 flex-col items-end gap-3 lg:flex">
          {chapters.map((c, i) => {
            const on = progress >= i / chapters.length;
            return (
              <div key={c} className="flex items-center gap-3">
                <span
                  className={`label-xs transition-colors duration-300 ${
                    on ? "text-flour" : "text-flour/35"
                  }`}
                >
                  {c}
                </span>
                <span className="text-[10px] tabular-nums text-flour/50">
                  0{i + 1}
                </span>
              </div>
            );
          })}
          <div className="mt-2 h-32 w-px bg-flour/25">
            <div
              className="w-px bg-terracotta"
              style={{ height: `${progress * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* loader */}
      {!loaderGone && (
        <div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-cream transition-opacity duration-700"
          style={{ opacity: ready ? 0 : 1 }}
        >
          <h1 className="font-display text-6xl tracking-[0.3em] text-espresso md:text-7xl">
            FARRO
          </h1>
          <p className="label-xs mt-4 text-toasted">{farro.locality}</p>
          <p className="label-xs mt-16 text-toasted/70">Entering the kitchen</p>
          <p className="mt-3 text-xs tabular-nums text-terracotta">{percent}%</p>
        </div>
      )}
    </div>
  );
}
