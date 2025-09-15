import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import "./App.css";
import Drivers from "./Drivers";
import Cars from "./Cars";
import Archievement from "./Archievement";
import Gallery from "./Gallery";
import CarDesign from "./CarDesign";
import Stationery from "./Stationery";
import Dress from "./Dress";
import OurHistory from "./ourHistory";
import OurPartners from "./ourPartners";
import ContactUs from "./ContactUs";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} /> {/* Route for the Home page */}
      <Route path="/Drivers" element={<Drivers />} />{" "}
      {/* Route for the Drivers page */}
      <Route path="/Cars" element={<Cars />} /> {/* Route for the Cars page */}
      <Route path="/Archievement" element={<Archievement />} />{" "}
      {/* Route for the Archievement page */}
      <Route path="/Gallery" element={<Gallery />} />{" "}
      {/* Route for the Gallery page */}
      <Route path="/CarDesign" element={<CarDesign />} />{" "}
      {/* Route for the CarDesign page */}
      <Route path="/Stationery" element={<Stationery />} />{" "}
      {/* Route for the CarDesign page */}
      <Route path="/Dress" element={<Dress />} />{" "}
      {/* Route for the Dress page */}
      <Route path="/ourHistory" element={<OurHistory />} />{" "}
      {/* Route for the Our History page */}
      <Route path="/ourPartners" element={<OurPartners />} />{" "}
      {/* Route for the Our Partners page */}
      <Route path="/ContactUs" element={<ContactUs />} />{" "}
      {/* Route for the Dress page */}
    </Routes>
  );
}

export default App;
