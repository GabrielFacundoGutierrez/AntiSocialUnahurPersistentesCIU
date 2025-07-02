import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useUser } from "../context/UserContext";

export default function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [comentario, setComentario] = useState("");
  const { user } = useUser();
  console.log(id)

  useEffect(() => {
    fetch(`http://localhost:3000/post/${id}`)
      .then(res => res.json())
      .then((data) => {
        console.log(id)
        setPost(data)})
      .catch(err => console.error("Error cargando el post:", err));
  }, [id]);

  const agregarComentario = async (e) => {
    e.preventDefault();

    if (!comentario.trim()) return;

    try {
      const nuevoComentario = {
        mensaje: comentario,
        FechaDePublicacion: new Date().toISOString().split("T")[0],
        usuario: user._id,
        posteo: id
      };

      const res = await fetch("http://localhost:3000/comment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(nuevoComentario)
      });

      if (!res.ok) throw new Error("Error al comentar");

      // Recargar post actualizado
      const postActualizado = await fetch(`http://localhost:3000/post/${id}`).then(r => r.json());
      setPost(postActualizado);
      setComentario("");
    } catch (err) {
      alert("Error al comentar: " + err.message);
    }
  };

  if (!post) return <p>Cargando publicación...</p>;

  return (
    <div style={{ padding: "1em" }}>
      <h2>{post.Descripcion}</h2>
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
            <img key={i} src={img.url} alt="Post" style={{ width: "200px", height:"200px", margin: "10px" }} />
          ))}
        </div>
      )}

      {/* Comentarios */}
      <h4>Comentarios</h4>
      <ul>
        {(post.comentarios || []).map((c, i) => (
          <li key={i}>
            <p>{c.mensaje}</p>
            <small>{new Date(c.FechaDePublicacion).toLocaleDateString()}</small>
          </li>
        ))}
      </ul>

      {/* Agregar nuevo comentario */}
      {user ? (
        <form onSubmit={agregarComentario}>
          <h5>Agregar Comentario</h5>
          <textarea
            value={comentario}
            onChange={(e) => setComentario(e.target.value)}
            required
            rows={3}
            style={{ width: "100%", marginBottom: "0.5em" }}
          />
          <button type="submit">Comentar</button>
        </form>
      ) : (
        <p>Inicia sesión para comentar.</p>
      )}
    </div>
  );
}
