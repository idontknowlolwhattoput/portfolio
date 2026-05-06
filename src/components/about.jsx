import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { IoMdDownload } from "react-icons/io";
import { SiGmail } from "react-icons/si";

export default function About() {
    return (
        <div className="montserrat font-semibold text-gray-800 w-full h-42 pl-10 pr-10 text-justify md:mt-7 ">
          <p>Hi! I’m Joshua, A senior BSIT student who is self-taught in full stack development.
            I specialize in crafting modern, efficient and secure
            web applications for businesses.
          </p>
          <div className="flex items-center mt-5 gap-3">
            <button className="w-26 h-10 md:w-34 bg-black rounded-md  text-white flex items-center justify-center gap-2">
              <IoMdDownload size={15} />
              <p className="text-xs">Resume</p>
            </button>
            <FaLinkedin size={40} className="text-black" />
            <FaSquareGithub size={40} className="text-black" />
            <SiGmail size={40} className="text-black" />
          </div>
        </div>
    )
}