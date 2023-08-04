import { createAsyncThunk } from '@reduxjs/toolkit'
import Swal from 'sweetalert2'
import {
  axiosSignIn,
  axiosSignUp,
  axiosAuth,
  axiosLogOut
} from '../../service/readyAxios/ReadyAxios'
import { Cookies } from '../../utils/Cookie'
import { authFalse, authTrue, logOutCook } from '../slices/AuthSlice'
import { closeModal, handleChangePanel } from '../slices/modalSlice'
const { setCook, getCook } = Cookies()
//функция для регистрации
export const getSignUp = createAsyncThunk(
  'getSignUp',
  async (data, { dispatch }) => {
    try {
      const form = await new FormData(data)
      const response = await axiosSignUp({ data: form })
      Swal.fire({
        icon: 'success',
        title: response?.data?.message
      })
      dispatch(handleChangePanel(0))
    } catch (e) {
      Swal.fire({
        icon: 'error',
        title: e?.data?.message || 'error'
      })
    }
  }
)
export const getAuth = createAsyncThunk(
  'getSignIn',
  async (data, { dispatch }) => {
    try {
      const response = await axiosAuth()
      // const data = await response.data.find((item,i)=>(item.username===getCook('token')?.user))
      const data = await response.data.find(
        item => item.username === getCook('token')?.user
      )

      dispatch(authTrue(data))
    } catch (e) {
      console.log(e)
      // Swal.fire(
      //     {
      //      icon: 'error',
      //      title:e?.data?.message || 'error'
      //     }
      //  )
    }
  }
)

export const getSignIn = createAsyncThunk(
  'getSignIn',
  async (data, { dispatch }) => {
    try {
      const response = await axiosSignIn({ data: JSON.stringify(data) })
      const token = await response.data
      if (token === 'User not found, try again body!') {
        throw Error(token)
      }
      setCook('token', token)
      Swal.fire({ icon: 'success' })
      dispatch(closeModal())
      dispatch(getAuth())
    } catch (e) {
      Swal.fire({
        icon: 'error',
        title: e || 'error'
      })
    } finally {
      dispatch(closeModal())
    }
  }
)

// api CORS ошибка не принимала data
export const logOut = createAsyncThunk(
  'getSignIn',
  async (data, { dispatch }) => {
    try {
      const response = await axiosLogOut({
        data: {refresh:getCook('token')?.refresh} ,
        headers: { Authorization: `Bearer ${getCook('token').access}` }
      })
      const token = await response.data
      setCook('token', token)
      dispatch(authFalse())
      dispatch(logOutCook())
      Swal.fire({ icon: 'success' })
    } catch (e) {
      Swal.fire({
        icon: 'error',
        title: e?.data?.message || 'error'
      })
    }
  }
)
