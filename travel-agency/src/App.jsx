import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Destinations from "./pages/Destinations";
import TripDetails from "./pages/TripDetails";
import CreaItinerario from "./pages/CreaItinerario";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Destinations />} />
       <Route path="/trip/:id" element={<TripDetails />} />
        <Route path="/trip/:id" element={<TripDetails />} />
        <Route path="/create-itinerary" element={<CreaItinerario />} />
      </Routes>

      <Footer />
    </>
  );
}