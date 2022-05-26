import { useState } from "react";
import CardActivity from "../components/Cards/CardActivity";
import FormActivities from "../components/Forms/FormActivities";
import FormUsers from "../components/Forms/FormUsers";
import Search from "../components/Sections/Search";
import MainLayout from "../layout/MainLayout";

import ModalLayout from "../layout/ModalLayout";
import BtnStyles from "../styles/Buttons.module.css";
import styles from "./styles/AdminUser.module.css";

const Activities = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      <MainLayout>
        <div className={styles.Letters}>
          <h1>Actividades</h1>
          <button
            className={BtnStyles.BtnDark}
            onClick={() => setOpenModal(!openModal)}
          >
            {" "}
            Crear nueva actividad{" "}
          </button>
        </div>
        <Search />
        <CardActivity />
        <CardActivity />
        <CardActivity />
        <CardActivity />
        <CardActivity />
      </MainLayout>
      <ModalLayout
        title="Formulario Actividades"
        setOpenModal={setOpenModal}
        openModal={openModal}
      >
        <FormActivities setOpenModal={setOpenModal} openModal={openModal} />
      </ModalLayout>
    </div>
  );
};

export default Activities;
