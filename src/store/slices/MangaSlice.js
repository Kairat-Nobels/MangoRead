import { createSlice } from '@reduxjs/toolkit'

const MangaSlice = createSlice({
  name: 'MangaSlice',
  initialState: {
    panel: false,
    topManga: null,
    loading: false,
    params: {
      offset: 0,
      limit: 12
    },
    onePage: null,
    genre: []
  },
  reducers: {
    getTopMangas: (state, action) => {
      state.topManga = action.payload
    },
    getOnePage: (state, action) => {
      state.onePage = action.payload
    },
    changePanel: state => {
      state.panel = !state.panel
    },
    paramsNext: (state, action) => {
      state.params.offset = action.payload
    },
    loadOff: state => {
      state.loading = false
    },
    loadOn: state => {
      state.loading = true
    },
    genreGet: (state, action) => {
      state.genre = action.payload
    }
  }
})
export default MangaSlice.reducer
export const {
  changePanel,
  loadOff,
  loadOn,
  paramsNext,
  getTopMangas,
  getOnePage,
  commentGet,
  genreGet
} = MangaSlice.actions
