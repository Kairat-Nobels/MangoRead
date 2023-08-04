import { Box, Typography } from '@mui/material'
import { dataInfoPage } from '../../../service/staticData/staticData'

function Back() {
  return (
    <Box
      sx={{
        cursor: 'pointer'
      }}
    >
      <img src={dataInfoPage.backIcon} alt='' />
      <Typography ml={3} variant='regular' color='#878787'>
        {dataInfoPage.backTitle}
      </Typography>
    </Box>
  )
}

export default Back
