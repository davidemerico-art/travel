import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
      document.documentElement.classList.remove("dark");
      setIsLight(true);
    } else {
      document.documentElement.classList.add("dark");
      setIsLight(false);
    }
  }, []);

  const toggleTheme = () => {
    if (isLight) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "dark");
      setIsLight(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "light");
      setIsLight(true);
    }
  };

  return (
    <nav className="bg-gray-900 dark:bg-gray-800     text-white dark:text-black shadow-md p-4 flex justify-between items-center transition-colors">

      <h1 className="font-bold text-xl text-blue-600">
        TravelDream
      </h1>

      <div className="flex gap-6 font-medium items-center">

        <Link
          to="/create-itinerary"
          className="hover:text-blue-400 dark:hover:text-blue-600 transition"
        >
          Crea Itinerario
        </Link>

        <Link
          to="/destinations"
          className="hover:text-blue-400 dark:hover:text-blue-600 transition"
        >
          Destinazioni
        </Link>

        {/*  Toggle Tema */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="rounded-full w-9 h-9 flex items-center justify-center hover:bg-gray-700 dark:hover:bg-gray-200 transition"
            title="Cambia tema"
          >
            {isLight ? (
              //  Icona luna
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            ) : (
              //  Icona sole
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
            )}
          </button>
        </div>

      </div>
    </nav>
  );
}