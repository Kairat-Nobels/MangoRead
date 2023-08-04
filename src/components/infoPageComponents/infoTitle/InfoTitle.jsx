import { Box, Typography } from '@mui/material'
import { useState } from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { dataInfoPage } from '../../../service/staticData/staticData'
import { infoTilteStyle } from '../muiStyleInfoPage'

function InfoTitle({ item }) {
  const {  genre } = useSelector(state => state.MangaSlice)
  const [newGenre,setNewGenre] = useState([])
  useEffect(()=>{
    let Genre= []
    item?.genre?.forEach(i=> { 
        genre?.map(item=>{
          if(item.id===i){
            Genre.push(item)
          }
      })
    });
    setNewGenre(Genre)
  },[])
  
  return (
    <Box sx={infoTilteStyle}>
      <img src={item?.image} alt='Представь что тут фотка 😉' />
      <Box>
        <Typography fontSize={40} mb={8} fontWeight={500}>
          {item?.ru_name}
        </Typography>
        <Box width={871}>
          <Typography
            className='infoPos'
            style={{ alignItems: 'flex-start' }}
            fontSize={30}
          >
            {dataInfoPage?.info}{' '}
            <Typography component={'span'} ml={1} color='#878787'>
              en_name: '{item?.en_name}', chapters_quantity:{' '}
              {item?.chapters_quantity},rating: {item?.rating},likes:{' '}
              {item?.likes}
            </Typography>
          </Typography>
          <Typography className='infoPos' variant='regular'>
            {dataInfoPage?.type}{' '}
            <Typography component={'span'} ml={1} color='#878787'>
              {item?.type}
            </Typography>
          </Typography>
          <Typography className='infoPos' variant='regular'>
            {dataInfoPage?.year}{' '}
            <Typography component={'span'} ml={1} color='#878787'>
              {item?.issue_year}
            </Typography>
          </Typography>
          <Typography
            mt='21px'
            display='flex'
            alignItems='self-start'
            variant='regular'
            width={871}
          >
            {dataInfoPage.genre}{' '}
            <Typography component={'span'} ml={1} color='#878787'>
              {newGenre?.map(item=>item?.title)?.join(', ')}
            </Typography>
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default InfoTitle
