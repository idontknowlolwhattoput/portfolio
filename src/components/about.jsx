import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { IoMdDownload } from "react-icons/io";
import { SiGmail } from "react-icons/si";

export default function About() {
  return (
    <div className="montserrat font-semibold text-gray-800 pl-10 pr-10 text-justify md:mt-7 ">
      <div>
        <p>
          Hi! I’m Joshua. A Full Stack senior BSIT student. I am currently
          practicing how to build modern and scalable application with clean
          architecture and senior level approach in mind.
        </p>
      </div>  
      <div className="flex items-center mt-5 gap-3">
        <button className="w-26 h-10 md:w-34 bg-black rounded-md  text-white flex items-center justify-center gap-1">
          <IoMdDownload size={20} />
          <p className="text-md">Resume</p>
        </button>
        <FaLinkedin size={40} className="text-black" />
        <FaSquareGithub size={40} className="text-black" />
        <SiGmail size={40} className="text-black" />
      </div>
    </div>
  );
}
