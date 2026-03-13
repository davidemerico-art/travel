import { useNavigate } from "react-router-dom";
import defaultTrips from "../data/trips";

export default function Destinations() {
  const navigate = useNavigate();

  const savedTrips = JSON.parse(localStorage.getItem("trips")) || [];
  const trips = [...defaultTrips, ...savedTrips];

  return (
    <div className="p-10 bg-gray-100 min-h-screen">

      {/* HEADER CON BOTTONE */}
      <div className="flex justify-between items-center mb-10">

        <h1 className="text-4xl font-bold">
          Le Nostre Destinazioni
        </h1>

        <button
          onClick={() => navigate("/create-itinerary")}
          className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
        >
           Crea Itinerario
        </button>

      </div>

      {/* CARD */}
      <div className="grid md:grid-cols-4 gap-6">

        {trips.map((trip) => (
          <div
            key={trip.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <img
              src={trip.img}
              className="w-full h-64 object-cover"
              alt={trip.title}
            />

            <div className="p-4">
              <h2 className="text-xl font-bold">
                {trip.title}
              </h2>

              <p className="text-gray-500">
                {trip.days} giorni
              </p>

              <button
                onClick={() => navigate(`/trip/${trip.id}`)}
                className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Dettagli
              </button>

            </div>
          </div>
        ))}

      </div>
    </div>
  );
}