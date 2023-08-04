import { Box, Container } from '@mui/material'
import GenreFilter from '../../components/mainPageComponents/genreFilter/GenreFilter'
import Paganation from '../../components/pagination/Pagination'
import Page from './Page'

function MangasPages() {
  return (
    <Box
      sx={{
        pb: '37px',
        background: '#F3F3F3'
      }}
    >
      <Container disableGutters width="lg">
        <Box
          sx={{
            display: 'flex'
          }}
        >
          <GenreFilter />
          <Page />
        </Box>
      </Container>
      <Paganation />
    </Box>
  )
}

export default MangasPages
