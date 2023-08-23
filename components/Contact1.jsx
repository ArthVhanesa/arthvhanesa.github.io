import Script from "next/script";
import { Heading } from "../utils";

export default function Contact() {
  return (
    <>
      <Heading text={"Get in touch"} />
      <iframe
        data-tally-src="https://tally.so/embed/wveqKA?alignLeft=1&hideTitle=1&dynamicHeight=1"
        loading="lazy"
        width="100%"
        height="456"
        title="Get in touch"
      ></iframe>

      <Script
        id="tally-js"
        src="https://tally.so/widgets/embed.js"
        onLoad={() => {
          Tally.loadEmbeds();
        }}
      />
    </>
  );
}
