import { configureStore } from '@reduxjs/toolkit'
import modalReducer from './slices/modalSlice'
import AuthReducer from './slices/AuthSlice'
import MangaSlice from './slices/MangaSlice'
import commentSlice from './slices/commentSlice'
import FilteredSlice from './slices/FilteredSlice'
export const store = configureStore({
  reducer: {
    modal: modalReducer,
    auth: AuthReducer,
    MangaSlice,
    comments: commentSlice,
    FilteredSlice
  }
})
