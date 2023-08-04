import { Avatar, Box, Typography } from '@mui/material'

function Comment({ user, comm }) {
  return (
    <Box
      sx={{
        pl: 2,
        mb: '33px',
        display: 'flex',
        overflowY: 'auto',
        '& .MuiAvatar-root': {
          width: 100,
          height: 100,
          mr: '26px'
        },
        '& .comment': {
          pl: '26px',
          borderLeft: '2px solid #878787'
        }
      }}
    >
      <Avatar alt='avatar' src={user?.image_file} />
      <Box className='comment'>
        <Typography mb='13px' fontSize={35}>
          {user?.username}
        </Typography>
        <Typography variant='regular' color='#878787'>
          {comm}
        </Typography>
      </Box>
    </Box>
  )
}

export default Comment
