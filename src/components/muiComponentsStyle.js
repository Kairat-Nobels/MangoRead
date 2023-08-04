import { styled } from '@mui/material'

export const paginationStyle = {
  mt: '28px',
  display: 'flex',
  justifyContent: 'center',
  '& .MuiPaginationItem-root': {
    color: '#A5A5A5',
    fontSize: 45
  },
  '&& .MuiButtonBase-root': {
    width: 45,
    height: 45,
    borderRadius: '50%',
    fontSize: 24,
    lineHeight: '35px',
    color: '#A5A5A5'
  },
  '&& .Mui-selected': {
    color: '#FFFFFF'
  },
  '& .MuiPagination-root': {
    width: 400
  }
}

export const modalStyle = {
  width: 603,
  px: '52px',
  pt: '31px',
  margin: 'auto',
  bgcolor: 'background.paper',
  borderRadius: '30px',
  boxShadow: 24,
  border: 'none',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  '& img': {
    float: 'right',
    mb: '12px',
    cursor: 'pointer'
  },
  '& .MuiTabs-indicator': {
    height: 5,
    backgroundColor: '#AD02E0',
    borderRadius: '10px'
  },
  '& .tabContent': {
    borderBottom: '2px solid #878787',
    '& .MuiButtonBase-root': {
      p: 0,
      minWidth: 61,
      minHeight: 35,
      mb: 1,
      mr: 6,
      justifyContent: 'flex-end'
    }
  },
  '&:focus-visible': {
    outline: 'none'
  }
}

// input
export const InputForm = styled('input')({
  width: 500,
  height: 52,
  paddingLeft: '10px',
  border: '1px solid #000000',
  borderRadius: '8px',
  fontFamily: 'Montserrat, sans-serif',
  fontSize: 24,
  fontWeight: 400,
  color: '#000000',
  lineHeight: '35px',
  '&:focus-visible': {
    border: '3px solid #AD02E0',
    outline: 'none'
  }
})

// button
export const ButtonForm = styled('button')({
  width: '100%',
  height: 50,
  background: '#AD02E0',
  borderRadius: '8px',
  fontFamily: 'Montserrat, sans-serif',
  fontSize: 16,
  fontWeight: 400,
  lineHeight: '20px',
  color: '#FFFFFF',
  textTransform: 'uppercase',
  border: 'none',
  cursor: 'pointer',
  '&:hover': {
    background: '#AD02E0',
    boxShadow: '0px 0px 20px #AD02E0',
    color: '#FFFFFF'
  },
  '&:active': {
    background: '#740994',
    boxShadow: 'inset 0px 0px 20px rgba(0, 0, 0, 0.25)',
    color: '#FFFFFF'
  }
})
// remember me checkBox style
export const checkBoxStyle = {
  mr: '10px',
  width: 35,
  height: 35,
  border: '2px solid #AD02E0',
  borderRadius: '5px',
  color: '#FFFFFF',
  '&.Mui-checked': {
    color: '#AD02E0'
  },
  '& .MuiSvgIcon-root': {
    width: 44,
    height: 44
  },
  '& MuiFormControlLabel-root': {
    m: 0
  },
  '&.Mui-disabled':{
    color:'#FFFFFF'
  }
}

export const signUpStyle = {
  height: 558,
  width: 500,
  overflowY: 'auto',
  '::-webkit-scrollbar': {
    display: 'none'
  },
  mt: 8,
  mb: '58px',
  '& label': {
    display: 'block',
    width: 181,
    height: 222,
    mb: '40px',
    mx: 'auto',
    textAlign: 'center',
    cursor: 'pointer'
  },
  '& .inp': {
    mb: '30px'
  }
}
