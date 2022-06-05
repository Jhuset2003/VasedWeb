import btn from "../styles/Buttons.module.css";
import profileCss from "./styles/Profile.module.css";
import MainLayout from "../layout/MainLayout";
import { FaUserGraduate, FaRegHandPeace } from "react-icons/fa";
import { BsFillHandThumbsUpFill } from "react-icons/bs";
import { GiTeacher } from "react-icons/gi";
import { RiAdminFill } from "react-icons/ri";
import { CircularProgressbar,  buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import { useState } from "react";
import { useContext } from "react";
import { SessionContext } from "../context/SessionContext";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { GlobalContext } from "../context/GlobalContext";
const Profile = () => {
  const { user, setUser } = useContext(SessionContext);
  console.log("user", user);
  const { dispatch } = useContext(GlobalContext);

  const navigate = useNavigate();

  const handleLogout = () => {
    setUser({});
    window.localStorage.removeItem("sessionLogin");
    window.localStorage.removeItem("token");
    navigate("/login");

    dispatch({
      type: "SET_INITIAL_STATE",
    });
  };

  return (
    <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }}>
      <MainLayout>
        <div className={profileCss.contProfile}>
          <h1 className={profileCss.title}>Perfil</h1>
          <button onClick={handleLogout} className={btn.BtnPink}>
            Cerrar sesión
          </button>
        </div>
        <div className={profileCss.containerData}>
          <picture className={profileCss.img}>
            {
              user.role === 3 &&
              <FaUserGraduate className={profileCss.icon} />
            }
            {
              user.role === 2 &&
              <GiTeacher className={profileCss.icon}/>
            }
            {
              user.role === 1 &&
              <RiAdminFill className={profileCss.icon}/>
            }
          </picture>
          <div className={profileCss.textContainer}>
            <div className={profileCss.content}>
              <h2 className={profileCss.paragraph}>
                {user.name}
              </h2>
              <p className={profileCss.paragraph}><strong>Rol:</strong> {
                user.roleId === 1 ? "administrador" : user.roleId === 2 ? "profesor" : "estudiante"
              }</p>
              <p className={profileCss.paragraph}>
              <strong>
                {user.dniTypeId === 1 ?
                  "Cédula de ciudadanía" :
                user.dniTypeId === 2 ?
                    "Cédula de extranjería" :
                user.dniTypeId === 3 ?
                    "Pasaporte" :
                user.dniTypeId === 4 ?
                    "NIT" :
                    "N° documento de identidad"}
                : </strong>{user.dni}
              </p>
              <p className={profileCss.paragraph}>{user.email}</p>
              
            </div>
            <div className={profileCss.content}>
              <p className={profileCss.paragraph}>
                {user.city + ", " + user.country}
              </p>
              <p className={profileCss.paragraph}><strong>Fecha ultimo ingreso:</strong> -</p>
              <p className={profileCss.paragraph}><strong>Fecha nacimiento:</strong> {user.birthDate.slice(0,-14)}</p>
            </div>
          </div>
        </div>

        {
          user.role === 3 &&
          <div className={profileCss.boxes}>
          <div className={profileCss.boxContainer}>
            <div className={profileCss.metrics}>
              <h2>Lo estas haciendo genial <FaRegHandPeace/></h2>
              <CircularProgressbar className={profileCss.contentBars} value={"80"} text={`80%`} 
              
              styles={buildStyles({

                  // Text size
                  textSize: '25px',

                  // Colors
                  backgroundColor: 'transparent',
                  pathColor: 'white',
                  textColor: 'white',
                  trailColor: 'transparent',
              })}
              />
            </div>
            <div className={profileCss.countAnswers}>
              <h3>Cantidad de entregas realizadas</h3>
              <div className={profileCss.box}>
                <h1 className={profileCss.iconNumber}>
                  <BsFillHandThumbsUpFill/>
                  <span>5</span>
                </h1>
              </div>
            </div>
          </div>

          <div className={profileCss.boxContainer}>
            <div className={profileCss.class}>
              <h3>Aulas en las que perteneces</h3>
              <div className={profileCss.circle}>
                <span>{user.classrooms.length}</span>
              </div>
            </div>
            <div className={profileCss.task}>
              <h3>Número de actividades</h3>
              <div className={profileCss.circle}>
                <span>{user.user_task_classrooms.length}</span>
              </div>
            </div>
          </div>
        </div>
        }
      </MainLayout>
    </motion.div>
  );
};

export default Profile;
