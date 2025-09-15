import "./ourHistory.css";
import Menu from "./Menu";
import Footer from "./Footer";

function OurHistory() {
  return (
    <>
      <Menu />
      
      {/* COVER PART */}
      <div className="ourHistory-cover-container">
        <img
          src="/ourHistory/ourHistoryCover.jpg"
          alt="Our History Cover"
          className="cover-image"
        />
        <div className="ourHistory-overlay">
          <div className="container">
            <h1 className="ourHistory-title display-3 fw-bold">Our History</h1>
            <div className="scroll-indicator">
              <span></span>
            </div>
          </div>
        </div>
      </div>

      {/* FIRST PART */}
      <section className="ourHistory-section py-5">
        <div className="container col-xxl-10 px-4 py-5">
          <div className="row align-items-center g-5 py-5">
            <div className="col-12 col-lg-6 order-lg-1 order-2">
              <div className="section-header mb-4">
                <span className="section-badge">Since 2024</span>
                <h1 className="display-5 fw-bold mb-3">
                  Our Founding Story
                </h1>
                <div className="title-divider"></div>
              </div>
              <div className="ourHistory-content">
                <p>
                  Founded in 2024, our racing team emerged from a shared passion for
                  speed, precision, and the thrill of competition. What began as a
                  small group of enthusiasts has evolved into a formidable presence
                  in the world of motorsport, competing at various prestigious
                  events around the globe.
                </p>
                <p>
                  Over the years, we have cultivated a reputation for excellence, 
                  achieving numerous podium finishes and securing valuable partnerships 
                  that have fueled our growth. As we continue to push the boundaries 
                  of performance, we remain dedicated to fostering talent, embracing 
                  innovation, and inspiring the next generation of racers.
                </p>
              </div>
            </div>
            <div className="col-12 col-lg-6 order-lg-2 order-1 mb-4 mb-lg-0">
              <div className="image-container">
                <img
                  src="/ourHistory/ourHistory1.jpg"
                  className="img-fluid rounded-3 shadow"
                  alt="Founders Image"
                  loading="lazy"
                />
                <div className="image-caption">
                  Our founders: Parkin and Vinit
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECOND PART */}
      <section className="ourHistory-section py-5 bg-light">
        <div className="container col-xxl-10 px-4 py-5">
          <div className="row align-items-center g-5 py-5">
            <div className="col-12 col-lg-6 mb-4 mb-lg-0">
              <div className="image-container">
                <img
                  src="/ourHistory/ourHistory2.png"
                  className="img-fluid rounded-3 shadow"
                  alt="Team Logo Evolution"
                  loading="lazy"
                />
                <div className="image-caption">
                  Our team first designed logo
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="section-header mb-4">
                <span className="section-badge">The Early Days</span>
                <h1 className="display-5 fw-bold mb-3">
                  Building From The Ground Up
                </h1>
                <div className="title-divider"></div>
              </div>
              <div className="ourHistory-content">
                <p>
                  In our early years, we focused on grassroots racing, participating
                  in local events and honing our skills. Among our founders, Parkin
                  Arsanamanee faced significant challenges in life. Struggling with
                  personal loss, he found himself at a crossroads, unsure of his
                  next steps.
                </p>
                <p>
                  Recognizing his potential and determination, fellow founder Vinit
                  Thongchaidamrongkul reached out to him with an invitation to
                  create something extraordinary: Ciclón Rápido. This partnership
                  not only reignited Parkin's passion for racing but also laid the
                  foundation for a team built on resilience and camaraderie.
                </p>
                <blockquote className="history-quote">
                  "Somos los Granadores. We are the winner."
                  <footer>- Parkin Arsanamanee, Co-Founder</footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default OurHistory;