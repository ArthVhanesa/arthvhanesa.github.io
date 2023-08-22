const Heading = ({ text }) => (
  <h2 className="mb-5 text-3xl font-bold tracking-wider inline-block decoration-sh-white underline decoration-1 underline-offset-[15px]">
    {text}
  </h2>
);

const HeadingSmall = ({ text }) => (
  <h2 className="mb-3 text-xl font-bold tracking-wider inline-block decoration-sh-white underline decoration-1 underline-offset-[8px]">
    {text}
  </h2>
);
export { Heading, HeadingSmall };
