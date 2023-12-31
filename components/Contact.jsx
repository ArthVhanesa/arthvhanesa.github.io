import Script from "next/script";
import { HiOutlineChatAlt2 } from "react-icons/hi";
import { Heading } from "../utils";

export default function Contact() {
  return (
    <>
      <div className="flex flex-col p-5 items-center m-auto md:px-[40px] px-4 bg-sh-dark-500 border-2 border-sh-dark rounded-lg">
        <h1 className="text-3xl mb-5 font-bold text-center">
          Let&apos;s Get in Touch
        </h1>
        <h1 className="text-xl mb-5 text-sh-white-500 text-center">
          I&apos;d love to hear from you! Whether you have a project in mind,
          want to collaborate, or just want to say hi, don&apos;t hesitate to
          drop me a line.
          <br />
          I am open to new job opportunities and would love to hear from you if
          my skills match your needs. Please feel free to reach out to me.
          <br /> Looking forward to connecting with you!
        </h1>
        <a href="https://tally.so#tally-open=wveqKA&tally-layout=modal&tally-overlay=1&tally-emoji-text=👋&tally-emoji-animation=wave&tally-auto-close=2000">
          <div className="rounded-md w-[170px] flex justify-evenly items-center bg-sh-blue hover:bg-sh-blue-500 hover:text-sh-dark-500 transition ease-in p-2 text-center">
            Connect with me
            <HiOutlineChatAlt2 />
          </div>
        </a>
      </div>

      <Script async src="https://tally.so/widgets/embed.js"></Script>
    </>
  );
}
