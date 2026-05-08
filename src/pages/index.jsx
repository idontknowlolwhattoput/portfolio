import Introduction from "../components/introduction";
import Nameplate from "../components/nameplate";
import About from "../components/about";
import "./index.css";
import TechStack from "../components/techStack";

export default function Index(){
    return (
        <div className="w-full min-h-screen flex items-center justify-center pt-10 pb-10 ">
          <div className="container_card min-h-screen ">
            <Nameplate />
            <Introduction/>
            <About />
            <TechStack />
          </div>
        </div>
    )
}