import { HiOutlineDownload } from "react-icons/hi";

const DownloadResume = () => {
  return (
    <>
      <a
        href="/assets/files/ArthVhanesaResume.pdf"
        download="Arth Vhanesa Resume"
      >
        <div className="rounded-md w-[125px] bg-sh-blue hover:bg-sh-blue-500 hover:text-sh-dark-500 transition ease-in p-2 text-center">
          Resume
          <HiOutlineDownload className="inline-block text-xl ml-2" />
        </div>
      </a>
    </>
  );
};

export default DownloadResume;
