import { createAsyncThunk } from '@reduxjs/toolkit'
import Swal from 'sweetalert2'
import { axiosManga } from '../../service/readyAxios/ReadyAxios'
import {
  addFitler,
  filteredSearch,
  loadOff,
  loadOn
} from '../slices/FilteredSlice'

export const searchAction = createAsyncThunk(
  'searchAction',
  async (param, { dispatch }) => {
    try {
      await dispatch(loadOn())
      if (param.length > 1) {
        // вот такая идея мне не очень понравилась пототому что я сделал скролимый контент
        // const response = await axiosManga(`?search=${param.search}`,{params:{limit:param.param.limit,offset:param.param.offset }})
        const response = await axiosManga({ params: { search: param } })
        const data = await response.data
        await dispatch(filteredSearch(data))
      } else {
        dispatch(filteredSearch(null))
      }
      await dispatch(loadOff())
    } catch (e) {
      console.log(e)
    } finally {
      dispatch(loadOff())
    }
  }
)
export const getFiltered = createAsyncThunk(
  'searchAction',
  async (param, { dispatch }) => {
    try {
      await dispatch(loadOn())
      if (param) {
        const response = await axiosManga({ params: { type: param } })
        const data = await response.data
        if (data.length !== 0) {
          await dispatch(addFitler(data))
        } else {
          throw Error('This type not found')
        }
      } else {
        const response = await axiosManga()
        const data = await response.data
        dispatch(addFitler(data))
      }
      await dispatch(loadOff())
    } catch (e) {
      Swal.fire({
        icon: 'error',
        title: e
      })
      console.log(e)
    } finally {
      dispatch(loadOff())
    }
  }
)
