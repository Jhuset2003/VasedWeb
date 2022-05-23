import { Route, Routes, useLocation } from "react-router-dom";

import NavBarLogin from "./components/NavBars/NavBarLogin/NavBarLogin";
import Aulas from "./pages/Aulas";
import Activities from "./pages/Activities";
import AdminUser from "./pages/AdminUsers";
import Profile from "./pages/Profile";

import "./styles/App.css";
import Landing from "./pages/Landing";
import DetailUser from "./pages/DetailUser";
import Login from "./pages/Login";
import Footer from "./components/Sections/Footer";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      
      {location.pathname === "/login" ? null : <NavBarLogin />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/aulas" element={<Aulas />} />
        <Route path="/Actividades" element={<Activities />} />
        <Route path="/usuarios" element={<AdminUser />} />
        <Route path="/perfil" element={<Profile />} />
        <Route path="/detalle-usuario" element={<DetailUser/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>

      <Footer />
    </div>
  );
}
export default App;
