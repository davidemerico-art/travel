import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreaItinerario() {

  const navigate = useNavigate();

  const [titolo, setTitolo] = useState("");
  const [descrizione, setDescrizione] = useState("");
  const [giorni, setGiorni] = useState("");
  const [prezzo, setPrezzo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const nuovoViaggio = {
      id: Date.now(),
      title: titolo,
      description: descrizione,
      days: Number(giorni),
      price: Number(prezzo)
    };

    console.log("Nuovo itinerario:", nuovoViaggio);

    alert("Itinerario creato con successo! 🎉");

    navigate("/destinations");
  };

  return (
    <div className="p-10 max-w-xl mx-auto">

      <h1 className="text-3xl font-bold mb-6">
        Crea Nuovo Itinerario
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          type="text"
          placeholder="Titolo"
          className="border p-2 w-full"
          value={titolo}
          onChange={(e) => setTitolo(e.target.value)}
          required
        />

        <textarea
          placeholder="Descrizione"
          className="border p-2 w-full"
          value={descrizione}
          onChange={(e) => setDescrizione(e.target.value)}
          required
        />

        <input
          type="number"
          placeholder="Durata (giorni)"
          className="border p-2 w-full"
          value={giorni}
          onChange={(e) => setGiorni(e.target.value)}
          required
        />

        <input
          type="number"
          placeholder="Prezzo"
          className="border p-2 w-full"
          value={prezzo}
          onChange={(e) => setPrezzo(e.target.value)}
          required
        />

        <button
          type="submit"
          className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
        >
          Salva Itinerario
        </button>

      </form>

    </div>
  );
}