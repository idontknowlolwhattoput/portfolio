import Introduction from "../components/introduction";
import Nameplate from "../components/nameplate";
import About from "../components/about"
import "./index.css"

export default function Index(){
    return (
        <div className="w-full min-h-screen flex items-center justify-center pt-10 pb-10">
          <div className="container_card h-[200vh] ">
            <Nameplate />
            <Introduction/>
            <About />
          </div>
        </div>
    )
}