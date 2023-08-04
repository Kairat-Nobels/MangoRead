import { Box, Modal, Slide, Tab, Tabs, Typography } from '@mui/material'
import { useModalOpen } from '../../hooks/useModalOpen'
import { dataModal } from '../../service/staticData/staticData'
import LogIn from '../logIn/LogIn'
import { modalStyle } from '../muiComponentsStyle'
import SignUp from '../signUp/SignUp'
import { a11yProps, TabPanel } from './Tabpanel'

function Modall() {
  const { open, panel, handleChange, handleClose } = useModalOpen()
  const { krestik, singIn, singUp } = dataModal
  return (
    <Modal open={open} sx={{ zIndex: 1000 }} onClose={handleClose}>
      <Slide
        timeout={300}
        direction='down'
        in={open}
        mountOnEnter
        unmountOnExit
      >
        <Box style={panel === 0 ? { marginTop: '10%' } : ''} sx={modalStyle}>
          <img onClick={handleClose} src={krestik} alt='krestik' />
          <Box sx={{ width: '100%' }}>
            <Box className='tabContent'>
              <Tabs
                value={panel}
                onChange={handleChange}
                aria-label='basic tabs example'
              >
                <Tab
                  label={<Typography variant='regular'>{singIn}</Typography>}
                  {...a11yProps(0)}
                />
                <Tab
                  label={<Typography variant='regular'>{singUp}</Typography>}
                  {...a11yProps(1)}
                />
              </Tabs>
            </Box>
            <TabPanel value={panel} index={0}>
              <LogIn />
            </TabPanel>
            <TabPanel value={panel} index={1}>
              <SignUp />
            </TabPanel>
          </Box>
        </Box>
      </Slide>
    </Modal>
  )
}

export default Modall
