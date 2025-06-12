import React, {useState, useEffect} from 'react';

function BottomNav () {

    const [currentTime, setCurrentTime] = useState(new Date());
    const [isToggled, setToggle] = useState(false)

    useEffect(() => {
      const updateTime = () => {
      const now = new Date();
      setCurrentTime(now);
      console.log('Current time:', now.toLocaleString()); 
    };
      updateTime();
      const interval = setInterval(updateTime, 60000);
      return () => clearInterval(interval); 
    }, []);
    
    const handleClick = () => {
       setToggle(prev => !prev);
       alert(isToggled)
    };

    return (
        <div className="flex justify-between items-center fixed bottom-0 w-full h-[8vh] pl-5 pr-5 bg-[#C0C0C0] border-t-4 border-white" onClick={(e) => {handleClick()}}>
           <div className="flex flex-row gap-3">
              <div className="flex items-center justify gap-3 bg-[#C0C0C0] border-t-3 border-white border-l-3 h-10 w-35 shadow-[2px_2px_2px_2px_rgba(0,0,0,0.9)]">
                <img src={'../../public/windows95logo.svg'} className="h-8 w-12 pl-3"/>
                <h1 className="pixel tracking-wid2st text-black text-2xl font-bold spacing">Start</h1>
              </div>
              <div className="flex items-center justify gap-3 bg-[#C0C0C0] border-b-3 border-white border-r-3 h-11 w-100 shadow-[inset_2px_2px_2px_rgba(0,0,0,0.9)] ">
              
              </div>
           </div>

           <div className="flex items-center justify-center gap-3 bg-[#C0C0C0] border-b-3 border-white border-r-3 h-10 w-30 shadow-[-2px_-2px_2px_2px_rgba(0,0,0,0.9)]">
              <h1 className="pixel tracking-widest text-black text-lg spacing">{currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</h1>
           </div>
        </div>
    )
}

export default BottomNav;