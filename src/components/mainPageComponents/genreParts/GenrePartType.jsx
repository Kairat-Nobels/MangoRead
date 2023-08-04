import { Box, FormControl, FormGroup, Typography } from '@mui/material'
import { dataFilter } from '../../../service/staticData/staticData'
import GenreChangeButton from '../genreChangeButton/GenreChangeButton'
import GenreCheckBox from '../genreCheckBox/GenreCheckBox'
import GenreInput from '../genreInput/GenreInput'
import { filterInputsPos, firstCheckBoxStyle } from '../muiStyleMainPage'
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule'
import { useDispatch, useSelector } from 'react-redux'
import { changePanel } from '../../../store/slices/MangaSlice'
import { useState } from 'react'
import {
  addFilterInputs,
  addFilterTypes,
  changeChecking,
  resetAction
} from '../../../store/slices/FilteredSlice'
import { useEffect } from 'react'

function GenrePartType() {
  const dispatch = useDispatch()
  const type = dataFilter.types
  const handleClick = () => {
    dispatch(changePanel())
  }

  const [checking, setChecking] = useState({ ...[false, false, false, false] })
  const handleChange = (e, i, type) => {
    setChecking({ ...checking, [`${i}`]: e.target.checked })
    dispatch(addFilterTypes(type))
  }

  //inputs

  const [inp, SetInp] = useState({ from: '', to: '' })

  const handleChangeInput = (e, param) => {
    SetInp({ ...inp, [param]: e.target.value })
  }
  useEffect(() => {
    dispatch(addFilterInputs(inp))
  }, [inp])

  // const resetAll=()=>{
  //   dispatch(resetAction())
  //   SetInp({from:'',to:''})
  //   setChecking({ ...[false, false, false, false] })
  // }

  return (
    <Box
      sx={{
        height: 600
      }}
    >
      <GenreChangeButton onClick={handleClick} />
      <Box sx={firstCheckBoxStyle}>
        <Typography variant='regular'>Тип</Typography>
        <FormControl>
          <FormGroup>
            <GenreCheckBox
              checked={checking[0]}
              disabled={true === (checking[1] || checking[2] || checking[3])}
              onChange={e => handleChange(e, 0, type[0])}
            >
              <Typography variant='regular'>{type[0]}</Typography>
            </GenreCheckBox>
            <GenreCheckBox
              checked={checking[1]}
              disabled={true === (checking[0] || checking[2] || checking[3])}
              onChange={e => handleChange(e, 1, type[1])}
            >
              <Typography variant='regular'>{type[1]}</Typography>
            </GenreCheckBox>
            <GenreCheckBox
              checked={checking[2]}
              disabled={true === (checking[0] || checking[1] || checking[3])}
              onChange={e => handleChange(e, 2, type[2])}
            >
              <Typography variant='regular'>{type[2]}</Typography>
            </GenreCheckBox>
            <GenreCheckBox
              checked={checking[3]}
              disabled={true === (checking[1] || checking[2] || checking[0])}
              onChange={e => handleChange(e, 3, type[3])}
            >
              <Typography variant='regular'>{type[3]}</Typography>
            </GenreCheckBox>
          </FormGroup>
        </FormControl>
      </Box>
      <Box sx={filterInputsPos}>
        <GenreInput
          value={inp.from}
          onChange={e => handleChangeInput(e, 'from')}
        >
          {dataFilter.inputText.from}
        </GenreInput>
        <HorizontalRuleIcon fontSize='small' />
        <GenreInput value={inp.to} onChange={e => handleChangeInput(e, 'to')}>
          {dataFilter.inputText.to}
        </GenreInput>
      </Box>
    </Box>
  )
}

export default GenrePartType
