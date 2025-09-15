import "./ourPartner.css";
import Menu from "./Menu";
import Footer from "./Footer";

function OurPartners() {
  // Array of partner images
  const partnerImages = [
    "/ourPartners/Erdra.png",
  ];

  return (
    <>
      <Menu />

      <section className="our-partners-section container py-5">
        <h1 className="our-partners-title text-center mb-5">Our Partners</h1>
        
        <div className="row justify-content-center">
          {partnerImages.map((imagePath, index) => (
            <div key={index} className="col-6 col-md-4 col-lg-3 mb-4">
              <div className="partner-card text-center p-3">
                <img 
                  src={imagePath} 
                  alt={`Partner ${index + 1}`} 
                  className="img-fluid partner-image"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/200x100?text=Partner+Logo';
                  }}
                />
              </div>
            </div>
          ))}
        </div>
        
        {/* ส่วนแสดงข้อความเมื่อไม่มีพาร์ทเนอร์ */}
        {partnerImages.length === 0 && (
          <div className="text-center py-5">
            <p className="text-muted">ไม่มีพาร์ทเนอร์ในขณะนี้</p>
          </div>
        )}
      </section>

      <Footer />
    </>
  );
}

export default OurPartners;