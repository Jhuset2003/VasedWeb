import React from 'react'
import CardAula from '../components/Cards/CardAula'
import Search from '../components/Sections/Search'
import MainLayout from '../layout/MainLayout'

const Aulas = () => {
  return (
    
    <div>
      <MainLayout>
        <Search/>
        <CardAula/>
        <CardAula/>
        <CardAula/>
      </MainLayout>
    </div>

  )
}

export default Aulas