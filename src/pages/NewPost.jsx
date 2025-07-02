import { useState, useEffect } from "react";
import { useUser } from "../context/UserContext";
import { Navigate, useNavigate } from "react-router-dom";

export default function NewPost() {
  const { user } = useUser();
  const [descripcion, setDescripcion] = useState("");
  const [tags, setTags] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [imagenes, setImagenes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3000/tag")
      .then(res => res.json())
      .then(data => setTags(data))
      .catch(err => console.error("Error cargando tags:", err));
  }, []);

  if (!user) return <Navigate to="/login" />;

  const handleTagChange = (e) => {
    const tagId = e.target.value;
    if (e.target.checked) {
      setSelectedTags([...selectedTags, tagId]);
    } else {
      setSelectedTags(selectedTags.filter(id => id !== tagId));
    }
  };

  const handleImageChange = (e) => {
    setImagenes(Array.from(e.target.files));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      
      const nuevaPublicacion = {
        Descripcion: descripcion,
        FechaDeCreacion: new Date().toISOString(),
        usuario: user._id,
        etiquetas: selectedTags
      };

      const postRes = await fetch("http://localhost:3000/post", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(nuevaPublicacion)
      });

      if (!postRes.ok) throw new Error("No se pudo crear el post");

      const postCreado = await postRes.json();

      
      for (const img of imagenes) {
        const formData = new FormData();
        formData.append("posteo", postCreado._id);
        formData.append("imagen", img);

        const imgRes = await fetch("http://localhost:3000/postimage", {
          method: "POST",
          body: formData
        });

        if (!imgRes.ok) throw new Error("Error al subir imagen");
      }

      alert("¡Publicación creada con éxito!");
      navigate("/");
    } catch (err) {
      alert("Error: " + err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Crear nueva publicación</h2>

      <div>
        <textarea
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          placeholder="Escribe tu publicación aquí..."
          rows={4}
          style={{ width: "100%" }}
          required
        />
      </div>

      <div>
        <h5>Etiquetas:</h5>
        {tags.map(tag => (
          <label key={tag._id} style={{ marginRight: "1em" }}>
            <input
              type="checkbox"
              value={tag._id}
              onChange={handleTagChange}
            />{" "}
            {tag.name}
          </label>
        ))}
      </div>

      <div>
        <h5>Imágenes:</h5>
        <input type="file" multiple onChange={handleImageChange} />
      </div>

      <button type="submit">Publicar</button>
    </form>
  );
}
