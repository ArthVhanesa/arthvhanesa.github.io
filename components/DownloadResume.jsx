import { HiOutlineDownload, HiOutlineEye } from "react-icons/hi";
import { useState } from "react";
import Link from "next/link";

function DownloadResume() {
  const ResumePath = "/assets/files/ArthVhanesaResume.pdf";
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="relative inline-block text-left">
      {/* Button */}
      <button
        onClick={toggleDropdown}
        className="rounded-md w-[125px] bg-sh-blue hover:bg-sh-blue-500 hover:text-sh-dark-500 transition ease-in p-2 text-center"
      >
        Resume <HiOutlineDownload className="inline-block text-xl ml-2" />
      </button>

      {/* Dropdown */}
      {isDropdownOpen && (
        <div className="w-[125px] origin-top-right absolute right-0 mt-1 rounded-md shadow-lg bg-sh-blue-500 ring-1 ring-black bg-opacity-[0.97]">
          <a
            href={ResumePath}
            download="Arth Vhanesa Resume"
            className="block rounded-md mx-1 mt-1 px-3 py-2 text-sm text-gray-700 hover:bg-gray-300 hover:text-gray-900"
            role="menuitem"
          >
            <HiOutlineDownload className="inline-block text-xl mr-1" />
            Download{" "}
          </a>
          <Link href={ResumePath}>
            <a
              className="block rounded-md mx-1 mb-1 px-3 py-2 text-sm text-gray-700 hover:bg-gray-300 hover:text-gray-900"
              role="menuitem"
              target="_blank"
              rel="noopener noreferrer"
            >
              <HiOutlineEye className="inline-block text-xl mr-1" />
              View
            </a>
          </Link>
        </div>
      )}
    </div>
  );
}

export default DownloadResume;
