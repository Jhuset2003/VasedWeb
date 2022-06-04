//components
import CardActivity from "../components/Cards/CardActivity";
import FormActivities from "../components/Forms/FormActivities";
import Search from "../components/Sections/Search";
import MainLayout from "../layout/MainLayout";
import ModalLayout from "../layout/ModalLayout";
import NoData from "../components/Sections/NoData";

//styles
import BtnStyles from "../styles/Buttons.module.css";
//use the same stlye as adminUser
import styles from "./styles/AdminUser.module.css";
import pagination from "./styles/pagination.module.css";

//react
import { useContext, useState, useEffect } from "react";
import { SessionContext } from "../context/SessionContext";
import { motion } from "framer-motion";
import { GlobalContext } from "../context/GlobalContext";
import ReactPaginate from "react-paginate";

const Activities = () => {
    const [openModal, setOpenModal] = useState(false);
    const [modalTask, setModalTask] = useState(false);

    const { user } = useContext(SessionContext);
    const {
        state: { tasks },
    } = useContext(GlobalContext);

    const [filteredTasks, setFilteredTasks] = useState(tasks);

    const [search, setSearch] = useState("");

    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 6;

    //paginacion
    useEffect(() => {
        // Fetch items from another resources.
        const endOffset = itemOffset + itemsPerPage;
        // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        setCurrentItems(filteredTasks.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(filteredTasks.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, filteredTasks]);

    useEffect(() => {
        if (search !== "") {
            setFilteredTasks(
                tasks.filter(
                    (task) =>
                        task.name
                            .toLowerCase()
                            .includes(search.toLowerCase()) ||
                        task.code
                            .toString()
                            .toLowerCase()
                            .includes(search.toLowerCase()) ||
                        task.description
                            .toLowerCase()
                            .includes(search.toLowerCase())
                )
            );
        } else {
            setFilteredTasks(tasks);
        }
    }, [search]);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % tasks.length;
        console.log(event);
        setItemOffset(newOffset);
    };

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <MainLayout>
                <div className={styles.Letters}>
                    <h1>Actividades</h1>

                    {user.role === 1 || user.role === 2 ? (
                        <button
                            className={BtnStyles.BtnDark}
                            onClick={() => setOpenModal(!openModal)}
                        >
                            {" "}
                            Crear nueva actividad{" "}
                        </button>
                    ) : null}
                </div>

                <Search searchValue={search} setSearch={setSearch} />

                {currentItems.map((task) => (
                    <CardActivity
                        key={task.id}
                        task={task}
                        modalTask={modalTask}
                        setModalTask={setModalTask}
                    />
                ))}
            </MainLayout>

            <ModalLayout
                title="Formulario Actividades"
                setOpenModal={setOpenModal}
                openModal={openModal}
                icon="show"
            >
                <FormActivities
                    setOpenModal={setOpenModal}
                    openModal={openModal}
                />
            </ModalLayout>

            {/* formulario de entrega actividad
      <ModalLayout
        title="Entregar actividad"
        setOpenModal={setModalTask}
        openModal={modalTask}
      >
        <h1>Hacer entrega</h1>
        <div className={styles.textareaTitle}>
          <h4>Entrega</h4>
          <textarea cols="70" rows="10" className={styles.textarea}></textarea>
        </div>
        <div className={styles.btnContainer}>
          <button className={BtnStyles.BtnPink}>Enviar</button>
          <button className={BtnStyles.BtnPurple}>Cancelar</button>
        </div>
      </ModalLayout> */}

            <ReactPaginate
                previousLabel={"Anterior"}
                nextLabel={"Siguiente"}
                breakLabel={"..."}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={3}
                onPageChange={handlePageClick}
                containerClassName={pagination.pagination1}
                pageClassName={pagination.pageItem1}
                pageLinkClassName={pagination.pageLink1}
                previousClassName={pagination.pageItem1}
                previousLinkClassName={pagination.pageLink1}
                nextClassName={pagination.pageItem1}
                nextLinkClassName={pagination.pageLink1}
                breakClassName={pagination.pageItem1}
                breakLinkClassName={pagination.pageLink1}
            />
        </motion.div>
    );
};

export default Activities;
