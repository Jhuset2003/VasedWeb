import React, { useEffect, useState, useContext } from "react";
import stylesDetail from '../components/UserDetails/UserDetails.module.css'
import UserDetails from "../components/UserDetails/UserDetails";
import UserNoDetails from "../components/UserDetails/UserNoDetails";
import styles from "./styles/AdminUser.module.css";
import BtnStyles from "../styles/Buttons.module.css";
import { useNavigate, useParams } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import CardDetail from "../components/Cards/CardDetail";
import { GlobalContext } from "../context/GlobalContext";

const DetailUser = () => {
  const navigate = useNavigate();

  const { state: { users } } = useContext(GlobalContext);
  const { userId } = useParams();
  const [userOne, setUserOne] = useState(null);

  console.log(userOne);

  useEffect(() => {
    setUserOne(users.find((user) => user.id === Number(userId)));
  }, []);
  
  return (
    <div>
      <MainLayout>
        <div className={styles.Letters}>
          <h1>Detalle perfil</h1>
          <button className={BtnStyles.BtnDark} onClick={() => navigate(-1)}>
            {" "}
            Regresar{" "}
          </button>
        </div>
        <UserDetails user={userOne}/>

        {/* {userOne.roleId === 3 && (
          <>
          {userOne.answers.length > 0 ? (
            <div className={stylesDetail.UserDetailsContainer}>
              Tiene aulas
            </div>
          ) : <UserNoDetails text="Ninguna entrega realizada"/>}
          </>
        )
        } */}
        
        { userOne?.classrooms ? (
          <div className={stylesDetail.UserDetailsContainer}>
            <div className={stylesDetail.miniCards}>
            {userOne.classrooms.map((classroom) => 
                <CardDetail dataCard={classroom} />
                )}
            </div>
          </div>
        ) : <UserNoDetails text="Ninguna aula asignada" />}

        {userOne?.task_classrooms ? (
          <div className={stylesDetail.UserDetailsContainer}>
            <div className={stylesDetail.miniCards}>
            {userOne.task_classrooms.map((task) => 
                <CardDetail dataCard={task} />
                )}
            </div>
          </div>
        ) : <UserNoDetails text="Ninguna actividad asignada"/>}
      
      </MainLayout>
    </div>
  );
};

export default DetailUser;
