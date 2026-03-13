import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const exists = users.find((u) => u.email === email);

    if (exists) {
      alert("Email già registrata ❌");
      return;
    }

    const newUser = { name, email, password };

    localStorage.setItem(
      "users",
      JSON.stringify([...users, newUser])
    );

    alert("Registrazione completata 🎉");

    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <form
        onSubmit={handleRegister}
        className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md space-y-4"
      >

        <h1 className="text-2xl font-bold text-center">
          Registrati
        </h1>

        <input
          type="text"
          placeholder="Nome"
          className="border p-3 w-full rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Email"
          className="border p-3 w-full rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="border p-3 w-full rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className="w-full bg-cyan-600 text-white py-3 rounded hover:bg-cyan-800"
        >
          Crea Account
        </button>

        <p className="text-center text-sm">
          Hai già un account?{" "}
          <Link to="/login" className="text-blue-600">
            Login
          </Link>
        </p>

      </form>
    </div>
  );
}