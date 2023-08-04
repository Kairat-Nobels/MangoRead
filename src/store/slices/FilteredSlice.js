import { createSlice } from '@reduxjs/toolkit'

const filteredSlice = createSlice({
  name: 'filteredSlice',
  initialState: {
    type: null,
    inputs: {
      from: null,
      to: null
    },
    genreFilter: [],
    filtered: null,
    load: false
  },
  reducers: {
    addFilterTypes: (state, action) => {
      if (state.type === action.payload) {
        state.type = null
      } else {
        state.type = action.payload
      }
    },

    addFilterInputs: (state, action) => {
      state.inputs = action.payload
    },

    addFilterGenre: (state, action) => {
      state.genreFilter.length !== 0
        ? state.genreFilter.forEach(item => {
            item !== Number(action.payload)
              ? (state.genreFilter = [...state.genreFilter, action.payload])
              : (state.genreFilter = state.genreFilter.filter(
                  item => item !== action.payload
                ))
          })
        : (state.genreFilter = [...state.genreFilter, action.payload])
    },
    filteredSearch: (state, action) => {
      state.filtered = action.payload
    },
    loadOff: state => {
      state.load = false
    },
    loadOn: state => {
      state.load = true
    },
    addFitler: (state, action) => {
      state.filtered = action.payload
      let genred = []

      if (state.inputs.from && state.inputs.to) {
        state.filtered = state.filtered.filter(
          item =>
            item.issue_year >= state.inputs.from &&
            item.issue_year <= state.inputs.to
        )
        if (state.genreFilter.length !== 0) {
          state.filtered.forEach(item => {
            item.genre.forEach(i => {
              if (state.genreFilter.includes(i)) {
                genred.push(item)
              }
            })
          })
          state.filtered = genred
        }
      } else {
   
        if (state.genreFilter.length !== 0) {
          state.filtered.forEach(item => {
            item.genre.forEach(i => {
              if (state.genreFilter.includes(i)) {
                genred.push(item)
              }
            })
          })
          state.filtered = genred
        }
      }
    }
  }
})

export default filteredSlice.reducer
export const {
  addFilterTypes,
  addFilterInputs,
  addFilterGenre,
  filteredSearch,
  loadOff,
  loadOn,
  resetAction,
  changeCheck,
  changeChecking,
  addFitler
} = filteredSlice.actions
