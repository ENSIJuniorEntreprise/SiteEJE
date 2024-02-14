function Card({ title1 , title2 , text , isBlueTitle}){
    return(
        <div className="flex flex-col items-center bg-[#1f212d] w-3/4 md:w-[669px] h-auto md:h-[322px] pt-4 md:pt-6 pb-4 md:pb-6 pl-4 md:pl-10 pr-4 md:pr-10 shadow drop-shadow-cardShadow">
            <span className="flex flex-row pt-2 items-center">
                {isBlueTitle ? (
                    <>
                    <p className="mb-2 font-bold tracking-wide text-[rgb(45,162,221)] md:text-4xl font-Montserrat">{title1}</p>
                    <p className="mb-2 font-bold tracking-wide text-[#e0ded2] pl-3 md:text-4xl font-Montserrat">{title2}</p>
                    </>
                ) : (
                    <>
                    <p className="mb-2 font-bold tracking-wide text-[#e0ded2] md:text-4xl font-Montserrat">{title1}</p>
                    <p className="mb-2 font-bold tracking-wide text-[rgb(45,162,221)] pl-3 md:text-4xl font-Montserrat">{title2}</p>
                    </>
                )}

            </span>
            <p className="text-[#e0ded2] text-center font-Montserrat font-medium md:text-xl text-xs leading-normal md:leading-[25px] w-full md:w-[450px] md:h-[119.39px] md:pt-1">
                {text}
            </p>
            <a href="#" class="items-center w-1/4 md:w-[250px] h-auto font-Montserrat text-xs md:text-xl font-semibold text-center text-[#e0ded2] bg-transparent border-[#2da2dd] py-1 border-2 md:mt-10 mt-5 shadow-cardShadow">
            Learn more
            </a>
        </div>
    )
}
export default Card