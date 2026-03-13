import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-900  text-white shadow-md p-4 flex justify-between">
      <h1 className="font-bold text-xl text-blue-600">
        TravelDream
      </h1>

      <div className="flex gap-6 font-medium">
        <Link to="/">Home</Link>
        <Link to="/destinations">Destinazioni</Link>
      </div>
    </nav>
  );
}