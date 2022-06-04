import React, { useContext, useEffect, useState } from 'react'
import btn from "../../styles/Buttons.module.css";
import formaddCss from "./styles/FormAdd.module.css";
import { RiAddFill } from "react-icons/ri";
import { GlobalContext } from '../../context/GlobalContext';
import { addUserToClassroom } from '../../services/classrooms';
import Select from "react-select";

const FormAddStudents = ({classroom}) => {

  const [selectUser, setSelectUser] = useState(null);
  const [students, setStudents] = useState([]);

  const { state: { users }, dispatch } = useContext(GlobalContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectUser) {
      return;
    }

    const student = users.find((user) => user.id == selectUser);

    const resp = await addUserToClassroom(student.id, classroom.id)

    if(resp.status !== 200 && resp.status !== 204) {
      console.log("error")
      return
    }

    dispatch({
      type: "ADD_STUDENT_TO_CLASSROOM",
      payload: {
        classroomId: classroom.id,
        student
      },
    });
  }

  const handleChange = (e) => {
    setSelectUser(e.value);
  };

  useEffect(() => {
    const studentInClassroom = classroom.users.students;
    console.log(studentInClassroom)
    const filterUsers = users.filter(user => user.roleId === 3 && !studentInClassroom.some(userC => userC.id === user.id));
    setStudents(filterUsers);
  },[])

  return (
    <div>
        <>
      <section className={formaddCss.containerform}>
        <form onSubmit={handleSubmit} className={formaddCss.formulario}>
          <div className={formaddCss.title}>
            <h2>Agregar Estudiantes</h2>
            <div className={formaddCss.forminput}>

              <span>100/1000</span>
            </div>
              <label htmlFor="names">
                <span>Selecionar usuario</span>
              </label>
            <div className={formaddCss.inputicons}>

            <Select onChange={handleChange} className={formaddCss.reactselectcontainer}
            options ={ students.map(people => ({ label: people.names + " " + people.lastNames, value: people.id })) }
            />

              {/* <select
                name="names"
                className={formaddCss.inputselect}
                onChange={handleChange}
              >
                <option defaultValue="">Usuario</option>
                {students.map((people) => {
                  return (
                    <option key={people.id} value={people.id}>
                      {people.names + " " + people.lastNames}
                    </option>
                  );
                })}
              </select> */}

              <button type="submit" className={btn.BtnDark}>
                <RiAddFill className={formaddCss.icon}/>
              </button>
            </div>   
          </div>
        </form>
      </section>
    </>
    </div>
  )
}

export default FormAddStudents