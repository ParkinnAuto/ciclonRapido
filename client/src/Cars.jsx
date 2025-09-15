import "./Cars.css";
import Menu from "./Menu";
import Footer from "./Footer";

function Cars() {
  return (
    <>
      <Menu />
      
      {/* Header Section */}
      <div className="cars-header py-5 text-center">
        <div className="container">
          <h1 className="display-4 fw-bold mb-3">OUR RACING FLEET</h1>
          <p className="lead cars-subtitle">Premium race cars engineered for victory</p>
          <div className="header-divider mx-auto"></div>
        </div>
      </div>

      {/* FIRST CAR */}
      <div className="container col-xxl-10 px-4 py-5 car-section">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-12 col-md-10 col-lg-6 mx-auto car-image-container">
            <div className="image-wrapper">
              <img
                src="/cars/Porsche911.jpg"
                className="img-fluid car-image"
                alt="Porsche 911 RSR"
                loading="lazy"
              />
              <div className="car-overlay">
                <span className="car-badge">GERMANY</span>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 car-content">
            <h1 className="car-title fw-bold mb-4">Porsche 911 RSR</h1>
            <div className="car-details">
              <div className="car-specs mb-3">
                <span className="spec-item"><strong>Country:</strong> Germany</span>
                <span className="spec-item"><strong>Class:</strong> GTE/GTLM</span>
                <span className="spec-item"><strong>Engine:</strong> 4.2L Flat-6</span>
              </div>
              <p className="car-description">
                The Porsche 911 RSR is a high-performance race car developed by Porsche for GT endurance racing. 
                Based on the Porsche 911 but featuring a mid-engine layout for better balance and aerodynamics, 
                this car competes in the GTE/GTLM class and has achieved numerous victories in endurance racing, 
                including at Le Mans, Sebring, and Daytona.
              </p>
              <div className="racing-series mt-3">
                <h6>Race Programs:</h6>
                <ul>
                  <li>FIA World Endurance Championship (WEC)</li>
                  <li>IMSA WeatherTech SportsCar Championship</li>
                  <li>24 Hours of Le Mans</li>
                </ul>
              </div>
            </div>
            <div className="d-flex justify-content-center mt-4">
              <span className="badge rounded-pill text-bg-primary fs-5 car-type-badge">
                GT3 Car
              </span>
            </div>
          </div>
        </div>
        <hr className="car-divider" />
      </div>

      {/* SECOND CAR */}
      <div className="container col-xxl-10 px-4 py-5 car-section">
        <div className="row align-items-center g-5 py-5">
          <div className="col-12 col-md-10 col-lg-6 mx-auto car-image-container">
            <div className="image-wrapper">
              <img
                src="/cars/Ferrari458.jpg"
                className="img-fluid car-image"
                alt="Ferrari 458 GT3"
                loading="lazy"
              />
              <div className="car-overlay">
                <span className="car-badge">ITALY</span>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 car-content">
            <h1 className="car-title fw-bold mb-4">Ferrari 458 GT3</h1>
            <div className="car-details">
              <div className="car-specs mb-3">
                <span className="spec-item"><strong>Country:</strong> Italy</span>
                <span className="spec-item"><strong>Class:</strong> GT3</span>
                <span className="spec-item"><strong>Engine:</strong> 4.5L V8</span>
              </div>
              <p className="car-description">
                The Ferrari 458 GT3 is a race-spec version of the Ferrari 458 Italia, developed for GT3-class racing. 
                It features a 4.5L naturally aspirated V8 engine producing around 550 hp, with significant aerodynamic 
                and suspension upgrades for track performance. The car has been highly successful in endurance and 
                sprint GT3 racing, competing against models from Porsche, Lamborghini, and Mercedes-AMG.
              </p>
              <div className="racing-series mt-3">
                <h6>Race Programs:</h6>
                <ul>
                  <li>Blancpain GT Series</li>
                  <li>FIA GT3 European Championship</li>
                  <li>IMSA SportsCar Championship</li>
                  <li>24H Series</li>
                </ul>
              </div>
            </div>
            <div className="d-flex justify-content-center mt-4">
              <span className="badge rounded-pill text-bg-primary fs-5 car-type-badge">
                GT3 Car
              </span>
            </div>
          </div>
        </div>
        <hr className="car-divider" />
      </div>

      {/* THIRD CAR */}
      <div className="container col-xxl-10 px-4 py-5 car-section">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-12 col-md-10 col-lg-6 mx-auto car-image-container">
            <div className="image-wrapper">
              <img
                src="/cars/SuperFormula.jpg"
                className="img-fluid car-image"
                alt="SuperFormula Honda SF23"
                loading="lazy"
              />
              <div className="car-overlay">
                <span className="car-badge">JAPAN</span>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 car-content">
            <h1 className="car-title fw-bold mb-4">SF23 (SuperFormula Honda)</h1>
            <div className="car-details">
              <div className="car-specs mb-3">
                <span className="spec-item"><strong>Country:</strong> Japan</span>
                <span className="spec-item"><strong>Class:</strong> Open Wheel</span>
                <span className="spec-item"><strong>Engine:</strong> 2.0L Turbo I4</span>
              </div>
              <p className="car-description">
                The SF23 is a next-generation open-wheel race car used in the Super Formula series, 
                Japan&aposs top single-seater racing category. Developed by Dallara, it features a lightweight 
                chassis with improved aerodynamics and sustainability-focused technology. The car runs on a 
                2.0L turbocharged inline-4 engine, supplied by Honda (Mugen) or Toyota (TRD), producing around 
                550-600 hp. The SF23 was introduced for the 2023 season with a focus on eco-friendly innovations 
                such as sustainable materials and carbon-neutral fuel.
              </p>
              <div className="racing-series mt-3">
                <h6>Race Program:</h6>
                <ul>
                  <li>Japanese Super Formula Championship</li>
                </ul>
              </div>
            </div>
            <div className="d-flex justify-content-center mt-4">
              <span className="badge rounded-pill text-bg-success fs-5 car-type-badge">
                SuperFormula Car
              </span>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
}

export default Cars;