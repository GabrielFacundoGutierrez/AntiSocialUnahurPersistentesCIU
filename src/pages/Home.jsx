import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Paginado from "../components/paginacion";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/post")
      .then(res => res.json())
      .then(data => setPosts(data))
      .catch(err => console.error("Error cargando publicaciones:", err));
  }, []);
  const [paginaActual, setPaginaActual] = useState(1);
  const [postsPorPagina] = useState(6);

  // Calcular los posts para la página actual
  const indiceUltimoPost = paginaActual * postsPorPagina;
  const indicePrimerPost = indiceUltimoPost - postsPorPagina;
  const postsActuales = posts.slice(indicePrimerPost, indiceUltimoPost);

  // Cambiar página
  const cambiarPagina = (numeroPagina) => setPaginaActual(numeroPagina);

  
  return (
     

   <div className="contenedor-home">
      <h2 className="encabezado-principal">Publicaciones Recientes</h2>
      
      {posts.length === 0 ? (
        <p>No hay publicaciones aún.</p>
      ) : (
        <>
          <div className="posteo-padre">
            {postsActuales.map(post => (
              <div className="posteo" key={post._id}>
                <div className="info">
                  {post.etiquetas?.length > 0 && (
                    <p>
                      <strong>Tags:</strong>{" "}
                      {post.etiquetas.map((tag, i) => (
                        <span key={i} style={{ marginRight: "6px" }}>#{tag.name}</span>
                      ))}
                    </p>
                  )}

                  <h4>{post.Descripcion}</h4>
                  <p>By: {post.usuario.nickName}</p>
                  <p><strong>Fecha:</strong> {new Date(post.FechaDeCreacion).toLocaleDateString()}</p>
                  <p>{post.comentarios?.length || 0} comentario(s)</p>
                  <Link to={`/post/${post._id}`} className="btn btn-primary">Ver más</Link>
                </div>

                <div className="imagenes-posteos">
                  {post.imagenes?.length > 0 && (
                    <div>
                      {post.imagenes.map((img, i) => (
                        <img className="imagenposteo" key={i} src={img.url} alt="imagen" />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Componente de Paginación */}
          <div className="paginacion">
            {Array.from({ length: Math.ceil(posts.length / postsPorPagina) }).map((_, index) => (
              <button
                key={index}
                onClick={() => cambiarPagina(index + 1)}
                className={paginaActual === index + 1 ? 'active' : ''}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
