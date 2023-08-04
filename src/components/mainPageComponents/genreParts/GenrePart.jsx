import { Box, FormControl, FormGroup, Typography } from '@mui/material'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { dataFilter } from '../../../service/staticData/staticData'
import {
  addFilterGenre,
  changeCheck
} from '../../../store/slices/FilteredSlice'
import { changePanel } from '../../../store/slices/MangaSlice'
import GenreChangeBackButton from '../genreChangeButton/GenreChangeBackButton'
import GenreCheckBox from '../genreCheckBox/GenreCheckBox'
import { genreFilterStyle } from '../muiStyleMainPage'

function GenrePart({ genre }) {
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(changePanel())
  }

  const [check, setCheck] = useState({})
  const handleChage = (e, param) => {
    setCheck({ ...check, [param]: e.target.checked })
    dispatch(addFilterGenre(param))
  }
  return (
    <Box>
      <GenreChangeBackButton onClick={handleClick} />
      <Box sx={genreFilterStyle}>
        <Typography variant='h3'>Жанры</Typography>
        <FormControl>
          <FormGroup>
            {genre?.map(item => (
              <GenreCheckBox
                checked={check[item.id]}
                onChange={e => handleChage(e, item.id)}
                key={item?.id}
              >
                <Typography variant='regular'>{item?.title}</Typography>
              </GenreCheckBox>
            ))}
          </FormGroup>
        </FormControl>
      </Box>
    </Box>
  )
}

export default GenrePart
