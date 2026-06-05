import html from "../assets/icons/html.svg"
import css from "../assets/icons/css.svg"
import js from "../assets/icons/js.svg"
import php from "../assets/icons/php.svg"
import sql from "../assets/icons/sql.svg"
import react from "../assets/icons/react.svg"
import laravel from "../assets/icons/laravel.svg"
import tailwind from "../assets/icons/tailwind.svg"

const images = [
    {icon: html, text: "HTML"},
    {icon: css, text: "CSS"},
    {icon: js, text: "Javascript"},
    {icon: php, text: "PHP"}, 
    {icon: sql, text: "SQL"}, 
    {icon: react, text: "React"}, 
    {icon: laravel, text: "Laravel"}, 
    {icon: tailwind, text: "Laravel"}, 
  
];

export default function TechStack(){
    return (
        <div className="montserrat w-full pl-10 pr-10 mt-7">
          <div className="w-full flex justify-between">
            <p className="text-lg font-bold">Current Tech Stack</p>
            <p className="text-lg text-gray-400 font-semibold ">More+</p>
          </div>
          {/* TECH STACK CONTAINER */}
          <div className="flex items-center justify-evenly flex-wrap ">
            {/* INDIVIDUAL STACK CONTAINER */}
            {images.map(images => (
              <div className="w-24 h-24 mt-5 flex flex-col items-center justify-center gap-1">
                <img src={images.icon} className="w-[45%] h-[45%]"/>
                <p className="montserrat font-semibold">{images.text}</p>
              </div>
            ))}
          </div> 
        </div>
    )
}