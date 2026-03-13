import trips from "../data/trips";
import { useParams } from "react-router-dom";
import { useState } from "react";

export default function TripDetails() {
  const { id } = useParams();
  const trip = trips.find((t) => t.id === Number(id));

  const [startDate, setStartDate] = useState("");
  const [metodo, setMetodo] = useState("");

  if (!trip) return <h2 className="p-10">Viaggio non trovato</h2>;

  // Calcolo data fine
  const calculateEndDate = () => {
    if (!startDate) return "";
    const start = new Date(startDate);
    start.setDate(start.getDate() + trip.days);
    return start.toISOString().split("T")[0];
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Pagamento inviato con successo! 🎉");
  };

  return (
    <div className="p-10 max-w-2xl mx-auto">

      <h1 className="text-3xl font-bold mb-4">
        {trip.title}
      </h1>

      <p className="mb-2">{trip.description}</p>

      <p>Durata: {trip.days} giorni</p>

      <p className="font-bold text-xl mt-2">
        Costo: €{trip.price}
      </p>

      {/* FORM PRENOTAZIONE */}
      <form onSubmit={handleSubmit} className="mt-6">

        <h2 className="text-xl font-semibold mb-4">
          Prenota il Viaggio
        </h2>

        {/* DATA ARRIVO */}
        <label className="block mb-1">Data Arrivo</label>
        <input
          type="date"
          className="border p-2 w-full mb-3"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          required
        />

        {/* DATA FINE */}
        {startDate && (
          <p className="mb-3">
            Data Fine: <strong>{calculateEndDate()}</strong>
          </p>
        )}

        {/* METODO PAGAMENTO */}
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

        {/* PAGAMENTO CARTA */}
        {metodo === "carta" && (
          <div className="mb-4">

            <h3 className="font-semibold mb-2">
              Pagamento con Carta
            </h3>

            <input
              type="text"
              placeholder="Numero carta (16 cifre)"
              maxLength={16}
              className="border p-2 w-full mb-2"
              required
            />

            <input
              type="text"
              placeholder="Scadenza MM/AA"
              className="border p-2 w-full mb-2"
              required
            />

            <input
              type="text"
              placeholder="Nome titolare"
              className="border p-2 w-full mb-2"
              required
            />

            <input
              type="password"
              placeholder="CVV"
              maxLength={3}
              className="border p-2 w-full"
              required
            />
          </div>
        )}

        {/* PAGAMENTO BONIFICO */}
        {metodo === "bonifico" && (
          <div className="mb-4">

            <h3 className="font-semibold mb-2">
              Bonifico Bancario
            </h3>

            <input
              type="text"
              placeholder="Beneficiario"
              className="border p-2 w-full mb-2"
              required
            />

            <input
              type="text"
              placeholder="IBAN"
              className="border p-2 w-full mb-2"
              required
            />

            <input
              type="number"
              placeholder="Importo"
              className="border p-2 w-full mb-2"
              required
            />

            <input
              type="text"
              placeholder="Causale"
              className="border p-2 w-full"
              required
            />
          </div>
        )}

        {/* BOTTONE */}
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