import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

export default function Login() {
  const [nickName, setNickName] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useUser();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== "123456") {
      alert("Contraseña incorrecta");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/user");
      const users = await res.json();
      const user = users.find(u => u.nickName === nickName);

      if (!user) {
        alert("Usuario no encontrado");
        return;
      }

      login(user); 
      navigate("/");
    } catch (err) {
      alert("Error al iniciar sesión: " + err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Iniciar sesión</h2>
      <input
        type="text"
        placeholder="NickName"
        value={nickName}
        onChange={(e) => setNickName(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Ingresar</button>
    </form>
  );
}