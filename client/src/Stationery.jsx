import React, { useState } from "react";
import "./Stationery.css";
import Menu from "./Menu";
import Footer from "./Footer";

function Stationery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedDescription, setSelectedDescription] = useState("");

  const images = [
    {
      src: "/stationery/staionery1.jpg",
      description: "Ciclón Rápido Inthanon fountain pen. ✒️",
    },
  ];

  // Function to handle image click
  function handleImageClick(image) {
    setSelectedImage(image.src);
    setSelectedDescription(image.description);
  }

  // Function to handle closing the image
  function handleClose() {
    setSelectedImage(null);
    setSelectedDescription("");
  }

  return (
    <>
      <Menu />
      <div className="stationery-cover-container">
        <img
          src="/pictures/stationeryOverlay.jpg"
          alt="Stationery Design Overlay"
          className="stationery-background-image"
        />
        <div className="stationery-design-overlay">
          <div className="stationery-text-overlay">
            <h1 className="display-1 fw-bold">Designed for the Best Writing</h1>
          </div>
        </div>
      </div>

      <div className="stationery-album py-5">
        <div className="container">
          <hr />
          <br />

          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-5">
            {images.map((image, index) => (
              <div className="col" key={index}>
                <div
                  className="stationery-card shadow-sm"
                  onClick={() => handleImageClick(image)}
                  style={{ cursor: "pointer" }}
                >
                  <img
                    className="stationery-card-img"
                    src={image.src}
                    alt={`Stationery ${index + 1}`}
                    width="100%"
                    height="225"
                  />
                  <div className="stationery-card-body">
                    <p className="stationery-card-text">{image.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Display the selected image in a larger view */}
      {selectedImage && (
        <div className="stationery-overlay-examples" onClick={handleClose}>
          <img src={selectedImage} alt="Selected" />
          <p className="stationery-image-description">{selectedDescription}</p>
        </div>
      )}

      <Footer />
    </>
  );
}

export default Stationery;