import BarraNavegacion from "./components/header/BarraNavegacion";
import PieDePagina from "./components/footer/PieDePagina";
import { Routes, Route } from 'react-router-dom';
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import PostDetail from "./pages/PostDetail";
import Home from "./pages/Home";
import Register from "./pages/Register"
import NewPost from "./pages/NewPost"


function App() {
  return (

    <div className="bg-light">
      <BarraNavegacion />
      <div className="container mt-5 pt-5">
        {<Routes>

          <Route path="/" element={<Home />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/post/:id" element={<PostDetail />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/NewPost" element={<NewPost />} />




        </Routes>}
      </div>
      <PieDePagina />
    </div>

  )
}

export default App

