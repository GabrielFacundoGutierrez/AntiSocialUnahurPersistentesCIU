import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './components/footer/PieDePagina.css'
import './components/header/BarraNavegacion.css'
import './components/toggle-theme/ToggleTheme.css'
import './pages/Home.css'
import './pages/Login.css'
import './pages/NewPost.css'
import './pages/PostDetail.css'
import './pages/Profile.css'
import './pages/Register.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { UserProvider } from "./context/UserContext";

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>
    <UserProvider>
      <App />
    </UserProvider>
  </BrowserRouter>
  </StrictMode>,
)
