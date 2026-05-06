import "../pages/index.css"
export default function Introduction(){
    return (
        <div className="w-full h-28 pl-9 pr-10 flex pt-3 gap-4 ">
          <div className="w-[30%] h-[80%] md:w-[30%] md:h-full  bg-black rounded-xl">
            <div className="w-[90%]  bg-black rounded-lg"></div>
          </div>
          <div className="montserrat">
            <p className="font-bold text-2xl md:text-3xl ">Joshua Vergara</p>
            <p className="font-medium text-md md:text-lg text-gray-500">Full Stack Developer</p>
          </div>
        </div>
    )
}