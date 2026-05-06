import { MdDarkMode } from "react-icons/md";

import "../pages/index.css"

export default function Nameplate(){
    return(
        <div className="nameplate_card w-full h-12 flex items-center justify-between pl-10 pr-10">
          <p className="jersey font-bold text-4xl md:text-4xl tracking-wider"> JOSHUA</p>
          <MdDarkMode size={32}/>
        </div>
    )
}