import Script from "next/script";
import { HiOutlineChatAlt2 } from "react-icons/hi";
import { Heading } from "../utils";

export default function Contact() {
  return (
    <>
      <div className="flex flex-col p-5 justify-evenly items-center m-auto md:px-[40px] px-4 min-h-[300px] bg-sh-dark-500 border-2 border-sh-dark rounded-lg">
        <h1 className="text-3xl font-bold text-center">Let's Get in Touch</h1>
        <h1 className="text-xl text-sh-white-500 text-center">
          I'd love to hear from you! Whether you have a project in mind, want to
          collaborate, or just want to say hi, feel free to drop me a line.
          <br />
          I am also open to job opportunities, so if you're looking for someone
          with my skills, please get in touch. I'll do my best to get back to
          you as soon as possible.
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
