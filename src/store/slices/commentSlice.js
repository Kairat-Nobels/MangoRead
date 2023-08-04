import { createSlice } from '@reduxjs/toolkit'

const commentSlice = createSlice({
  name: 'commentSlice',
  initialState: {
    comment: [],
    loading: false
  },
  reducers: {
    commentGet: (state, action) => {
      state.comment = action.payload.reverse()
    },
    loadOff: state => {
      state.loading = false
    },
    loadOn: state => {
      state.loading = true
    }
  }
})
export default commentSlice.reducer
export const { commentGet, loadOff, loadOn } = commentSlice.actions
