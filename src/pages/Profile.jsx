import { useEffect, useState } from "react";
import { useUser } from "../context/UserContext";
import { Navigate, Link } from "react-router-dom";
import PostDetail from "./PostDetail";

export default function Profile() {
  const { user, logout } = useUser();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (user) {
      fetch("http://localhost:3000/post")
        .then(res => res.json())
        .then(data => {
          const propios = data.filter(p => p.usuario.nickName === user.nickName);
          setPosts(propios);
        })
        .catch(err => console.error("Error cargando publicaciones:", err));
    }
  }, [user]);

  if (!user) return <Navigate to="/login" />;

  return (

    <div className="perfil-encabezado">
      <h1 className="encabezado">Bienvenido: {user.nickName}</h1>
      <button onClick={() => logout()} className="btn btn-danger mb-4 cerrar-sesion">
        Cerrar sesión
      </button>
      <h2 className="publicaciones-encabezado">Mis Publicaciones</h2>
      {posts.length === 0 ? (
        <p>No has publicado nada todavía.</p>
      ) : (
          <div> {posts.map(post => (
          <div key={post._id} className="card p-3 mb-3 shadow-sm">
            <h4>{post.Descripcion}</h4>
            <p><strong>Fecha:</strong> {new Date(post.FechaDeCreacion).toLocaleDateString()}</p>

            {post.etiquetas?.length > 0 && (
              <p>
                <strong>Tags:</strong>{" "}
                {post.etiquetas.map((tag, i) => (
                  <span key={i} className="badge bg-secondary me-2">#{tag.name}</span>
                ))}
              </p>
            )}

            {post.imagenes?.length > 0 && (
              <div className="mb-2">
                {post.imagenes.map((img, i) => (
                  <img key={i} src={img.url} alt="imagen" style={{ width: "150px", margin: "5px" }} />
                ))}
              </div>
            )}
            <p>{post.comentarios?.length || 0} comentario(s)</p>
            <Link to={`/post/${post._id}`} className="btn btn-primary">
              Ver más
            </Link>
          </div>
        ))}
        </div>
      )
      }
    </div >
  );
}