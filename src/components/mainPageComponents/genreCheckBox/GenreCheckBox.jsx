import { Checkbox, FormControlLabel } from '@mui/material'
import { memo } from 'react'

function GenreCheckBox({ children, ...props }) {
  return (
    <FormControlLabel
      control={
        <Checkbox
          {...props}
          sx={{
            mr: '10px',
            width: 35,
            height: 35,
            border: '2px solid #2FE09B',
            borderRadius: '5px',
            color: '#FFFFFF',
            '&.Mui-checked': {
              color: '#2FE09B'
            },
            '& .MuiSvgIcon-root': {
              width: 44,
              height: 44
            },
            '&.Mui-disabled':{
              color:'#FFFFFF'
            }
          }}
        />
      }
      label={children}
    />
  )
}

export default memo(GenreCheckBox)
