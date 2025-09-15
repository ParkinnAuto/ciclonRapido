import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <>
      {/*FOOTER*/}
      <div className="container">
        <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-6 py-5 my-5 border-top">
          <div className="col mb-4 mb-md-3">
            <p className="text-body-secondary">© Ciclón Rápido 2025</p>
          </div>

          <div className="col mb-4 mb-md-3"></div>

          <div className="col mb-4 mb-md-3">
            <h5 className="nav-item mb-3 mb-md-2">
              <a href="/Drivers" className="nav-link p-0 text-head fw-bold">
                OUR TEAM
              </a>
            </h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="/Drivers" className="nav-link p-0 text-body-secondary">
                  Drivers
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/Cars" className="nav-link p-0 text-body-secondary">
                  Cars
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="/Archievement"
                  className="nav-link p-0 text-body-secondary"
                >
                  Achievement
                </a>
              </li>
            </ul>
          </div>

          <div className="col mb-4 mb-md-3">
            <h5 className="nav-item mb-3 mb-md-2">
              <a href="/Gallery" className="nav-link p-0 text-head fw-bold">
                GALLERY
              </a>
            </h5>
          </div>

          <div className="col mb-4 mb-md-3">
            <h5 className="nav-item mb-3 mb-md-2">
              <a href="/CarDesign" className="nav-link p-0 text-head fw-bold">
                DESIGN
              </a>
            </h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a
                  href="/CarDesign"
                  className="nav-link p-0 text-body-secondary"
                >
                  Cars Design
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="/Stationery"
                  className="nav-link p-0 text-body-secondary"
                >
                  Staionery
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/Dress" className="nav-link p-0 text-body-secondary">
                  Dress
                </a>
              </li>
            </ul>
          </div>

          <div className="col mb-4 mb-md-3">
            <h5 className="nav-item mb-3 mb-md-2">
              <a href="/ourHistory" className="nav-link p-0 text-head fw-bold">
                ABOUT US
              </a>
            </h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a
                  href="/ourHistory"
                  className="nav-link p-0 text-body-secondary"
                >
                  Our History
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="/ourPartners"
                  className="nav-link p-0 text-body-secondary"
                >
                  Our Partners
                </a>
              </li>
              <li className="nav-item mb-2">
                <a
                  href="/ContactUs"
                  className="nav-link p-0 text-body-secondary"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;
