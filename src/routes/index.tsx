import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/farro/Nav";
import { VideoWorld } from "@/components/farro/VideoWorld";
import {
  Introduction,
  CuisineType,
  MenuPreview,
  Experience,
  Rating,
  Location,
  Reservation,
  Footer,
  MobileReserveBar,
} from "@/components/farro/Sections";

const title = "Farro · Koregaon Park, Pune — Enter the World of Farro";
const description =
  "Modern Indian, Mediterranean and Italian at Farro, Koregaon Park, Pune. Scroll through a miniature culinary world, then reserve your table.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      <Nav />
      <VideoWorld />
      <Introduction />
      <CuisineType />
      <MenuPreview />
      <Experience />
      <Rating />
      <Location />
      <Reservation />
      <Footer />
      <MobileReserveBar />
    </main>
  );
}
