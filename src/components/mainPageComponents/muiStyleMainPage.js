import { styled } from '@mui/material'

//вернхний переключатель
export const genreChangeButtonStyle = {
  mx: '5px',
  mb: '33px',
  px: '10px',
  width: 390,
  height: 55,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  cursor: 'pointer',
  '& .MuiBox-root': {
    width: 70.38,
    height: 35,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  '&:hover': {
    background: 'rgba(135, 135, 135, 0.2)',
    borderRadius: '10px'
  }
}

export const mainBoxStyle = {
  pt: '20px',
  width: 400,
  height: 700,
  background: '#FFFFFF',
  boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.15)',
  borderRadius: '20px'
}

//checkBox type
export const firstCheckBoxStyle = {
  display: 'flex',
  flexDirection: 'column',
  pl: '15px',
  '& .MuiFormControl-root': {
    mt: '10px',
    '& .MuiFormGroup-root': {
      height: 170,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      '& .MuiFormControlLabel-root': {
        m: 0
      }
    }
  }
}

//filter inputs postion
export const filterInputsPos = {
  width: 391,
  height: 55,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  mt: '33px',
  ml: '5px',
  mr: '4px',
  px: '10px',
  '& .MuiSvgIcon-root': {
    width: 15
  }
}

// button (только к этому времени научился делать кастомные блоки)
export const GenButton = styled('button')({
  width: 174,
  height: 52,
  background: '#C94CEE',
  border: 'none',
  borderRadius: '8px',
  color: '#FFFFFF',
  fontFamily: 'Montserrat, sans-serif',
  fontSize: 16,
  fontWeight: 400,
  lineHeight: '20px',
  textTransform: 'uppercase',
  cursor: 'pointer',
  '&:hover': {
    background: '#AD02E0',
    boxShadow: '0px 0px 20px #AD02E0'
  },
  '&:active': {
    background: '#740994',
    boxShadow: 'inset 0px 0px 20px rgba(0, 0, 0, 0.25)'
  }
})

// genre Filter style
export const genreFilterStyle = {
  ml: '20px',
  overflowY: 'scroll',
  '::-webkit-scrollbar': {
    width: 10
  },
  '::-webkit-scrollbar-thumb': {
    background: '#D5D6D5',
    borderRadius: '10px'
  },
  '& .MuiTypography-root': {
    mb: '10px'
  },
  '& .MuiFormControl-root': {
    width: '100%',
    '& .MuiFormGroup-root': {
      width: '100%',
      height: 505,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      flexWrap: 'nowrap',
      '& .MuiFormControlLabel-root': {
        m: '0 0 10px 0',
        '& .MuiTypography-root': {
          m: 0
        }
      }
    }
  }
}

// сначала я попробовал использовать  spacing но оказывается он добавляется paddingLeft and top было не очень удобно

export const gridCardsStyle = {
  ml: 4,
  height: 700,
  width: 820,
  gridTemplate: 'repeat(4,1fr)',
  gridGap: '20px',
  overflowY: 'auto', //это помогло сделать такой мини слайдер для того чтобы крутить карточки каторых не видно
  '::-webkit-scrollbar': {
    display: 'none'
    // width: 15
  }
  // '::-webkit-scrollbar-thumb': {
  //   background: '#D5D6D5',
  //   borderRadius: '10px'
  // },
}
