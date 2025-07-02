import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App"; 
import Login from "./pages/Login";
import Register from "./pages/Register";
import PostDetail from "./pages/PostDetail";
import Profile from "./pages/Profile";
import NewPost from "./pages/NewPost";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/post/:id" element={<PostDetail />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/new-post" element={<NewPost />} />
      </Routes>
    </BrowserRouter>
 );
}