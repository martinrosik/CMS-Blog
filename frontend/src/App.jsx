import { Routes, Route, useLocation } from "react-router";
import HomePage from "./pages/HomePage";
import PostPage from "./pages/PostPage";
import Navbar from "./components/Navbar";
import AdminPanel from "./pages/AdminPanel";
import LoginPage from "./pages/LoginPage";

function App() {
  const location = useLocation();

  const showNavbar = location.pathname !== "/login";

  return (
    <>
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts" element={<PostPage />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;
