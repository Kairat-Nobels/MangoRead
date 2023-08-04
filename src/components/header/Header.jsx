import { Container } from '@mui/material'
import { useSelector } from 'react-redux'
import { useModalOpen } from '../../hooks/useModalOpen'
import { dataHeader } from '../../service/staticData/staticData'
import Modall from '../modal/Modal'
import classes from './Header.module.css'
import SingInButton from './headerComponents/buttons/SignInButton'
import SignUpButton from './headerComponents/buttons/SignUpButton'
import InputHeader from './headerComponents/input/InputHeader'
import Profil from './headerComponents/profil/Profil'

function Header() {
  const { handleSignIn, handleSignUp } = useModalOpen()
  const { auth } = useSelector(state => state.auth)
  const { siteName, slogan, logohead } = dataHeader
  return (
    <header>
      <Container disableGutters width='lg'>
        <div className={classes.headerInner}>
          <a
            href=''
            style={{
              textDecoration: 'none'
            }}
          >
            <div className={classes.headerLogo}>
              <img src={logohead} alt='logotipIcon' />
              <div className={classes.logoText}>
                <span>{siteName}</span>
                <p>{slogan}</p>
              </div>
            </div>
          </a>
          <InputHeader />
          {auth ? (
            <Profil user={auth} />
          ) : (
            <div className={classes.buttons}>
              <SingInButton onClick={handleSignIn} />
              <SignUpButton onClick={handleSignUp} />
            </div>
          )}
        </div>
      </Container>
      <Modall />
    </header>
  )
}

export default Header
