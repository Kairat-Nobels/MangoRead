import { Button } from '@mui/material'
import { dataHeader } from '../../../../service/staticData/staticData'
import { SignInButtonStyle } from '../muiHeaderStyles'

function SignInButton({ ...props }) {
  return (
    <Button {...props} sx={SignInButtonStyle}>
      {dataHeader.buttons.signIn}
    </Button>
  )
}

export default SignInButton
