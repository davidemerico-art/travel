import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>

      {/* HERO */}
      <div
        className="h-[85vh] bg-cover bg-center flex items-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1507525428034-b723cf961d3e)"
        }}
      >
        <div className="ml-20 bg-black/60 p-10 rounded-xl text-white max-w-lg">

          <h1 className="text-5xl font-bold mb-4">
            Scopri il Mondo con TravelDream
           
          </h1>

          <p className="mb-6">
             scegli la tua prossima avventura! <br />
            Viaggi esclusivi e itinerari unici creati per te.<br />
             
          </p>

          <div className="flex gap-4">

            <Link
              to="/login"
              className="bg-red-200 px-6 py-3 rounded-lg hover:bg-orange-800 transition"
            >
              accedi
            </Link>

            <Link
              to="/register"
              className="bg-red-300 px-6 py-3 rounded-lg hover:bg-red-800 transition"
            >
              Crea Account
            </Link>

          </div>

        </div>
      </div>

    </div>
  );
}