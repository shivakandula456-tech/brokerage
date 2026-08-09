import { farro, dishes } from "@/data/farro";
import dish01 from "@/assets/dish-01.jpg";
import dish02 from "@/assets/dish-02.jpg";
import interior from "@/assets/interior.jpg";

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="label-xs inline-flex items-center gap-3 text-terracotta">
      <span className="inline-block h-px w-8 bg-terracotta" />
      {children}
    </p>
  );
}

export function Introduction() {
  return (
    <section id="about" className="band bg-cream">
      <div className="band-inner">
        <Label>{farro.locality}</Label>
        <h2 className="mt-10 font-display text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.95] text-espresso">
          A table made for
          <br />
          <span className="text-terracotta">long evenings.</span>
        </h2>
        <div className="mt-14 grid gap-10 border-t border-border pt-10 md:grid-cols-12">
          <p className="text-lg leading-relaxed text-toasted md:col-span-6 md:col-start-7">
            Farro brings together Modern Indian, Mediterranean and Italian
            influences in a dining experience centred around flavour, craft and
            conversation.
          </p>
        </div>
      </div>
    </section>
  );
}

const words = ["Modern Indian", "Mediterranean", "Italian", "Desserts", "Bar"];

export function CuisineType() {
  const row = [...words, ...words];
  return (
    <section className="overflow-hidden bg-espresso py-16 md:py-24">
      <div className="marquee-track flex w-max gap-10 whitespace-nowrap">
        {row.map((w, i) => (
          <span
            key={w + i}
            className={`font-display text-[clamp(2.4rem,7vw,6rem)] leading-none ${
              i % 3 === 1 ? "text-terracotta" : "text-flour"
            }`}
          >
            {w}
            <span className="mx-8 text-olive">/</span>
          </span>
        ))}
      </div>
    </section>
  );
}

function DishRow({
  index,
  image,
  reverse,
}: {
  index: number;
  image: string;
  reverse?: boolean;
}) {
  const d = dishes[index]!;

  return (
    <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
      <div className={`overflow-hidden rounded-2xl ${reverse ? "md:order-2" : ""}`}>
        <img
          src={image}
          alt={`Farro ${d.name}`}
          loading="lazy"
          width={1200}
          height={1500}
          className="h-[380px] w-full object-cover transition-transform duration-700 hover:scale-[1.04] md:h-[600px]"
        />
      </div>
      <div className={reverse ? "md:order-1" : ""}>
        <span className="label-xs text-toasted/70">
          {String(index + 1).padStart(2, "0")}
        </span>
        <h3 className="mt-4 font-display text-[clamp(2rem,4vw,3.25rem)] leading-tight text-espresso">
          {d.name}
        </h3>
        <p className="mt-5 max-w-md text-base leading-relaxed text-toasted">
          {d.description}
        </p>
        <p className="label-xs mt-8 text-terracotta">{d.price}</p>
      </div>
    </div>
  );
}

