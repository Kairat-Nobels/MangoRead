import { Input } from '@mui/material'
import React from 'react'

function GenreInput({ children, ...props }) {
  return (
    <Input
      {...props}
      type='number'
      disableUnderline={true}
      sx={{
        pl: '15px',
        width: 168,
        height: 55,
        border: '2px solid #2FE09B',
        borderRadius: '8px',
        background: 'transparent'
      }}
      placeholder={children}
    />
  )
}

export default GenreInput
