import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/post")
      .then(res => res.json())
      .then(data => setPosts(data))
      .catch(err => console.error("Error cargando publicaciones:", err));
  }, []);


  return (
    <div>
      <h2>Publicaciones Recientes</h2>
      {posts.length === 0 ? (
        <p>No hay publicaciones aún.</p>
      ) : (
        posts.map(post => (
          <div key={post._id} style={{ border: "1px solid #ccc", margin: "1em 0", padding: "1em" }}>
            <h4>{post.Descripcion}</h4>
            <p><strong>Fecha:</strong> {new Date(post.FechaDeCreacion).toLocaleDateString()}</p>

            {/* Etiquetas */}
            {post.etiquetas?.length > 0 && (
              <p>
                <strong>Tags:</strong>{" "}
                {post.etiquetas.map((tag, i) => (
                  <span key={i} style={{ marginRight: "6px" }}>#{tag.name}</span>
                ))}
              </p>
            )}

            {/* Imágenes */}
            {post.imagenes?.length > 0 && (
              <div>
                {post.imagenes.map((img, i) => (
                  <img key={i} src={img.url} alt="imagen" style={{ width: "200px", margin: "5px" }} />
                ))}
              </div>
            )}

            <p>{post.comentarios?.length || 0} comentario(s)</p>
            <Link to={`/post/${post._id}`}  className="btn btn-primary">Ver más</Link>
          </div>
        ))
      )}
    </div>
  );
}