export function MenuPreview() {
  return (
    <section id="menu" className="band bg-flour">
      <div className="band-inner">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Label>The menu</Label>
            <h2 className="mt-8 font-display text-[clamp(2.2rem,6vw,4.5rem)] leading-none text-espresso">
              What&apos;s on the table
            </h2>
          </div>
          <a
            href={farro.menuUrl}
            className="label-xs pill group border border-espresso/25 text-espresso hover:bg-espresso hover:text-flour"
          >
            Full menu
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>

        <div className="mt-20 space-y-24">
          <DishRow index={0} image={dish01} />
          <DishRow index={1} image={dish02} reverse />
        </div>

        <div className="mt-24 overflow-hidden rounded-2xl">
          <img
            src={interior}
            alt="Farro dining room"
            loading="lazy"
            width={1920}
            height={1080}
            className="h-[300px] w-full object-cover md:h-[560px]"
          />
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {[dishes[2], dishes[3]].map((d) => (
            <div
              key={d.name}
              className="rounded-2xl border border-border bg-cream p-8 transition-colors hover:border-terracotta"
            >
              <h3 className="font-display text-2xl text-espresso md:text-3xl">
                {d.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-toasted">
                {d.description}
              </p>
              <p className="label-xs mt-6 text-terracotta">{d.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Experience() {
  const items = [
    { k: "Room", v: "Warm, low-lit, built for lingering" },
    { k: "Kitchen", v: "Live fire, seasonal produce, bold spice" },
    { k: "Bar", v: "Cocktails poured at the table" },
  ];
  return (
    <section id="experience" className="band bg-espresso">
      <div className="band-inner">
        <Label>Dinner at Farro</Label>
        <h2 className="mt-10 font-display text-[clamp(2.4rem,7vw,5.5rem)] leading-[0.95] text-flour">
          Come for dinner.
          <br />
          Stay for the night.
        </h2>
        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-flour/15 bg-flour/15 md:grid-cols-3">
          {items.map((i) => (
            <div key={i.k} className="bg-espresso p-8">
              <p className="label-xs text-terracotta">{i.k}</p>
              <p className="mt-4 text-base leading-relaxed text-flour/80">{i.v}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Rating() {
  const stats = [
    { value: farro.rating, label: `${farro.ratingCount} dining ratings` },
    { value: farro.averageCost, label: "Average for two" },
    { value: "7 PM", label: "Doors open nightly" },
  ];
  return (
    <section className="band bg-cream !py-20">
      <div className="band-inner grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">
        {stats.map((s) => (
          <div key={s.label} className="bg-cream px-8 py-12">
            <p className="font-display text-[clamp(2.2rem,5vw,3.5rem)] leading-none text-espresso">
              {s.value}
            </p>
            <p className="label-xs mt-4 text-toasted">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Location() {
  return (
    <section id="visit" className="band bg-flour">
      <div className="band-inner">
        <Label>Find us</Label>
        <h2 className="mt-10 font-display text-[clamp(2.6rem,8vw,6rem)] leading-[0.9] text-espresso">
          Koregaon Park,
          <br />
          Pune
        </h2>
        <div className="mt-14 grid gap-10 border-t border-border pt-10 md:grid-cols-2">
          <address className="not-italic text-toasted">
            {farro.addressLines.map((l) => (
              <span key={l} className="block text-base leading-relaxed">
                {l}
              </span>
            ))}
          </address>
          <div className="flex flex-wrap items-start gap-4 md:justify-end">
            <a
              href={farro.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="label-xs pill group bg-terracotta text-flour hover:bg-toasted"
            >
              Get directions
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              href={farro.phoneHref}
              className="label-xs pill border border-espresso/25 text-espresso hover:bg-espresso hover:text-flour"
            >
              Call Farro
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Reservation() {
  return (
    <section className="band bg-cream text-center">
      <div className="band-inner">
        <p className="label-xs text-terracotta">Dinner from 7 PM</p>
        <h2 className="mx-auto mt-8 font-display text-[clamp(2.8rem,9vw,7rem)] leading-[0.9] text-espresso">
          Your table
          <br />
          is waiting.
        </h2>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <a
            href={farro.reservationUrl}
            className="label-xs pill group bg-terracotta px-8 text-flour hover:bg-toasted"
          >
            Reserve at Farro
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
          <a
            href={farro.phoneHref}
            className="label-xs pill border border-espresso/25 text-espresso hover:bg-espresso hover:text-flour"
          >
            Call {farro.phone}
          </a>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const links = [
    { label: "Menu", href: farro.menuUrl },
    { label: "Reservations", href: farro.reservationUrl },
    { label: "Directions", href: farro.mapsUrl },
    { label: "Instagram", href: farro.instagramUrl },
    { label: "Contact", href: farro.phoneHref },
  ];
  return (
    <footer className="bg-espresso px-6 pb-24 pt-24 md:px-12 md:pb-16">
      <div className="mx-auto max-w-[1280px]">
        <div className="flex flex-wrap items-end justify-between gap-10">
          <p className="font-display text-[clamp(3.5rem,15vw,11rem)] leading-none text-flour">
            FARRO
          </p>
          <ul className="flex flex-wrap gap-x-8 gap-y-3">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="label-xs link-underline text-flour/75 hover:text-flour"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-16 flex flex-wrap items-end justify-between gap-6 border-t border-flour/15 pt-8">
          <div>
            <p className="text-sm text-flour/70">
              Modern Indian · Mediterranean · Italian
            </p>
            <a
              href={farro.phoneHref}
              className="mt-2 block text-sm text-flour/70 hover:text-flour"
            >
              {farro.phone}
            </a>
          </div>
          <p className="label-xs text-terracotta">See you at the table.</p>
        </div>
      </div>
    </footer>
  );
}

export function MobileReserveBar() {
  return (
    <a
      href={farro.reservationUrl}
      className="label-xs fixed inset-x-0 bottom-0 z-40 block bg-terracotta py-4 text-center text-flour md:hidden"
    >
      Reserve table
    </a>
  );
}
