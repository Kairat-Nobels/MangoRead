import SearchIcon from '@mui/icons-material/Search'
import { Input, InputAdornment } from '@mui/material'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useDebounce from '../../../../hooks/useDebounce'
import { searchAction } from '../../../../store/asyncActions/ActionFilter'
import { InputHeaderStyle } from '../muiHeaderStyles'

function InputHeader() {
  const dispatch = useDispatch()
  // const { params } = useSelector(state => state.FilterReducer)
  const [value, setValue] = useState('')

  const search = () => {
    // dispatch(searchAction({search:value,param:params}))
    dispatch(searchAction(value))
  }
  const debouncedCB = useDebounce(search, 500)
  const handleChange = e => {
    setValue(e.target.value)
    debouncedCB(e.target.value)
  }

  return (
    <Input
      id='inputHeader'
      placeholder='Placeholder'
      type='search'
      onChange={handleChange}
      sx={InputHeaderStyle}
      disableUnderline={true}
      startAdornment={
        <InputAdornment position='start'>
          <SearchIcon
            sx={{
              width: 24,
              height: 24,
              color: '#000000'
            }}
          />
        </InputAdornment>
      }
    />
  )
}

export default InputHeader
