// Import React
import React from "react";
import { bannerImg } from "../../assets/file";

// CardComponent.jsx
const ServiceComponent = ({
  paragraphs,
  onClickP,
  onHover,
  onHoverOut,
  selectedParagraph,
}) => {
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
    fontWeight: "bold",
    minWidth: "14em",
    padding: ".5em",
    textAlign: "center",
    // transform: "rotate(-90deg)",
    transition: "all 0.5s",
    textTransform: "uppercase",
    letterSpacing: ".1em",
  };

  return (
    <div className="lg:w-[350px] sm:w-full sm:h-72 lg:h-[500px]  rounded-[7px] lg:flex  lg:flex-col sm:grid sm:grid-cols-2 flex flex-col h-96 mx-12 sm:mx-0 px-0 sm:px-12 lg:px-0 gap-4 mt-[2rem] p-[.4rem]">
      {paragraphs.map((paragraph, index) => (
        <p
          key={index}
          style={pStyle}
          onClick={() => onClickP(index + 1)}
          onMouseOver={onHover}
          onMouseOut={onHoverOut}
        >
          <span
            style={{
              ...spanStyle,
              color: selectedParagraph === index + 1 ? "#2DA2DD" : "#E0DED2",
            }}
          >
            {paragraph.text}
          </span>
        </p>
      ))}
    </div>
  );
};

export default ServiceComponent;
