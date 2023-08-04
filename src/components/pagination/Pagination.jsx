import { Box, Pagination, PaginationItem } from '@mui/material'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import { paginationStyle } from '../muiComponentsStyle'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { paramsNext } from '../../store/slices/MangaSlice'

function Paganation()
{
  const dispatch = useDispatch()
  const { topManga, params } = useSelector(state => state.MangaSlice)
  const { filtered } = useSelector(state => state.FilteredSlice)
  const [p, setP] = useState(1)
  const [pages, setPages] = useState(0)
  useEffect(() =>
  {
    setPages(Math.floor(topManga?.count / params.limit))
  }, [topManga])
  const handleChange = (event, value) =>
  {
    setP(value)
  }
  useEffect(() =>
  {
    p !== 1 ? dispatch(paramsNext(p * params.limit)) : dispatch(paramsNext(0))
  }, [p])

  return (
    <Box sx={paginationStyle}>
      {filtered ? (
        <></>
      ) : (
        <Pagination
          count={pages ? pages : 0}
          page={p}
          onChange={handleChange}
          color="secondary"
          siblingCount={0}
          boundaryCount={1}
          renderItem={item => (
            <PaginationItem
              slots={{
                previous: ArrowBackIosNewIcon,
                next: ArrowForwardIosIcon
              }}
              {...item}
            />
          )}
        />
      )}
    </Box>
  )
}

export default Paganation
