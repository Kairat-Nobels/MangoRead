import { Box } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { getFiltered } from '../../../store/asyncActions/ActionFilter'
import { resetAction } from '../../../store/slices/FilteredSlice'
import { changePanel } from '../../../store/slices/MangaSlice'
import { GenButton } from '../muiStyleMainPage'

function GenreButtons() {
const dispatch = useDispatch()
const { type } = useSelector(state => state.FilteredSlice)

const handleReset =()=>{
  window.location.reload()
}

const handleFilter =()=>{
  dispatch(getFiltered(type))
}
  return (
    <Box
      sx={{
        px: '20px',
        pt: '10px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
      <GenButton onClick={handleReset}>Сбросить</GenButton>
      <GenButton onClick={handleFilter} sx={{ background: '#AD02E0' }}>
        Применить
      </GenButton>
    </Box>
  )
}

export default GenreButtons
