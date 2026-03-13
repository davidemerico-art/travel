import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (!user) {
      alert("Email o password errati ❌");
      return;
    }

    localStorage.setItem("loggedUser", JSON.stringify(user));

    alert("Login effettuato! 🎉");

    navigate("/destinations");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md space-y-4"
      >

        <h1 className="text-2xl font-bold text-center">
          Login
        </h1>

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
          className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-800"
        >
          Entra
        </button>

        <p className="text-center text-sm">
          Non hai un account?{" "}
          <Link to="/register" className="text-blue-600">
            Registrati
          </Link>
        </p>

      </form>
    </div>
  );
}