import "./Archievement.css";
import Menu from "./Menu";
import Footer from "./Footer";

function Archievement() {

  return (
    <>
      <Menu />
      <main>
        {/* Hero Section */}
        <div className="achievements-cover-container">
          <img
            src="/pictures/home image1.jpg"
            alt="Achievement First Image"
            className="achievements-first-pic"
          />
          <div className="achievements-overlay1">
            <h1 className="display-3 fw-bold">OUR ACHIEVEMENTS</h1>
            <p className="lead mb-3">Victory in our hands.</p>
          </div>
        </div>
        
      </main> 
      <Footer />
    </>
  );
}

export default Archievement;
