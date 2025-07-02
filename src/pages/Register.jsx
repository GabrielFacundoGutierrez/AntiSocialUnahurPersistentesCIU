import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [nickName, setNickName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      
      const res = await fetch("http://localhost:3000/user");
      const users = await res.json();
      const yaExiste = users.some(u => u.nickName === nickName);

      if (yaExiste) {
        alert("Ese nickName ya está en uso");
        return;
      }

      const resp = await fetch("http://localhost:3000/user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nickName, email })
      });

      if (!resp.ok) throw new Error("Error al crear usuario");

      alert("Usuario registrado correctamente");
      navigate("/login");
    } catch (err) {
      alert("Ocurrió un error: " + err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Registro</h2>
      <input
        type="text"
        placeholder="NickName"
        value={nickName}
        onChange={(e) => setNickName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Correo"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit">Registrarse</button>
    </form>
  );
}