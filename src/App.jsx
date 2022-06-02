import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Aulas from "./pages/Aulas";
import Activities from "./pages/Activities";
import AdminUser from "./pages/AdminUsers";
import Profile from "./pages/Profile";

import "./styles/App.css";
import Landing from "./pages/Landing";
import DetailUser from "./pages/DetailUser";
import Login from "./pages/Login";
import Footer from "./components/Sections/Footer";
import FormOfNewPassword from "./pages/FormOfNewPassword";
import FormOfRecovering from "./pages/FormOfRecovering";
import NavBars from "./components/NavBars/NavBars";
import Auth from "./middlewares/Auth";
import AuthAdmin from "./middlewares/AuthAdmin";
import AuthTeacher from "./middlewares/AuthTeacher";
import { useContext, useEffect } from "react";
import { SessionContext } from "./context/SessionContext";
import Guest from "./middlewares/Guest";


function App() {
    const location = useLocation();
    const { user, setUser } = useContext(SessionContext);

    useEffect(() => {
        //set user from localStorage
        if (localStorage.getItem("sessionLogin")) {
            const userLocal = JSON.parse(localStorage.getItem("sessionLogin"));
            setUser(userLocal);
        }
    },[])

    return (
        <div className="App">
            {location.pathname === "/login" ? null : location.pathname ===
              "/recover" ? null : location.pathname ===
              "/new-password" ? null : (
                <NavBars />
            )}
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route
                    path="/aulas"
                    element={
                        <Auth>
                            <Aulas />
                        </Auth>
                    }
                />

                <Route
                    path="/Actividades"
                    element={
                        <Auth>
                            <Activities />
                        </Auth>
                    }
                />
                <Route
                    path="/usuarios"
                    element={
                        <AuthAdmin>
                            <AdminUser />
                        </AuthAdmin>
                    }
                />
                <Route path="/perfil" element={
                    <Auth>
                        <Profile />
                    </Auth>
                } />
                <Route path="/detalle-usuario" element={
                    <AuthTeacher>
                        <DetailUser />
                    </AuthTeacher>
                } />
                <Route path="/login" element={
                    <Guest>
                        <Login />
                    </Guest>
                }/>
                <Route path="/recover" element={
                    <Guest>
                        <FormOfRecovering />
                    </Guest>
                } />
                <Route path="/new-password" element={
                    <Guest>
                        <FormOfNewPassword />
                    </Guest>
                } />

                <Route path="*" element={<Navigate to="/" />} />
            </Routes>

            {location.pathname === "/login" ? null : location.pathname ===
              "/recover" ? null : location.pathname ===
              "/new-password" ? null : (
                <Footer />
            )}
        </div>
    );
}
export default App;
