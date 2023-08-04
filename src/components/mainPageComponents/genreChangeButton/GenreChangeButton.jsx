import { Box, Typography } from '@mui/material'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { genreChangeButtonStyle } from '../muiStyleMainPage'
import { dataFilter } from '../../../service/staticData/staticData'

function GenreChangeButton({ ...props }) {
  return (
    <Box {...props} sx={genreChangeButtonStyle}>
      <Typography variant='regular'>{dataFilter.changeTitle}</Typography>
      <Box>
        <Typography color='#878787' variant='regular'>
          все
        </Typography>
        <ArrowForwardIosIcon
          fontSize='small'
          sx={{
            width: 25,
            height: 25,
            color: ' #878787'
          }}
        />
      </Box>
    </Box>
  )
}

export default GenreChangeButton
