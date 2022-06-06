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
import ForgotPassword from "./pages/ForgotPassword";
import NavBars from "./components/NavBars/NavBars";
import Students from "./pages/Students";

//react
import { useContext, useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Guest from "./middlewares/Guest";
import Auth from "./middlewares/Auth";
import AuthAdmin from "./middlewares/AuthAdmin";
import AuthTeacher from "./middlewares/AuthTeacher";
import { SessionContext } from "./context/SessionContext";
import { GlobalContext } from "./context/GlobalContext";
import { getClassrooms } from "./services/classrooms";
import { getTasks } from "./services/task";
import { getUsers } from "./services/users";
import ResetPassword from "./pages/ResetPassword";
import ActivateAccount from "./pages/ActivateAccount";

function App() {
    const location = useLocation();
    const { user, setUser } = useContext(SessionContext);
    const {
        state: { classrooms, tasks },
        dispatch,
    } = useContext(GlobalContext);

    const setStates = async () => {
        const classroomsResp = await getClassrooms();
        if (classroomsResp.status !== 200 && classroomsResp.status !== 204) {
            console.log("error");
            return;
        }
        dispatch({
            type: "SET_CLASSROOMS",
            payload: classroomsResp.data,
        });

        if (user.role === 1 || user.role === 2) {
            const tasks = await getTasks();
            if (tasks.status !== 200 && tasks.status !== 204) {
                console.log("error");
                return;
            }
            dispatch({
                type: "SET_TASKS",
                payload: tasks.data,
            });
        } else if (user.role === 3) {
            const tasksClass = user.user_task_classrooms.map((task) => {
                return {
                    ...task.task_classroom.task,
                    classroomId: task.task_classroom.classroomId,
                    answer: null,
                    task_classroomId: task.id,
                    userTaskClassroomId: task.id,
                };
            });

            dispatch({
                type: "SET_TASKS",
                payload: tasksClass,
            });
        }

        const users = await getUsers();
        if (users.status !== 200 && users.status !== 204) {
            console.log("error");
            return;
        }
        dispatch({
            type: "SET_USERS",
            payload: users.data,
        });
    };

    useEffect(() => {
        //set user from localStorage
        if (localStorage.getItem("sessionLogin")) {
            const userLocal = JSON.parse(localStorage.getItem("sessionLogin"));
            setUser(userLocal);
        }
    }, []);

    useEffect(() => {
        //set data in the context
        setStates();
    }, [user]);

    useEffect(() => {
        if (user.role === 3) {
            const parsedClassrooms = classrooms.map((classroom) => {
                return {
                    ...classroom,
                    tasks: tasks.filter((task) => {
                        return task.classroomId === classroom.id;
                    }),
                };
            });
            dispatch({
                type: "SET_CLASSROOMS",
                payload: parsedClassrooms,
            });
        }
    }, [tasks]);

    return (
        <div className="App">
            {location.pathname === "/login" ? null : location.pathname ===
              "/forgot-password" ? null : location.pathname ===
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
                <Route
                    path="/perfil"
                    element={
                        <Auth>
                            <Profile />
                        </Auth>
                    }
                />
                <Route
                    path="/detalle-usuario/:userId"
                    element={
                        <AuthTeacher>
                            <DetailUser />
                        </AuthTeacher>
                    }
                />
                <Route
                    path="/login"
                    element={
                        <Guest>
                            <Login />
                        </Guest>
                    }
                />
                <Route
                    path="/forgot-password"
                    element={
                        <Guest>
                            <ForgotPassword />
                        </Guest>
                    }
                />
                <Route
                    path="/reset-password/:id/:token"
                    element={
                        <Guest>
                            <ResetPassword />
                        </Guest>
                    }
                />
                <Route
                    path="/activate-account/:id/:token"
                    element={
                        <Guest>
                            <ActivateAccount />
                        </Guest>
                    }
                />
                <Route
                    path="/estudiantes"
                    element={
                        <AuthTeacher>
                            <Students/>
                        </AuthTeacher>
                    }
                />

                <Route path="*" element={<Navigate to="/" />} />
            </Routes>

            {location.pathname === "/login" ? null : location.pathname ===
              "/forgot-password" ? null : location.pathname ===
              "/reset-password/:id/:token" ? null : (
                <Footer />
            )}
        </div>
    );
}
export default App;
