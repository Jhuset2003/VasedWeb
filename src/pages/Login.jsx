import React from 'react'
import logo from '../assests/logo-nuevo.png'
import logStylesin from './styles/Login.module.css'

import FormLogin from '../components/Forms/FormLogin'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
const Login = () => {
  return (
    <motion.div className={logStylesin.container} initial={{opacity:0}} animate={{opacity:1}}>
      <Link to="/" className={logStylesin.logo}>
        <img src={logo} className={logStylesin.logoImg} alt="" />
      </Link>
      <div className={logStylesin.imgBg}>
        <img src="https://cdn.pixabay.com/photo/2015/12/15/06/42/kids-1093758_960_720.jpg" className={logStylesin.bg} alt="" />
      </div>
      <div className={logStylesin.formPt}>
        <FormLogin/>
      </div>
    </motion.div>
  )
}

export default Login