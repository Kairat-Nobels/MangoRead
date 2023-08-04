import { CircularProgress, Grid, Typography } from '@mui/material'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AnimeCard from '../../components/mainPageComponents/animaCard/AnimeCard'
import { gridCardsStyle } from '../../components/mainPageComponents/muiStyleMainPage'
import { getTopManga } from '../../store/asyncActions/ActionsManga'

function Page()
{
  const dispatch = useDispatch()
  const { topManga, params, loading } = useSelector(state => state.MangaSlice)
  const { filtered, load } = useSelector(state => state.FilteredSlice)
  console.log(filtered);
  useEffect(() =>
  {
    dispatch(getTopManga(params))
  }, [params])
  return (
    <>
      {loading || load ? (
        <CircularProgress
          style={{ width: '500px', height: '500px', margin: '20px auto' }}
          color="third"
        />
      ) : (
        <Grid sx={gridCardsStyle} container>
          {/* //второй вариант с видимым скроллом */}
          {/* <Grid  style={filtered ? {width:'100%'} : {}} sx={gridCardsStyle} container> */}
          {filtered === null ? (
            topManga?.results?.map(item => (
              <Grid xs={3} key={item.id} item>
                <AnimeCard item={item} />
              </Grid>
            ))
          ) : filtered?.length !== 0 ? (
            filtered?.map(item => (
              <Grid xs={3} key={item.id} item>
                <AnimeCard item={item} />
              </Grid>
            ))
          ) : (
            <Typography variant="h3">Not Found</Typography>
          )}
        </Grid>
      )}
    </>
  )
}

export default Page
