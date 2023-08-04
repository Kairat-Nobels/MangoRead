import { Box, Typography } from '@mui/material'
import { dataFilter } from '../../../service/staticData/staticData'

function GenreChangeBackButton({ ...props }) {
  return (
    <Box
      {...props}
      sx={{
        px: '20px',
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        height: 40,
        mb: '10px',
        '& img': {
          mr: '10px'
        },
        '&:hover': {
          background: 'rgba(135, 135, 135, 0.2)',
          borderRadius: '10px'
        }
      }}
    >
      <img src={dataFilter.icon.back} alt="iconBack" />
      <Typography variant="regular" color="#878787">
        Назад
      </Typography>
    </Box>
  )
}

export default GenreChangeBackButton
