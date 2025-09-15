import React, { useState } from "react";
import "./CarDesign.css";
import Menu from "./Menu";
import Footer from "./Footer";

function CarDesign() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedDescription, setSelectedDescription] = useState("");

  const images = [
    {
      src: "/carDesign/carDesign1.jpg",
      description:
        "We’re thrilled to unveil our latest masterpiece at Ciclón Rápido—the exclusive ”Vin-It“ edition!",
    },
    {
      src: "/carDesign/carDesign2.webp",
      description:
        "Rapido V1 Fun Fact: Before we settled on our livery, this used to be the livery of our 911 RSR!",
    },
    {
      src: "/carDesign/carDesign3.jpg",
      description: "New rims.",
    },
    {
      src: "/carDesign/carDesign4.jpg",
      description: "An initial idea of our racing helmet.",
    },
    {
      src: "/carDesign/carDesign5.jpg",
      description:
        "Ciclón Rápido Sirius: The imagination starts from the tip of the pencil, right?🖊 (Part 1)",
    },
    {
      src: "/carDesign/carDesign6.jpg",
      description: "Ciclón Rápido Sirius (Part 2)",
    },
  ];

  // Function to handle image click
  function handleImageClick(image) {
    setSelectedImage(image.src); // Set to the image source
    setSelectedDescription(image.description); // Set the description
  }

  // Function to handle closing the image
  function handleClose() {
    setSelectedImage(null);
    setSelectedDescription("");
  }

  return (
    <>
      <Menu />
      <div className="car-design-cover-container">
        <img
          src="/pictures/carDesignOverlay.webp"
          alt="Car Design Overlay"
          className="car-design-background-image"
        />
        <div className="car-design-overlay">
          <div className="car-design-text-overlay">
            <h1 className="display-1 fw-bold">Designed for the Best Riding</h1>
          </div>
        </div>
      </div>

      <div className="car-design-album py-5">
        <div className="container">
          <hr />
          <br />

          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-5">
            {images.map((image, index) => (
              <div className="col" key={index}>
                <div
                  className="car-design-card shadow-sm"
                  onClick={() => handleImageClick(image)}
                  style={{ cursor: "pointer" }}
                >
                  <img
                    className="car-design-card-img-top"
                    src={image.src}
                    alt={`Car Design ${index + 1}`}
                  />
                  <div className="card-body">
                    <p className="card-text">{image.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Display the selected image in a larger view */}
      {selectedImage && (
        <div className="car-design-overlayExamples" onClick={handleClose}>
          <img src={selectedImage} alt="Selected" className="car-design-selected-image" />
          <p className="car-design-image-description">{selectedDescription}</p>
        </div>
      )}

      <Footer />
    </>
  );
}

export default CarDesign;