import { useParams } from "react-router-dom";
import { useState } from "react";
import defaultTrips from "../data/trips";

export default function TripDetails() {
  const { id } = useParams();

  const savedTrips = JSON.parse(localStorage.getItem("trips")) || [];

  const allTrips = [...defaultTrips, ...savedTrips];

  const trip = allTrips.find((t) => t.id === Number(id));

  const [startDate, setStartDate] = useState("");
  const [metodo, setMetodo] = useState("");

  if (!trip) return <h2 className="p-10">Viaggio non trovato</h2>;

  const calculateEndDate = () => {
    if (!startDate) return "";
    const start = new Date(startDate);
    start.setDate(start.getDate() + trip.days);
    return start.toISOString().split("T")[0];
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Pagamento inviato con successo! ");
  };

  return (
    <div className="p-10 max-w-2xl mx-auto">

      <h1 className="text-3xl font-bold mb-4">
        {trip.title}
      </h1>

      <img
        src={trip.img}
        className="w-full h-80 object-cover rounded-xl mb-4"
        alt={trip.title}
      />

      <p className="mb-2">{trip.description}</p>

      <p>Durata: {trip.days} giorni</p>

      <p className="font-bold text-xl mt-2">
        Costo: €{trip.price}
      </p>

      <form onSubmit={handleSubmit} className="mt-6">

        <label className="block mb-1">Data Arrivo</label>
        <input
          type="date"
          className="border p-2 w-full mb-3"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          required
        />

        {startDate && (
          <p className="mb-3">
            Data Fine: <strong>{calculateEndDate()}</strong>
          </p>
        )}

        <label className="block mb-1">
          Metodo di Pagamento
        </label>

        <select
          className="border p-2 w-full mb-4"
          value={metodo}
          onChange={(e) => setMetodo(e.target.value)}
          required
        >
          <option value="">-- Scegli --</option>
          <option value="carta">Carta</option>
          <option value="bonifico">Bonifico</option>
        </select>

        {metodo && (
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-900"
          >
            Conferma Pagamento
          </button>
        )}

      </form>

    </div>
  );
}