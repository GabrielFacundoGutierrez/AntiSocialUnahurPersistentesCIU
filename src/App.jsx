import BarraNavegacion from "./components/header/BarraNavegacion";
import { Routes, Route } from 'react-router-dom';
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import PostDetail from "./pages/PostDetail";
import Home from "./pages/Home";






function App() {
  return (
    
    <div className="d-flex flex-column min-vh-100 bg-light">
        <BarraNavegacion />
      <div className="container mt-5 pt-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/post/:id" element={<PostDetail />} />
          
        </Routes>
      </div>
      </div>
    
  )
}

export default App