import { useDispatch, useSelector } from 'react-redux'
import {
  closeModal,
  handleChangePanel,
  openSignIn,
  openSignUp
} from '../store/slices/modalSlice'

export const useModalOpen = () => {
  const dispatch = useDispatch()

  const { open, panel } = useSelector(state => state.modal)

  const handleClose = () => dispatch(closeModal())

  const handleChange = (event, newValue) => {
    dispatch(handleChangePanel(newValue))
  }
  const handleSignUp = () => {
    dispatch(openSignUp())
  }
  const handleSignIn = () => {
    dispatch(openSignIn())
  }

  return {
    handleSignIn,
    handleSignUp,
    handleClose,
    handleChange,
    open,
    panel
  }
}
