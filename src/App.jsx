import BarraNavegacion from "./components/header/BarraNavegacion";
import PieDePagina from "./components/footer/PieDePagina";
import ToggleTheme from "./components/toggle-theme/ToggleTheme"
import { Routes, Route } from 'react-router-dom';
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import PostDetail from "./pages/PostDetail";
import Home from "./pages/Home";
import Register from "./pages/Register"
import NewPost from "./pages/NewPost"
import PrivateRoute from "./components/PrivateRoutes/PrivateRoutes";
import Paginado from "./components/paginacion";


function App() {
  return (

    <div className="bg-light">
      <BarraNavegacion />
      <div className="container mt-5 pt-5">
        {<Routes>

          <Route path="/" element={<Home />} />
          <Route path="/Profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
          <Route path="/Login" element={<Login />} />
          <Route path="/post/:id" element={<PrivateRoute><PostDetail /></PrivateRoute>} />
          <Route path="/Register" element={<Register />} />
          <Route path="/NewPost" element={<PrivateRoute><NewPost /></PrivateRoute>} />




        </Routes>}
      </div>
      {/* <ToggleTheme /> */}
      <PieDePagina />
    </div>

  )
}

export default App

