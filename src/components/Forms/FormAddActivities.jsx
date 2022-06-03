import React, { useContext, useEffect, useState } from "react";
import btn from "../../styles/Buttons.module.css";
import formaddCss from "./styles/FormAdd.module.css";
import { RiAddFill } from "react-icons/ri";
import { GlobalContext } from "../../context/GlobalContext";
import { addUserToClassroom } from "../../services/classrooms";
import Select from "react-select";

const FormAddActivities = ({ classroom }) => {

  const [selectActivity, setSelectActivity] = useState(null);
  const [activities, setActivities] = useState([]);

  const { state: { tasks }, dispatch } = useContext(GlobalContext);
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectActivity) {
      return;
    }

    const task = tasks.find((task) => task.id == selectActivity);

    const resp = await addUserToClassroom(task.id, classroom.id)

    if(resp.status !== 200 && resp.status !== 204) {
      console.log("error")
      return
    }

    dispatch({
      type: "ADD_TASK_TO_CLASSROOM",
      payload: {
        classroomId: classroom.id,
        task
      },
    });
  }

  const handleChange = (e) => {
    setSelectActivity(e.target.value);
  };

  useEffect(() => {
    const taskInClassroom = classroom.tasks;
    console.log(taskInClassroom)
    console.log(classroom)
    console.log(activities)
    const filterTasks = tasks.filter(task => task && !taskInClassroom.some(taskC => taskC.id === task.id));
    setActivities(filterTasks);
  },[])

  return (
    <>
      <section className={formaddCss.containerform}>
        <form onSubmit={handleSubmit} className={formaddCss.formulario}>
          <div className={formaddCss.title}>
            <h2>Agregar una actividad</h2>
            
              <label htmlFor="names">
                <span>Selecionar actividad</span>
              </label>
            <div className={formaddCss.inputicons}>

              <Select className={formaddCss.reactselectcontainer}
              options ={ activities.map(sup => ({ label: sup.name, value: sup.name + " " + ">>" + " Código " + sup.code })) }
              />

              {/* <select
                name="names"
                className={formaddCss.inputselect}
                onChange={handleChange}
              >
                <option defaultValue="">Actividad</option>
                {activities.map((item) => {
                  return (
                    <option key={item.id} value={item.id}>
                      {item.name + " " + ">>" + " Código " + item.code}
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
  )
}

export default FormAddActivities