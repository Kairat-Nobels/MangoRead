import { Box, CircularProgress, Container } from '@mui/material'
import { Link } from 'react-router-dom'
import Back from '../../components/infoPageComponents/back/Back'
import Comments from '../../components/infoPageComponents/comments/Comments'
import InfoTitle from '../../components/infoPageComponents/infoTitle/InfoTitle'
import Line from '../../components/infoPageComponents/line/Line'
import Synopsis from '../../components/infoPageComponents/synopsis/Synopsis'
import Paganation from '../../components/pagination/Pagination'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getOneManga } from '../../store/asyncActions/ActionsManga'

function InfoPage() {
  const { id } = useParams()
  const dispatch = useDispatch()
  const { loading, onePage } = useSelector(state => state.MangaSlice)

  useEffect(() => {
    dispatch(getOneManga(id))
  }, [id])

  return (
    <Box my="32px">
      {loading ? (
        <div style={{ width: '500px', height: '500px', margin: '20px auto' }}>
          <CircularProgress
            style={{ width: '500px', height: '500px' }}
            color="third"
          />
        </div>
      ) : (
        <Container disableGutters width="lg">
          <Link
            style={{
              textDecoration: 'none'
            }}
            to={-1}
          >
            <Back />
          </Link>
          <InfoTitle item={onePage} />
          <Line />
          <Synopsis item={onePage} />
          <Line />
          <Comments />
          <Paganation />
        </Container>
      )}
    </Box>
  )
}

export default InfoPage
