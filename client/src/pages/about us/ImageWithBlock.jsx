import React, { useState, useEffect } from "react";

const ImageWithBlock = ({ imagePath, altText, poste }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showInnerBlock, setShowInnerBlock] = useState(false);
  const [image, setImage] = useState(null);

  useEffect(() => {
    const importImage = async () => {
      try {
        // Dynamically import the image using await and directly access the default property
        const importedImage = await import(`./img/${imagePath}`);
        setImage(importedImage.default);
      } catch (error) {
        console.error("Error importing image:", error);
      }
    };

    importImage();
  }, [imagePath]);

  const handleMouseEnter = () => {
    setIsHovered(true);

    // Set a timeout to show the inner block after a certain time (e.g., 500 milliseconds)
    
      setShowInnerBlock(true);
    
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setShowInnerBlock(false);
  };

  return (
    <div
      className={
        "cont flex flex-col justify-center  relative w-[255px] h-[330px] cursor-pointer "
      }
      style={{
        borderColor: "#1F2029",
        transition: "0.7s",
        zIndex: 0,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {image && (
        <img
          className="w-[100%] h-[100%] object-cover absolute "
          src={image}
          alt={altText}
          style={{
            backgroundPosition: showInnerBlock ? "0 0" : "",
            backgroundSize: showInnerBlock
              ? "calc(100% - var(--offset)) calc(100% - var(--offset))"
              : "",
            filter: showInnerBlock ? "grayscale(40%)" : "",
            zIndex: 2,
          }}
        />
      )}
      {showInnerBlock && (
        <div
          className="flex flex-col justify-center items-center text-center absolute w-[90%] h-[90%]"
          style={{
            opacity: 1,
            transition: "opacity 0.7s, transform 0.7s",
            zIndex: 2
          }}
        >
          <div
            className="text-[13px] font-bold font-['Montserrat']"
            style={{ color: "#E0DED2", whiteSpace: "pre-line" }}
          >
            {poste}
          </div>
          <div
            className="text-[20px] font-bold font-['Qwitcher Grypen']"
            style={{ color: "#E0DED2" }}
          >
            {altText}
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageWithBlock;
