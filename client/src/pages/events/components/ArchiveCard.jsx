import React from 'react';

function ArchiveCard(props) {
    const { date, month, title1, title2, description, image, isActive } = props;

    return (
        <div className={`relative flex flex-col bg-[#e0ded2] w-[80%] ml-[10%] h-auto  ${props.className} ${isActive ? ' opacity-100 md:h-[420px]' : 'opacity-20 md:h-[380px] md:mt-[20px] md:w-[70%] md:ml-[15%]'}`}>
            <div className="absolute w-0 h-0 top-0 left-0 
            border-l-[110px] border-l-[#2da2dd]
            border-t-[120px] border-t-[#2da2dd] 
            border-r-[110px] border-r-transparent
            border-b-[120px] border-b-transparent z-0"></div>
            <div className="flex flex-col items-center z-10 py-7">
                <div className="relative flex flex-col">
                    <img alt="event" src={image} className={`z-10 w-[333px] h-[207px] ${isActive ? 'w-[333px] h-[207px]' : 'w-[280px] h-[180px]'} `}/>
                    <div className={`bg-[#1f212d] shadow-cardShadow absolute z-20 flex flex-col w-[54.25px] h-[54.11px] left-10 top-40 text-center font-Montserrat text-white pt-2 ${isActive ? 'top-40' : 'top-[78%]'}`} >
                        <div className="text-[17px] font-semibold">{date}</div>
                        <div className="text-[12px] font-medium ">{month}</div>
                    </div>
                </div>
                <span className="z-10 flex flex-row items-center space-x-2 font-Montserrat text-[25px] font-bold pt-3">
                    <p className=" text-[#1f212d]">{title1}</p>
                    <p className="text-[#2da2dd]">{title2}</p>
                </span>
                <p className="font-Montserrat text-[12px] font-normal px-7 pt-1">{description}</p>
                <button className="bg-[#1f212d] font-proxima-nova-bold text-[13px] font-semibold text-[#e0ded2] w-[117.2px] h-[30.73px] shadow-cardShadow mt-3">Learn more</button>
            </div>
        </div>
    );
}

export default ArchiveCard;
