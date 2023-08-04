import { Navigate } from 'react-router-dom'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import MangasPages from '../pages/mangasPages/MangasPages'

function Layout() {
  return (
    <>
      <Header />
      <MangasPages />
      <Footer />
    </>
  )
}

export default Layout
