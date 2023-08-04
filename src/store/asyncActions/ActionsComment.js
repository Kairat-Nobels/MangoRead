import { createAsyncThunk } from '@reduxjs/toolkit'
import Swal from 'sweetalert2'
import { axiosComm } from '../../service/readyAxios/ReadyAxios'
import { Cookies } from '../../utils/Cookie'
import { commentGet, loadOff, loadOn } from '../slices/commentSlice'
const { getCook } = Cookies()
export const getComment = createAsyncThunk(
  'getComment',
  async (param, { dispatch }) => {
    try {
      dispatch(loadOn())
      const response = await axiosComm(param)
      const data = await response.data
      dispatch(commentGet(data))
      dispatch(loadOff())
    } catch (e) {
      console.log(e)
    } finally {
      dispatch(loadOff())
    }
  }
)
export const addComment = createAsyncThunk(
  'addComment',
  async (param, { dispatch }) => {
    try {
      await dispatch(loadOn())
      const { value } = await Swal.fire({
        input: 'textarea',
        inputLabel: 'Message',
        inputPlaceholder: 'Type your message here...',
        inputAttributes: {
          'aria-label': 'Type your message here'
        },
        showCancelButton: true
      })
      
      await axiosComm.post(
        `${param}/add-comment/`,
        { text: value },
        { headers: { Authorization: `Bearer ${getCook('token')?.access}` } }
      )
      await dispatch(getComment(`${param}/comments`))
      await dispatch(loadOff())
      // первый раз подумал так сделать но потом  передумал
      //   window.location.reload()
    } catch (e) {
      console.log(e)
    } finally {
      dispatch(loadOff())
    }
  }
)
