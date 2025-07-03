
import React from "react";
import { Link } from "react-router-dom";
import { useUser } from "../../context/UserContext";

const BarraNavegacion = () => {
  const { user, logout } = useUser();
  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid px-5">
        <img src="src\assets\Logo.png" alt="logo" className = "logo"/>
        <Link to="/" className="navbar-brand d-flex align-items-center gap-2">
          <span className="fs-4 fw-semibold">Unahur AntiSocial</span>
        </Link>
        <div className="d-flex ms-auto gap-3">
           {user ? (
            <>
              <Link to="/profile" className="btn btn-outline-light">Perfil</Link>
              <Link to="/NewPost" className="btn btn-outline-light">Nuevo Posteo</Link>
            </>
          ) : (
            <>
              <Link to="/login" className="btn btn-outline-light">Iniciar sesión</Link>
              <Link to="/register" className="btn btn-outline-light">Registrarse</Link>
              
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default BarraNavegacion;


