import { Logout, Settings } from '@mui/icons-material'
import {
  Avatar,
  Box,
  Divider,
  ListItemIcon,
  Menu,
  MenuItem,
  Tooltip,
  Typography
} from '@mui/material'
import { memo, useState } from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import { profilStyle } from '../muiHeaderStyles'
import { useDispatch } from 'react-redux'
import { logOut } from '../../../../store/asyncActions/ActionsAuth'

function Profil({ user }) {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  const dispatch = useDispatch()
  const handleLogOut = () => {
    dispatch(logOut())
  }
  return (
    <Box>
      <Tooltip title='Account'>
        <Box
          onClick={handleClick}
          size='small'
          aria-controls={open ? 'account-menu' : undefined}
          aria-haspopup='true'
          aria-expanded={open ? 'true' : undefined}
          sx={profilStyle.mainStyle}
        >
          <Typography sx={{ fontSize: 24, mr: 5 }}>{user.username}</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Avatar sx={{ width: 80, height: 80 }} src={user.image_file} />
            <ArrowDropDownIcon sx={{ width: 24, height: 24, ml: 2 }} />
          </Box>
        </Box>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        id='account-menu'
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={profilStyle.paperProps}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleLogOut}>
          <ListItemIcon>
            <Logout fontSize='small' />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </Box>
  )
}

export default memo(Profil)
