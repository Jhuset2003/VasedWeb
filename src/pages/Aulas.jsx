//components
import CardAula from "../components/Cards/CardAula";
import FormAulas from "../components/Forms/FormAulas";
import Search from "../components/Sections/Search";
import MainLayout from "../layout/MainLayout";
import ModalLayout from "../layout/ModalLayout";

//styles
import BtnStyles from "../styles/Buttons.module.css";
import styles from "./styles/AdminUser.module.css";

//react
import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import { SessionContext } from "../context/SessionContext";
import { GlobalContext } from "../context/GlobalContext";


const Aulas = () => {
    const [openModal, setOpenModal] = useState(false);

    const { user } = useContext(SessionContext);
    const {
        state: { classrooms },
    } = useContext(GlobalContext);
    const [search, setSearch] = useState("");

    return (
        <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <MainLayout>
                    <div className={styles.Letters}>
                        <h1>Aulas</h1>
                        {user.role === 1 || user.role === 2 ? (
                            <button
                                className={BtnStyles.BtnDark}
                                onClick={() => setOpenModal(!openModal)}
                            >
                                Crear nueva aula
                            </button>
                        ) : null}
                    </div>
                    <Search searchValue={search} setSearch={setSearch} />

                    {classrooms.map((classroom) => {
                        if (
                            classroom.name
                                .toLowerCase()
                                .includes(search.toLowerCase()) ||
                            classroom.description
                                .toLowerCase()
                                .includes(search.toLowerCase()) ||
                            classroom.code
                                .toLowerCase()
                                .includes(search.toLowerCase()) ||
                            search === ""
                        ) {
                            return (
                                <CardAula
                                    key={classroom._id}
                                    classroom={classroom}
                                />
                            );
                        }
                    })}
                </MainLayout>
                <ModalLayout
                    title="Formulario Aulas"
                    setOpenModal={setOpenModal}
                    openModal={openModal}
                    icon="show"
                >
                    <FormAulas
                        setOpenModal={setOpenModal}
                        openModal={openModal}
                    />
                </ModalLayout>
            </motion.div>
        </>
    );
};

export default Aulas;
