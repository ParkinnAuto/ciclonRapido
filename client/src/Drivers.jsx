import "./Drivers.css";
import Menu from "./Menu";
import Footer from "./Footer";

function Drivers() {
  return (
    <>
      <Menu />

      <div className="drivers-container">
        {/* Header Section */}
        <div className="container py-5 text-center drivers-header">
          <h1 className="display-4 fw-bold">MEET OUR DRIVERS</h1>
          <p className="lead">
            The talented racers behind Ciclón Rápido&aposs success
          </p>
          <div className="divider mx-auto"></div>
        </div>

        {/* FIRST DRIVER */}
        <div className="container col-xxl-10 px-4 py-5 driver-card">
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-12 col-sm-10 col-md-8 col-lg-6 mx-auto driver-image-container text-center">
              <div className="image-wrapper">
                <img
                  src="/pictures/mainDriver1.jpg"
                  className="img-fluid rounded-3 shadow-lg driver-image"
                  alt="mainDriver1"
                />
                <div className="driver-overlay">
                  <span className="driver-number">01</span>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 text-center text-lg-start driver-info">
              <div className="d-flex justify-content-center">
                <h1 className="fw-bold mb-3 driver-name">NOVIDER</h1>
              </div>
              <div className="driver-stats-container">
                <p className="lead driver-stats">
                  <strong>Gran Turismo 7 stats: 50 races</strong>
                  <br />
                  <span className="stat-item">
                    - Driver rating: <span className="stat-value">A</span>
                  </span>
                  <br />
                  <span className="stat-item">
                    - Sportsmanship rating:{" "}
                    <span className="stat-value">S</span>
                  </span>
                  <br />
                  <span className="stat-item">
                    - Pole Positions: <span className="stat-value">20x</span>
                  </span>
                  <br />
                  <span className="stat-item">
                    - Race Wins: <span className="stat-value">21</span>
                  </span>
                  <br />
                  <span className="stat-item">
                    - Clean races: <span className="stat-value">41</span>
                  </span>
                </p>
              </div>
              <div className="d-flex justify-content-center">
                <span className="badge rounded-pill text-bg-primary fs-5 driver-badge">
                  Main Driver
                </span>
              </div>
            </div>
          </div>
          <hr className="driver-divider" />
        </div>

        {/* SECOND DRIVER */}
        <div className="container col-xxl-10 px-4 py-5 driver-card">
          <div className="row align-items-center g-5 py-5">
            <div className="col-12 col-sm-10 col-md-8 col-lg-6 mx-auto driver-image-container text-center">
              <div className="image-wrapper">
                <img
                  src="/pictures/mainDriver2.jpg"
                  className="img-fluid rounded-3 shadow-lg driver-image"
                  alt="mainDriver2"
                />
                <div className="driver-overlay">
                  <span className="driver-number">02</span>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 text-center text-lg-start driver-info">
              <div className="d-flex justify-content-center">
                <h1 className="fw-bold mb-3 driver-name">SUNS</h1>
              </div>
              <div className="driver-stats-container">
                <p className="lead driver-stats">
                  <strong>Gran Turismo 7 stats: 50 races</strong>
                  <br />
                  <span className="stat-item">
                    - Driver rating: <span className="stat-value">A</span>
                  </span>
                  <br />
                  <span className="stat-item">
                    - Sportsmanship rating:{" "}
                    <span className="stat-value">S</span>
                  </span>
                  <br />
                  <span className="stat-item">
                    - Pole Positions: <span className="stat-value">20x</span>
                  </span>
                  <br />
                  <span className="stat-item">
                    - Race Wins: <span className="stat-value">21</span>
                  </span>
                  <br />
                  <span className="stat-item">
                    - Clean races: <span className="stat-value">41</span>
                  </span>
                </p>
              </div>
              <div className="d-flex justify-content-center">
                <span className="badge rounded-pill text-bg-primary fs-5 driver-badge">
                  Main Driver
                </span>
              </div>
            </div>
          </div>
          <hr className="driver-divider" />
        </div>

        {/* THIRD DRIVER */}
        <div className="container col-xxl-10 px-4 py-5 driver-card">
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-12 col-sm-10 col-md-8 col-lg-6 mx-auto driver-image-container text-center">
              <div className="image-wrapper">
                <img
                  src="/pictures/reserveDriver1.jpg"
                  className="img-fluid rounded-3 shadow-lg driver-image"
                  alt="reserveDriver1"
                  loading="lazy"
                />
                <div className="driver-overlay">
                  <span className="driver-number">03</span>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 text-center text-lg-start driver-info">
              <div className="d-flex justify-content-center">
                <h1 className="fw-bold mb-3 driver-name">YNASNSD</h1>
              </div>
              <div className="driver-stats-container">
                <p className="lead driver-stats">
                  <strong>Gran Turismo 7 stats: 50 races</strong>
                  <br />
                  <span className="stat-item">
                    - Driver rating: <span className="stat-value">B</span>
                  </span>
                  <br />
                  <span className="stat-item">
                    - Sportsmanship rating:{" "}
                    <span className="stat-value">S</span>
                  </span>
                  <br />
                  <span className="stat-item">
                    - Pole Positions: <span className="stat-value">10x</span>
                  </span>
                  <br />
                  <span className="stat-item">
                    - Race Wins: <span className="stat-value">19</span>
                  </span>
                  <br />
                  <span className="stat-item">
                    - Clean races: <span className="stat-value">47</span>
                  </span>
                </p>
              </div>
              <div className="d-flex justify-content-center">
                <span className="badge rounded-pill text-bg-success fs-5 driver-badge">
                  Reserve Driver
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Drivers;
