import { Route, Routes, useLocation } from 'react-router-dom'
import Layout from '../layouts/Layout'
import PrivateRoute from '../layouts/PrivateRoute'
import InfoPage from '../pages/infoPage/InfoPage'
import AnimatedPage from '../components/animatatedPage/AnimatedPage'

function AppRouter() {
  const location = useLocation()
  return (
    <AnimatedPage>
      <Routes key={location.pathname} location={location}>
        <Route path="*" element={<h1>Not found</h1>} />
        <Route exact path="/" element={<Layout />} />
        <Route element={<PrivateRoute />}>
          <Route path="/infoPage/:id" element={<InfoPage />} />
        </Route>
      </Routes>
    </AnimatedPage>
  )
}

export default AppRouter
