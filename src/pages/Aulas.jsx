import React, { useState } from "react";
import CardAula from "../components/Cards/CardAula";
import FormAulas from "../components/Forms/FormAulas";
import Search from "../components/Sections/Search";
import MainLayout from "../layout/MainLayout";
import FormAdd from "../components/Forms/FormAdd";

import ModalLayout from "../layout/ModalLayout";
import BtnStyles from "../styles/Buttons.module.css";
import styles from "./styles/AdminUser.module.css";

const Aulas = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      <MainLayout>
        <div className={styles.Letters}>
          <h1>Usuarios</h1>
          <button
            className={BtnStyles.BtnDark}
            onClick={() => setOpenModal(!openModal)}
          >
            Crear nueva aula
          </button>
        </div>
        <Search />
        <CardAula />
        <CardAula />
        <CardAula />
      </MainLayout>
      <ModalLayout
        title="Formulario Aulas"
        setOpenModal={setOpenModal}
        openModal={openModal}
      >
        <FormAulas setOpenModal={setOpenModal} openModal={openModal} />
      </ModalLayout>
    </div>
  );
};

export default Aulas;
