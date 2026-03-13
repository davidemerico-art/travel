import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Destinations from "./pages/Destinations";
import TripDetails from "./pages/TripDetails";
import CreaItinerario from "./pages/CreaItinerario";
import Login from "./pages/Login";
import Register from "./pages/Register";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* HOME */}
        <Route path="/CreaItinerario" element={<CreaItinerario />} />

        {/* DESTINAZIONI */}
        <Route path="/destinations" element={<Destinations />} />

        {/* DETTAGLIO VIAGGIO */}
        <Route path="/trip/:id" element={<TripDetails />} />

        {/* CREA ITINERARIO */}
        <Route path="/create-itinerary" element={<CreaItinerario />} />
        {/* LOGIN */}
        <Route path="/login" element={<Login />} />
        {/* REGISTER */}
        <Route path="/register" element={<Register />} />
      </Routes>

      <Footer />
    </>
  );
}