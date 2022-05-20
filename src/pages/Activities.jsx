import CardActivity from '../components/Cards/CardActivity'
import FormUsers from '../components/Forms/FormUsers'
import Search from '../components/Sections/Search'
import MainLayout from '../layout/MainLayout'

const Activities = () => {
  return (
    <div>
      <MainLayout>
        <Search/>
        <CardActivity/>
        <CardActivity/>
        <CardActivity/>
        <CardActivity/>
        <CardActivity/>
      </MainLayout>
    </div>
  )
}

export default Activities