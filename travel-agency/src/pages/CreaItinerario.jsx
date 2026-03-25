import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreaItinerario() {

  const navigate = useNavigate();

  const [titolo, setTitolo] = useState("");
  const [giorni, setGiorni] = useState("");
  const [prezzo, setPrezzo] = useState("");
  const [img, setImg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Creo nuovo itinerario con stessa struttura di trips.js
    const nuovoViaggio = {
      id: Date.now(),
      title: titolo,
      days: Number(giorni),
      price: Number(prezzo),
      img: img,
      description: "Descrizione personalizzata."
    };

    // Recupero viaggi già salvati
    const tripsSalvati = JSON.parse(localStorage.getItem("trips")) || [];

    // Salvo il nuovo viaggio
    localStorage.setItem(
      "trips",
      JSON.stringify([...tripsSalvati, nuovoViaggio])
    );

    alert("Itinerario creato con successo! ");

    // Torno alle destinazioni
    navigate("/destinations");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">

      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-lg">

        <h1 className="text-3xl font-bold mb-6 text-center">
          Crea Nuovo Itinerario
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            placeholder="Titolo"
            className="border p-3 w-full rounded"
            value={titolo}
            onChange={(e) => setTitolo(e.target.value)}
            required
          />

          <input
            type="number"
            placeholder="Durata (giorni)"
            className="border p-3 w-full rounded"
            value={giorni}
            onChange={(e) => setGiorni(e.target.value)}
            required
          />

          <input
            type="number"
            placeholder="Prezzo"
            className="border p-3 w-full rounded"
            value={prezzo}
            onChange={(e) => setPrezzo(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="URL Immagine "
            className="border p-3 w-full rounded"
            value={img}
            onChange={(e) => setImg(e.target.value)}
            required
          />

          <button
            type="submit"
            className="w-full bg-teal-400 text-white py-3 rounded hover:bg-teal-700 transition"
          >
            Salva Itinerario
          </button>

        </form>

      </div>

    </div>
  );
}