import { Button } from '@mui/material'
import { dataHeader } from '../../../../service/staticData/staticData'
import { SignUpButtonStyle } from '../muiHeaderStyles'

function SignUpButton({ ...props }) {
  return (
    <Button {...props} sx={SignUpButtonStyle}>
      {dataHeader.buttons.singUp}
    </Button>
  )
}

export default SignUpButton
