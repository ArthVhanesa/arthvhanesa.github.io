import { Hero, Highlights, PinnedRepo } from "../components";
import Contact from "../components/Contact";
import DownloadResume from "../components/DownloadResume";
export default function Home() {
  return (
    <>
      <Hero />
      <Highlights />
      <PinnedRepo />
      <Contact />
    </>
  );
}
