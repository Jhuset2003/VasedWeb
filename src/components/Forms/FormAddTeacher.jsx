import React, { useContext, useEffect, useState } from "react";
import btn from "../../styles/Buttons.module.css";
import formaddCss from "./styles/FormAdd.module.css";
import { RiAddFill } from "react-icons/ri";
import { GlobalContext } from "../../context/GlobalContext";
import { addUserToClassroom } from "../../services/classrooms";
import Select from "react-select";

const FormAddTeacher = ({ classroom }) => {

  const [selectUser, setSelectUser] = useState(null);
  const [teachers, setTeachers] = useState([]);

  const { state: { users }, dispatch } = useContext(GlobalContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectUser) {
      return;
    }

    const teacher = users.find((user) => user.id == selectUser);

    const resp = await addUserToClassroom(teacher.id, classroom.id)

    if(resp.status !== 200 && resp.status !== 204) {
      console.log("error")
      return
    }

    dispatch({
      type: "ADD_TEACHER_TO_CLASSROOM",
      payload: {
        classroom,
        teacher
      },
    });
  }

  const handleChange = (e) => {
    setSelectUser(e.target.value);
  };

  useEffect(() => {
    const teacherInClassroom = classroom.users.teachers;
    const filterUsers = users.filter(user => user.roleId === 2 && !teacherInClassroom.some(userC => userC.id === user.id));
    setTeachers(filterUsers);
  },[])

  return (
    <>
      <section className={formaddCss.containerform}>
        <form onSubmit={handleSubmit} className={formaddCss.formulario}>
          <div className={formaddCss.title}>
            <h2>Agregar Profesores</h2>
            <div className={formaddCss.forminput}>

              
            </div>
              <label htmlFor="names">
                <span>Selecionar usuario</span>
              </label>
            <div className={formaddCss.inputicons}>

              <Select onChange={handleChange} className={formaddCss.reactselectcontainer}
              options ={ teachers.map(people => ({ label: people.names + " " + people.lastNames, value: people.id })) }
              />

              <button type="submit" className={btn.BtnDark}>
                Añadir <RiAddFill className={formaddCss.icon}/>
              </button>
            </div>   
          </div>
        </form>
      </section>
    </>
  );
};

export default FormAddTeacher;
