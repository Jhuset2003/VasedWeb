import React from 'react'
import mainStlyes from './MainLayout.module.css'


const MainLayout = ({children}) => {
  return (
    <div className={mainStlyes.centerMain}>
        <div className={mainStlyes.mainLayout}>
            {children}
        </div>
    </div>
  )
}
/* 
Este componente tiene como funcion generar una margin para los diferentes puntos de quiebre que tiene el responsive, adicional centra los elementos. Tiene como propiedad principal children que recibe el contenido que se quiere que adquiera esta propiedad

Ejemplo de uso
<MainLayout>
    <img src="https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572_960_720.jpg" style={{width: "100%", height: "auto"}} alt="" />
</MainLayout>*/

export default MainLayout