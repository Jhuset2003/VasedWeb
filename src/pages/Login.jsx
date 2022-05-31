import React from 'react'
import logo from '../assests/logo-nuevo.png'
import logStylesin from './styles/Login.module.css'

import FormLogin from '../components/Forms/FormLogin'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className={logStylesin.container}>
      <Link to="/" className={logStylesin.logo}>
        <img src={logo} className={logStylesin.logoImg} alt="" />
      </Link>
      <div className={logStylesin.imgBg}>
        <img src="https://cdn.pixabay.com/photo/2015/12/15/06/42/kids-1093758_960_720.jpg" className={logStylesin.bg} alt="" />
      </div>
      <div className={logStylesin.formPt}>
        <FormLogin/>
      </div>
    </div>
  )
}

export default Login