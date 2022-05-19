import React, { useState } from 'react'
import {VscChevronDown, VscChevronUp} from 'react-icons/vsc'
import btn from '../../styles/Buttons.module.css'
import cardCss from './styles/CardAula.module.css'
import {FaTimes} from 'react-icons/fa'

import MainLayout from '../../layout/MainLayout'
import MiniCardActivity from './MiniCardActivity'

const CardAula = () => {

    const [expand, setExpand] = useState(false)

  return (
    <>
    <MainLayout>
        <div className={cardCss.card}>
            <div className={cardCss.content} >
                <div className={cardCss.bgBox}>
                    <div className={cardCss.textBox}>
                        <h1>Title</h1>
                        <p>subtitle</p>
                    </div>
                    <div className={cardCss.btns}>
                        <button className={btn.BtnWhite}>Editar</button>
                        <button className={btn.BtnDark}>Eliminar</button>
                    </div>
                </div>
                <div className={cardCss.textContent}>
                    <div className={cardCss.text}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                        <span><strong>Fecha: 20/05/2020</strong></span>
                    </div>
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
                            <MiniCardActivity/>
                            <MiniCardActivity/>
                        </div>
                    </div>
                    <div className={cardCss.users}>
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
                </div>
            }
        </div>
    </MainLayout>
    </>
  )
}

export default CardAula