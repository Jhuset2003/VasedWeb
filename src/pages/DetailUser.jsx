import React, { useEffect, useState, useContext } from "react";
import stylesDetail from "../components/UserDetails/UserDetails.module.css";
import UserDetails from "../components/UserDetails/UserDetails";
import UserNoDetails from "../components/UserDetails/UserNoDetails";
import styles from "./styles/AdminUser.module.css";
import BtnStyles from "../styles/Buttons.module.css";
import { useNavigate, useParams } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import CardDetail from "../components/Cards/CardDetail";
import { GlobalContext } from "../context/GlobalContext";
import { getAnswersByUser } from "../services/users";
import { getUserTaskClassrooms } from "../services/task";

const DetailUser = () => {
    const navigate = useNavigate();

    const {
        state: { users },
    } = useContext(GlobalContext);
    const { userId } = useParams();
    const [userOne, setUserOne] = useState({});
    const [userAnswers, setUserAnswers] = useState([]);
    const [userTaskClassrooms, setUserTaskClassrooms] = useState([]);

    const getUserAnswers = async () => {
        const resp = await getAnswersByUser(userId);
        if (resp.status !== 200 && resp.status !== 204) {
            console.log("error");
            return;
        }
        setUserAnswers(resp.data);
    };

    const fetchUserTaskClassrooms = async () => {
        const resp = await getUserTaskClassrooms(userId);
        if (resp.status !== 200 && resp.status !== 204) {
            console.log("error");
            return;
        }
        console.log(resp);
        setUserTaskClassrooms(resp.data);
    };

    useEffect(() => {
        setUserOne(users.find((user) => user.id === Number(userId)));
        getUserAnswers();
        fetchUserTaskClassrooms();
    }, []);

    console.log(userTaskClassrooms);
    return (
        <div>
            <MainLayout>
                <div className={styles.Letters}>
                    <h1>Detalle perfil</h1>
                    <button
                        className={BtnStyles.BtnDark}
                        onClick={() => navigate(-1)}
                    >
                        {" "}
                        Regresar{" "}
                    </button>
                </div>
                <UserDetails user={userOne} />

                {userOne.roleId === 3 && (
                    <h3 className={stylesDetail.subtitleContainer}>Entregas</h3>
                )}

                {userOne.roleId === 3 && (
                    <>
                        <div className={stylesDetail.UserDetailsContainer}>
                            {userAnswers.map((answer) => (
                                <span>{answer.answer_text}</span>
                            ))}
                            {userAnswers.length === 0 && (
                                <span>No hay entregas</span>
                            )}
                        </div>
                        {/* {userOne.answers.length > 0 ? (
          ) : <UserNoDetails text="Ninguna entrega realizada"/>
          } */}
                    </>
                )}

                {userOne.roleId === 2 || userOne.roleId === 3 ? (
                    <>
                        <h3 className={stylesDetail.subtitleContainer}>
                            Aulas
                        </h3>
                        {userOne?.classrooms ? (
                            <>
                                <div
                                    className={
                                        stylesDetail.UserDetailsContainer
                                    }
                                >
                                    <div className={stylesDetail.miniCards}>
                                        {userOne.classrooms.map((classroom) => (
                                            <CardDetail dataCard={classroom} />
                                        ))}
                                    </div>
                                </div>
                            </>
                        ) : (
                            <UserNoDetails text="Ninguna aula asignada" />
                        )}
                    </>
                ) : null}

                {userOne.roleId === 3 && (
                    <h3 className={stylesDetail.subtitleContainer}>
                        Actividades
                    </h3>
                )}

                <div className={stylesDetail.UserDetailsContainer}>
                    <div className={stylesDetail.miniCards}>
                        {userTaskClassrooms.map((task) => (
                            <CardDetail dataCard={task.task_classroom.task} />
                        ))}
                    </div>
                </div>
                {userTaskClassrooms.length === 0 && (
                    <UserNoDetails text="Ninguna actividad asignada" />
                )}
            </MainLayout>
        </div>
    );
};

export default DetailUser;
