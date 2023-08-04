import { createSlice } from '@reduxjs/toolkit'

const modalSlice = createSlice({
  name: 'modalSlice',
  initialState: {
    open: false,
    panel: 0
  },
  reducers: {
    openSignUp: state => {
      state.open = true
      state.panel = 1
    },
    openSignIn: state => {
      state.open = true
      state.panel = 0
    },
    closeModal: state => {
      state.open = false
    },
    handleChangePanel: (state, action) => {
      state.panel = action.payload
    }
  }
})

export const { openSignIn, openSignUp, closeModal, handleChangePanel } =
  modalSlice.actions
export default modalSlice.reducer
