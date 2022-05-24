import React, { useState } from 'react'
import {VscChevronDown, VscChevronUp} from 'react-icons/vsc'
import btn from '../../styles/Buttons.module.css'
import cardActivity from './styles/CardActividad.module.css'
import {FaTimes} from 'react-icons/fa'

const CardActivity = () => {

    const [expand, setExpand] = useState(false)

    const user = {
        "id" : 1,
        "name" : "Rodrigo Vased",
        "role" : 3
      }

  return (
    <>
        <div className={cardActivity.card}>
            <div className={cardActivity.content} >
                <div className={cardActivity.bgBox}>
                    <div className={cardActivity.textBox}>
                        <h1>Title</h1>
                        <p>subtitle</p>
                    </div>

                    {user.role === 3 ?
                        <div className={cardActivity.circleNote}>
                            <span>5/5</span>
                        </div>
                    :null}
                    
                    {user.role === 1 || user.role === 2 ?
                        <div className={cardActivity.btns}>
                            <button className={btn.BtnWhite}>Editar</button>
                            <button className={btn.BtnDelete}>Eliminar</button>
                        </div>
                    :null}

                </div>
                <div className={cardActivity.textContent}>
                    <div className={cardActivity.text}>
                        <span>Fecha: 20/05/2020</span>

                        <span><strong>Fecha: 20/05/2020</strong></span>
                    </div>
                    
                    {user.role === 1 || user.role === 2 ?
                        <div className={cardActivity.note}>
                            <span>Nota Base: 5</span>
                        </div>
                    :null}

                    {user.role === 3 ?
                        <div className={cardActivity.circleNoteLaptop}>
                            <span>5/5</span>
                        </div>
                    :null}

                    <i className={cardActivity.icon} onClick={()=> setExpand(!expand)}>{expand ? <VscChevronUp/> : <VscChevronDown/>}</i>
                </div>
            </div>

            {expand &&
                <div className={cardActivity.expand}>
                    <div className={cardActivity.activities}>
                        <div className={cardActivity.actTop}>
                            <h2>Tarea 1</h2>
                        </div>
                        <div className={cardActivity.taskDescrip}>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate odit maiores tempora laborum vitae harum aspernatur perferendis reprehenderit modi, officiis nesciunt dolores, eos et, veniam aperiam aliquid quidem fugit tenetur natus doloremque illum eveniet voluptatem accusantium? Cumque et porro sint hic doloribus maxime ducimus veniam consectetur, at nemo amet quae?</p>
                        </div>
                    </div>

                    {user.role === 3 ?
                        <div className={cardActivity.activities}>
                        <div className={cardActivity.actTop}>
                            <h2>Feedback</h2>
                        </div>
                        <div className={cardActivity.taskDescrip}>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate odit maiores tempora laborum vitae harum aspernatur perferendis reprehenderit modi, officiis nesciunt dolores.</p>
                        </div>
                    </div>
                    :null} 

                    {user.role === 1 || user.role === 2 ?
                        <div className={cardActivity.users}>

                            {user.role === 1 ?
                                <div className={cardActivity.teacher}>
                                    <div className={cardActivity.userTop}>
                                        <h2>Profesores</h2>
                                        <button className={`${btn.BtnDark} ${cardActivity.btnfont}`}>Agregar</button>
                                    </div>
                                    <div className={cardActivity.boxScroll}>
                                        <div className={cardActivity.box}>
                                            <span className={cardActivity.boxUser}>user <FaTimes className={cardActivity.iconBox}/> </span>
                                        </div>
                                    </div>
                                </div>
                            :null}


                            <div className={cardActivity.student}>
                                <div className={cardActivity.userTop}>
                                    <h2>Estudiantes</h2>
                                    <button className={`${btn.BtnDark} ${cardActivity.btnfont}`}>Agregar</button>
                                </div>
                                <div className={cardActivity.boxScroll}>
                                    <div className={cardActivity.box}>
                                        <span className={cardActivity.boxUser}>user <FaTimes className={cardActivity.iconBox}/> </span>
                                    </div>
                                </div>
                            </div>

                        </div>
                        :null}
                </div>
            }
        </div>
    </>
  )
}

export default CardActivity