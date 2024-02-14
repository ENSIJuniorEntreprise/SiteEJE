import hackprise from "..../assets/Rectangle 3.png"
function ArchiveCard(){
    return(
        <div className="relative flex flex-col bg-[#e0ded2] w-full h-auto md:w-[385px] md:h-[420px] ">
            <div className="absolute w-0 h-0 top-0 left-0 
            border-l-[110px] border-l-[#2da2dd]
            border-t-[120px] border-t-[#2da2dd] 
            border-r-[110px] border-r-transparent
            border-b-[120px] border-b-transparent z-0"></div>
            <div className="flex flex-col items-center z-10 py-7">
                <div className="relative flex flex-col">
                    <img alt="event" src={hackprise} className="z-10 w-[333px] h-[207px]"/>
                    <div className="bg-[#1f212d] shadow-cardShadow absolute z-20 flex flex-col w-[54.25px] h-[54.11px] left-10 top-40 text-center font-Montserrat text-white pt-2" >
                        <div className="text-[17px] font-semibold">23/24</div>
                        <div className="text-[12px] font-medium ">June</div>
                    </div>
                </div>
                <span className="z-10 flex flex-row items-center space-x-2 font-Montserrat text-[25px] font-bold pt-3">
                    <p className=" text-[#1f212d]">Hack'Prise</p>
                    <p className="text-[#2da2dd]">2.0</p>
                </span>
                <p className="font-Montserrat text-[12px] font-normal px-7 pt-1">Our recent was a resounding success! On Saturday, 
                April 15, 2023, Riverside Park transformed into a music lover's paradise
                </p>
                <button className="bg-[#1f212d] font-Montserrat text-[13px] font-semibold text-[#e0ded2] w-[117.2px] h-[30.73px] shadow-cardShadow">Learn more</button>
            </div>
        </div>
    )
}
export default ArchiveCard