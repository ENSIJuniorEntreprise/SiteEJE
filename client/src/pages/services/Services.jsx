import { useState } from "react";
import { bannerImg } from "../../assets/file";
export function Services() {
  // const [clickedP, setClickedP] = useState(null);

  // Background pour le banner //
  const divStyle = {
    backgroundImage: `url(${bannerImg})`,
    backgroundSize: "cover",
  };

  // css pour la partie services //
  const cardStyle = {
    width: "1000px",
    height: "300px",
    borderRadius: "4px",
    display: "flex",
    gap: "15px",
    padding: ".4em",
  };

  const pStyle = {
    height: "100%",
    flex: "1",
    overflow: "hidden",
    cursor: "pointer",
    borderRadius: "30px",
    transition: "all 0.5s",
    // background: "#212121",
    backgroundImage: `url(${bannerImg})`,
    border: "1px solid #2DA2DD",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const spanStyle = {
    minWidth: "14em",
    padding: ".5em",
    textAlign: "center",
    transform: "rotate(-90deg)",
    transition: "all 0.5s",
    textTransform: "uppercase",
    color: "#2DA2DD",
    letterSpacing: ".1em",
  };

  const onHover = (event) => {
    event.currentTarget.style.flex = "4";
    event.currentTarget.querySelector("span").style.transform = "rotate(0)";
  };

  const onHoverOut = (event) => {
    event.currentTarget.style.flex = "1";
    event.currentTarget.querySelector("span").style.transform =
      "rotate(-90deg)";
  };

  // const onClickP = (index) => {
  //   setClickedP(index === clickedP ? null : index);
  // };

  return (
    <div className="bg-[#E0DED2]">
      <div
        className=" h-[400px] w-[100%] flex items-center justify-center "
        style={divStyle}
      >
        <div className="border-4 border-[#2DA2DD] w-[500px] flex justify-center items-center ">
          <div className="text-[#E0DED2] text-5xl font-semibold p-4  ">
            <span className="text-[#2DA2DD]">What </span> We do
          </div>
        </div>
      </div>

      <div className="text-[#1F2029] flex text-5xl font-semibold p-4 justify-center  ">
        <span className="text-[#2DA2DD]">Our </span> Services
      </div>
      {/* partie services */}
      <div className="flex justify-center">
        <div className="card" style={cardStyle}>
          <p style={pStyle} onMouseOver={onHover} onMouseOut={onHoverOut}>
            <span style={spanStyle}>HOVER ME</span>
          </p>
          <p style={pStyle} onMouseOver={onHover} onMouseOut={onHoverOut}>
            <span style={spanStyle}>HOVER ME</span>
          </p>
          <p style={pStyle} onMouseOver={onHover} onMouseOut={onHoverOut}>
            <span style={spanStyle}>HOVER ME</span>
          </p>
          <p style={pStyle} onMouseOver={onHover} onMouseOut={onHoverOut}>
            <span style={spanStyle}>HOVER ME</span>
          </p>
        </div>
      </div>
    </div>
  );
}

{
  /* <div className="flex justify-center">
        <div className="card" style={cardStyle}>
          {[0, 1, 2, 3].map((index) => (
            <p
              key={index}
              style={pStyle}
              onMouseOver={onHover}
              onMouseOut={onHoverOut}
              onClick={() => onClickP(index)}
            >
              <span style={spanStyle}>HOVER ME</span>
              {clickedP === index && <div>Clicked! Show your text here</div>}
            </p>
          ))}
        </div>
      </div> */
}
