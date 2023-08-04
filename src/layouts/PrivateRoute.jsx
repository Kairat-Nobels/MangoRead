import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'

function PrivateRoute() {
  const { auth } = useSelector(state => state.auth)
  return (
    <div>
      {auth?.username ? (
        <div>
          <Header />
          <Outlet />
          <Footer />
        </div>
      ) : (
        <Navigate to="/" />
      )}
    </div>
  )
}

export default PrivateRoute
