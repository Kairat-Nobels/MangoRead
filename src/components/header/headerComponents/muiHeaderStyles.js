// Я использовал отдельный файл чтобы тут хранить стили mui

//Тут все стилизация которая находиться в папке headerComponents

// Стилизация поиска
export const InputHeaderStyle = {
  background: '#FFFFFF',
  border: '2px solid #878787',
  borderRadius: '8px',
  width: 342,
  height: 56,
  paddingLeft: 2,
  fontFamily: 'Montserrat,sans-serif',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: 20,
  lineHeight: '24px',
  '&.Mui-focused': {
    border: '2px solid #AD02E0',
    color: '#AD02E0',

    '& .MuiSvgIcon-root': {
      display: 'none'
    },
    '& .MuiInputBase-input': {
      paddingLeft: 0
    }
  },
  '& .MuiInputBase-input': {
    paddingLeft: 2
  },
  '& .MuiInputBase-input::placeholder': {
    fontFamily: 'Montserrat,sans-serif',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 20,
    lineHeight: '24px',
    color: '#919191'
  }
}
// стилизация кнопки войти
export const SignInButtonStyle = {
  width: 142,
  height: 50,
  border: '2px solid #AD02E0',
  borderRadius: '8px',
  color: '#000000',
  '&:hover': {
    background: '#AD02E0',
    boxShadow: '0px 0px 20px #AD02E0',
    color: '#FFFFFF'
  },
  '&:active': {
    border: 'none',
    background: '#740994',
    boxShadow: 'inset 0px 0px 20px rgba(0, 0, 0, 0.25)',
    color: '#FFFFFF'
  }
}
//стилизация кнопки регистрации
export const SignUpButtonStyle = {
  color: '#FFFFFF',
  background: '#AD02E0',
  borderRadius: '8px',
  width: 206,
  height: 50,
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
}

// стилизация кнопки профиля
export const profilStyle = {
  paperProps: {
    elevation: 0,
    sx: {
      overflow: 'visible',
      filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
      mt: 1.5,
      '& .MuiAvatar-root': {
        width: 32,
        height: 32,
        ml: -0.5,
        mr: 1
      },
      '&:before': {
        content: '""',
        display: 'block',
        position: 'absolute',
        top: 0,
        right: 14,
        width: 10,
        height: 10,
        bgcolor: 'background.paper',
        transform: 'translateY(-50%) rotate(45deg)',
        zIndex: 0
      }
    }
  },
  mainStyle: {
    display: 'flex',
    alignItems: 'center',
    minWidth: 269,
    height: 80,
    cursor: 'pointer'
  }
}
