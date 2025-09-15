import React, { useState } from "react";
import "./Home.css";
import Menu from "./Menu";
import Footer from "./Footer";

function Home() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    "/pictures/image2.jpg",
    "/pictures/image3.jpg",
    "/pictures/image4.jpg",
    "/pictures/image5.jpg",
    "/pictures/image6.jpg",
    "/carDesign/carDesign2.webp",
  ];

  const partnerImage = "/ourPartners/ErdraXRapido.png";

  // Normal function to handle image click
  function handleImageClick(image) {
    setSelectedImage(image);
  }

  // Normal function to handle closing the image
  function handleClose() {
    setSelectedImage(null);
  }

  return (
    <>
      <Menu />

      {/* HOME VIDEO, TEXT CENTER */}
      <div className="home-cover-container">
        <div className="hero-image">
          <img
            src="/carDesign/carDesign2.webp"
            alt="Ciclón Rápido Racing Team Home Cover"
            className="hero-img"
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="home-overlay">
          <h1 className="display-3">
            Welcome to{" "}
            <i>
              <b>Ciclón Rápido</b>
            </i>
          </h1>
          <p className="lead mb-3">
            Discover amazing content and connect with us.
          </p>
          <a href="/ContactUS" className="btn btn-dark btn-lg">
            Contact Us
          </a>
        </div>
      </div>

      <br />

      {/* ALBUM EXAMPLES */}
      <section className="text-center container">
        <hr />
        <div className="row py-lg-3">
          <div className="col-lg-6 col-md-8 mx-auto">
            <p className="lead text-body-secondary">
              Discover our collection of motorsport excellence. Each image
              showcases the perfect blend of design and performance, reflecting
              our commitment to speed and precision.
            </p>
          </div>
        </div>
      </section>

      {/* ALBUM EXAMPLES PICTURES */}
      <div className="container mt-2 mb-5">
        <div className="row">
          {images.map((image, index) => (
            <div className="col-sm-4 mb-3 mb-sm-0" key={index}>
              <div className="home-card">
                <div className="home-card-body">
                  <img
                    src={image}
                    className="home-card-img-top"
                    alt={`image ${index + 2}`}
                    onClick={() => handleImageClick(image)}
                    style={{ cursor: "pointer" }}
                  />
                  <b></b>
                </div>
              </div>
              <br />
            </div>
          ))}
        </div>
        <br />
        <hr />
      </div>

      {/* Display the selected image in a larger view */}
      {selectedImage && (
        <div className="home-overlayExamples" onClick={handleClose}>
          <img src={selectedImage} alt="Selected" />
        </div>
      )}

      {/* OUR PARTNER SECTION */}
      <section className="home-partner-section py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 text-center mb-5">
              <h2 className="home-partner-title display-4 fw-bold text-dark mb-3">
                OUR PARTNERS
              </h2>
              <div className="home-partner-divider mx-auto mb-3"></div>
              <p className="home-partner-subtitle fs-5 text-muted">
                Strategic alliances driving innovation and excellence in
                motorsport
              </p>
            </div>

            <div className="col-12 col-md-10 col-lg-9 col-xl-8 text-center">
              <div className="home-partner-card p-4 p-md-5 position-relative">
                {/* Decorative elements */}
                <div className="partner-decoration partner-decoration-1"></div>
                <div className="partner-decoration partner-decoration-2"></div>
                
                  <img
                    src={partnerImage}
                    alt="Erdra X Rapido Partnership"
                    className="home-partner-image img-fluid"
                    onError={(e) => {
                      e.target.src =
                        "https://via.placeholder.com/600x300/0d6efd/ffffff?text=Erdra+X+Rapido+Partnership";
                    }}
                  />
                  <div className="partner-image-overlay"></div>

                <div className="home-partner-content mt-4">
                  <h4 className="home-partner-name fw-bold mb-2">
                    ERDRA × Ciclón RÁPIDO
                  </h4>
                  <p className="home-partner-description lead mb-3">
                    Excellence through innovation and costume
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;
