//components
import CardAula from "../components/Cards/CardAula";
import FormAulas from "../components/Forms/FormAulas";
import Search from "../components/Sections/Search";
import MainLayout from "../layout/MainLayout";
import ModalLayout from "../layout/ModalLayout";

//styles
import BtnStyles from "../styles/Buttons.module.css";
import styles from "./styles/AdminUser.module.css";
import pagination from "./styles/pagination.module.css";

//react
import React, { useContext, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { SessionContext } from "../context/SessionContext";
import { GlobalContext } from "../context/GlobalContext";

//paginate
import ReactPaginate from "react-paginate";

const Aulas = () => {
    const [openModal, setOpenModal] = useState(false);

    const { user } = useContext(SessionContext);

    const {
        state: { classrooms },
    } = useContext(GlobalContext);

    const [filteredClassrooms, setFilteredClassrooms] = useState(classrooms);

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
        setCurrentItems(filteredClassrooms.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(filteredClassrooms.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, filteredClassrooms]);

    useEffect(() => {
        if (search !== "") {
            setFilteredClassrooms(
                classrooms.filter(
                    (classroom) =>
                        classroom.name
                            .toLowerCase()
                            .includes(search.toLowerCase()) ||
                        classroom.code
                            .toLowerCase()
                            .includes(search.toLowerCase()) ||
                        classroom.description
                            .toLowerCase()
                            .includes(search.toLowerCase())
                )
            );
        } else {
            setFilteredClassrooms(classrooms);
        }
    }, [search, classrooms]);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % classrooms.length;
        console.log(event);
        setItemOffset(newOffset);
    };
    return (
        <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <MainLayout>
                    <div className={styles.Letters}>
                        <h1>Aulas</h1>
                        {user.role === 1 ? (
                            <button
                                className={BtnStyles.BtnDark}
                                onClick={() => setOpenModal(!openModal)}
                            >
                                Crear nueva aula
                            </button>
                        ) : null}
                    </div>
                    <Search searchValue={search} setSearch={setSearch} />

                    {currentItems.map((classroom) => {
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
                                    key={classroom.id}
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
                renderOnZeroPageCount={null}
            />
        </>
    );
};

export default Aulas;
