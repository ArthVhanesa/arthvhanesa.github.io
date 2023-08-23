import { HiOutlineDownload } from "react-icons/hi";

const DownloadResume = () => {
  return (
    <>
      <a
        href="/assets/files/ArthVhanesaResume.pdf"
        download="Arth Vhanesa Resume"
      >
        <div className="rounded-md bg-sh-blue p-1 text-center">
          Resume
          <HiOutlineDownload className="inline-block text-xl ml-2" />
        </div>
      </a>
    </>
  );
};

export default DownloadResume;
