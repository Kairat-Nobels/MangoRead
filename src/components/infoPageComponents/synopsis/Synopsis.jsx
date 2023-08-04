import { Box, Typography } from '@mui/material'
import { dataInfoPage } from '../../../service/staticData/staticData'

function Synopsis({ item }) {
  return (
    <Box
      sx={{
        my: '33px'
      }}
    >
      <Typography fontSize={35} fontWeight={500} mb={2}>
        {dataInfoPage.synop}
      </Typography>
      <Typography color='#616161'>
        {item?.description
          ?.replace(/(([<][/]|[<])p[>]*>)/g, '')
          .replace(/[<br />]/g, '\n\r')
          .replace(/[&mdash]/g, '')}
      </Typography>
    </Box>
  )
}

export default Synopsis
