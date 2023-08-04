import { createAsyncThunk } from '@reduxjs/toolkit'

import {
  axiosGenre,
  axiosManga,
  axiosTopManga
} from '../../service/readyAxios/ReadyAxios'
import {
  genreGet,
  getOnePage,
  getTopMangas,
  loadOff,
  loadOn
} from '../slices/MangaSlice'

export const getTopManga = createAsyncThunk(
  'getTopManga',
  async (param, { dispatch }) => {
    try {
      dispatch(loadOn())
      const response = await axiosTopManga({ params: param })
      const data = await response.data
      dispatch(getTopMangas(data))
      dispatch(loadOff())
    } catch (e) {
      console.log(e)
    } finally {
      dispatch(loadOff())
    }
  }
)
export const getGenre = createAsyncThunk(
  'getGenre',
  async (param, { dispatch }) => {
    try {
      const response = await axiosGenre()
      const data = await response.data
      await dispatch(genreGet(data))
    } catch (e) {
      console.log(e)
    }
  }
)
export const getOneManga = createAsyncThunk(
  'getOneManga',
  async (param, { dispatch }) => {
    try {
      dispatch(loadOn())
      const response = await axiosManga(param)
      const data = await response.data
      dispatch(getOnePage(data))
      dispatch(loadOff())
    } catch (e) {
      console.log(e)
    } finally {
      dispatch(loadOff())
    }
  }
)
