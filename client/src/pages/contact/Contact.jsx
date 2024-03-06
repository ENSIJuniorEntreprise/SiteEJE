import Rectangle from './../../assets/entreprise.png'

export function Contact() {
  return (
    <div>
      <section className="flex items-center justify-center bg-cover bg-center h-[1000px]" style={{ backgroundImage: `url(${Rectangle})` }}>
        <div
          className="w-[100%] h-[100%] flex justify-center items-center md:text-center "
          style={{ backgroundColor: "rgba(31, 32, 41, 0.6)" }}
        >
        <div className="xxs:h-[700px] xxs:w-[70vw] xxs:left-[10vw] xxs:top-[18vw] xs:w-[60vw] xs:h-[60vw] xs:left-[10vw] xs:top-[18vw] xsm:h-[45vw] xsm:w-[45vw] xsm:top-[10vw] xsm:left-[7vw] md:w-[40vw] md:h-[40vw] md:left-[3vw] md:top-[15vw] bg-[#2DA2DD] absolute inset-0 ddmd:w-[30vw] ddmd:h-[30vw] ddmd:top-[18vw] dlg:h-[700px] dlg:w-[600px] dlg:left-[10%] dlg:top-[150px]"></div>
        <div className="bg-beige z-50 dlg:h-[700px] dlg:w-[600px] dlg:left-[10%] dlg:top-[150px]"></div>



        </div>
      </section>
      </div>
  );
}
