import { Box } from '@mui/material'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getGenre } from '../../../store/asyncActions/ActionsManga'
import GenreButtons from '../genreButtons/GenreButtons'
import GenrePart from '../genreParts/GenrePart'
import GenrePartType from '../genreParts/GenrePartType'
import { mainBoxStyle } from '../muiStyleMainPage'

function GenreFilter() {
  const { panel, genre } = useSelector(state => state.MangaSlice)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getGenre())
  }, [])

  return (
    <Box sx={mainBoxStyle}>
      {panel ? <GenrePartType /> : <GenrePart genre={genre} />}
      <GenreButtons />
    </Box>
  )
}

export default GenreFilter
