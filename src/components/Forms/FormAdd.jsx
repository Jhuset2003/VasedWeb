import React, { useState } from "react";
import btn from "../../styles/Buttons.module.css";
import formaddCss from "./styles/FormAdd.module.css";
import { BsFillPlusSquareFill } from "react-icons/bs";

const initialdata = [
  { id: 1, nombre: "jhon doe" },
  { id: 2, nombre: "jhonathan quintana" },
  { id: 3, nombre: "max taylor" },
  { id: 4, nombre: "carlos valdez" },
  { id: 5, nombre: "barry allen" },
];

const FormAdd = () => {
  const [db, setdb] = useState(initialdata);

  const [select, setselect] = useState("");

  const [usuario, setusuario] = useState([]);

  const handleChange = (e) => {
    setselect(e.target.value);
  };

  const buttonadd = () => {
    const user = initialdata.find((item) => item.id == select);
    if (!!user === false) return;
    setusuario([...usuario, user]);
  };

  return (
    <>
      <section className={formaddCss.containerform}>
        <form className={formaddCss.formulario}>
          <div className={formaddCss.title}>
            <h2>Agregar usuarios a las aulas</h2>
            <div className={formaddCss.forminput}></div>
            <div className={formaddCss.inputicons}>
              <select
                name="nombre"
                className={formaddCss.inputselect}
                onChange={handleChange}
              >
                <option defaultValue="" selected>
                  Usuario
                </option>

                {db.map((element) => {
                  return (
                    <option key={element.id} value={element.id}>
                      {element.nombre}
                    </option>
                  );
                })}
              </select>

              <BsFillPlusSquareFill
                className={formaddCss.inputbutton}
                onClick={buttonadd}
              />
            </div>

            <div>
              <section className={formaddCss.listadd}>
                {" "}
                {usuario.map((item) => (
                  <span className={formaddCss.listext}>{item.nombre}</span>
                ))}
              </section>
            </div>
            <div>
              <span className={formaddCss.box}></span>
            </div>
            <div className={formaddCss.buttonsformadd}>
              <button type="submit" className={btn.BtnPurple}>
                Enviar
              </button>
              <button className={btn.BtnPink}> Cancelar</button>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default FormAdd;
