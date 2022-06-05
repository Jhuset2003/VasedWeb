import React, { useContext, useEffect, useState } from "react";
import btn from "../../styles/Buttons.module.css";
import formaddCss from "./styles/FormAdd.module.css";
import { RiAddFill } from "react-icons/ri";
import { GlobalContext } from "../../context/GlobalContext";
import Select from "react-select";

const FormAddActivities = () => {


    const handleSubmit = async (e) => {
        e.preventDefault();
    };

    const handleChange = (e) => {
        setSelectActivity(e.value);
    };


    return (
        <>
            <section className={formaddCss.containerform}>
                <form onSubmit={handleSubmit} className={formaddCss.formulario}>
                    <div className={formaddCss.title}>
                        <h2>Asignar una actividad para estudiante</h2>

                        <label htmlFor="names">
                            <span>Selecionar estudiante</span>
                        </label>
                        <div className={formaddCss.inputicons}>
                            <Select
                                onChange={handleChange}
                                className={formaddCss.reactselectcontainer}
                                options={""}
                            />

                            <button type="submit" className={btn.BtnDark}>
                                Asignar <RiAddFill className={formaddCss.icon} />
                            </button>
                        </div>
                    </div>
                </form>
            </section>
        </>
    );
};

export default FormAddActivities;
