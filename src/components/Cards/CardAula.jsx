import React, { useState } from 'react'
import {VscChevronDown, VscChevronUp} from 'react-icons/vsc'
import btn from '../../styles/Buttons.module.css'
import cardCss from './styles/CardAula.module.css'
import {FaTimes} from 'react-icons/fa'

import MiniCardActivity from './MiniCardActivity'
import ProgressBar from './ProgressBar'

const CardAula = () => {

    const [expand, setExpand] = useState(false)

    const user = {
        "id" : 1,
        "name" : "Rodrigo Vased",
        "role" : 1
      }

  return (
    <>
        <div className={cardCss.card}>
            <div className={cardCss.content} >
                <div className={cardCss.bgBox}>
                    <div className={cardCss.textBox}>
                        <h1>Title</h1>
                        <p>subtitle</p>
                    </div>

                    {user.role === 3 ? 
                    <div className={cardCss.bar}>
                    <ProgressBar percentage="50"/>
                    </div>
                    :null}

                    {user.role === 1 ? 
                    <div className={cardCss.btns}>
                        <button className={btn.BtnWhite}>Editar</button>
                        <button className={btn.BtnDelete}>Eliminar</button>
                    </div>
                    : null}

                </div>
                <div className={cardCss.textContent}>
                    <div className={cardCss.text}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                        <span><strong>Fecha: 20/05/2020</strong></span>
                    </div>
                    
                    {user.role === 3 ? 
                    <div className={cardCss.barlaptop}>
                    <ProgressBar percentage="50"/>
                    </div>
                    :null}

                    <i className={cardCss.icon} onClick={()=> setExpand(!expand)}>{expand ? <VscChevronUp/> : <VscChevronDown/>}</i>
                </div>
            </div>

            {expand &&
                <div className={cardCss.expand}>
                    <div className={cardCss.activities}>
                        <div className={cardCss.actTop}>
                            <h2>Actividades</h2>
                            <button className={`${btn.BtnDark} ${cardCss.btnfont}`}>Crear una aula</button>
                        </div>
                        <div className={cardCss.miniCards}>
                            <MiniCardActivity user={user}/>
                        </div>
                    </div>

                    {user.role === 1 || user.role === 2 ?

                        <div className={cardCss.users}>
                            {user.role === 1 ?
                                <div className={cardCss.teacher}>
                                    <div className={cardCss.userTop}>
                                        <h2>Profesores</h2>
                                        <button className={`${btn.BtnDark} ${cardCss.btnfont}`}>Agregar</button>
                                    </div>
                                    <div className={cardCss.boxScroll}>
                                        <div className={cardCss.box}>
                                            <span className={cardCss.boxUser}>user <FaTimes className={cardCss.iconBox}/> </span>
                                        </div>
                                    </div>
                                </div>
                                :null}

                            <div className={cardCss.student}>
                                <div className={cardCss.userTop}>
                                    <h2>Estudiantes</h2>
                                    <button className={`${btn.BtnDark} ${cardCss.btnfont}`}>Agregar</button>
                                </div>
                                <div className={cardCss.boxScroll}>
                                    <div className={cardCss.box}>
                                        <span className={cardCss.boxUser}>user <FaTimes className={cardCss.iconBox}/> </span>
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

export default CardAula