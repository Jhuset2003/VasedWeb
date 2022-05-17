import btn from '../styles/Buttons.module.css'
import profileCss from './styles/Profile.module.css'

import MainLayout from '../layout/MainLayout'
import FormProfile from '../components/Forms/FormProfile'

const Profile = () => {
  return (
    <>
        <MainLayout>
            <div className={profileCss.contProfile}>
                <h1 className={profileCss.title}>Perfil</h1>
                <button className={btn.BtnPink}>Cerrar sesión</button>
            </div>
            <FormProfile/>
        </MainLayout>
    </>
  )
}

export default Profile