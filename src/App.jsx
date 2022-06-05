//styles
import "./styles/App.css";



//components
import Aulas from "./pages/Aulas";
import Activities from "./pages/Activities";
import AdminUser from "./pages/AdminUsers";
import Profile from "./pages/Profile";
import Landing from "./pages/Landing";
import DetailUser from "./pages/DetailUser";
import Login from "./pages/Login";
import Footer from "./components/Sections/Footer";
import FormOfNewPassword from "./pages/FormOfNewPassword";
import FormOfRecovering from "./pages/FormOfRecovering";
import NavBars from "./components/NavBars/NavBars";

//react 
import { useContext, useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Guest from "./middlewares/Guest";
import Auth from "./middlewares/Auth";
import AuthAdmin from "./middlewares/AuthAdmin";
import AuthTeacher from "./middlewares/AuthTeacher";
import { SessionContext } from "./context/SessionContext";
import { GlobalContext } from "./context/GlobalContext";
import {getClassrooms} from "./services/classrooms";
import { getTasks } from "./services/task";
import { getUsers } from "./services/users";


function App() {
    const location = useLocation();
    const { user, setUser } = useContext(SessionContext);
    const { state, dispatch } = useContext(GlobalContext);

    const setStates = async () => {
        const classrooms = await getClassrooms();
        if(classrooms.status !== 200 && classrooms.status !== 204){
            console.log('error')
            return
          }
        dispatch({
            type: "SET_CLASSROOMS",
            payload: classrooms.data,
        });

        const tasks = await getTasks();
        if(tasks.status !== 200 && tasks.status !== 204){
            console.log('error')
            return
          }
        dispatch({
            type: "SET_TASKS",
            payload: tasks.data,
        })

        const users = await getUsers();
        if(users.status !== 200 && users.status !== 204){
            console.log('error')
            return
          }
        dispatch({
            type: "SET_USERS",
            payload: users.data,
        })
    
    }

    useEffect(() => {
        //set user from localStorage
        if (localStorage.getItem("sessionLogin")) {
            const userLocal = JSON.parse(localStorage.getItem("sessionLogin"));
            setUser(userLocal);
        }
    },[])

    useEffect(() => {
        //set data in the context
        setStates()
    },[user])

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
                <Route path="/detalle-usuario/:userId" element={
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
