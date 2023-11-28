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
  const cardStyle = {
    width: "350px",
    height: "500px",
    borderRadius: "7px",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    padding: ".4em",
    marginTop: "2rem",
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
    <div className="card" style={cardStyle}>
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
