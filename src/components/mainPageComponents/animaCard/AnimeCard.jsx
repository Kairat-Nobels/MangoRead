import { Box, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

function AnimeCard({ item })
{
  return (
    <Link style={{ textDecoration: 'none' }} to={`/infoPage/${item?.id}`}>
      <Box
        sx={{
          width: 190,
          height: 220,
          cursor: 'pointer',
          background: `linear-gradient(180deg, rgba(0, 0, 0, 0) 5.73%, rgba(0, 0, 0, 0.5) 66.15%), url(${item.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: '16px',
          px: 2,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          '& .MuiTypography-root': {
            mb: '11px'
          }
        }}
      >
        <Typography variant='cardYear'>Год: {item?.issue_year}</Typography>

        <Typography variant='cardName'>{item?.ru_name?.length <= 50 ? item?.ru_name : item?.ru_name?.slice(0, 50) + '... '}</Typography>
      </Box>
    </Link>
  )
}

export default AnimeCard
