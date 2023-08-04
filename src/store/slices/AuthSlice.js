import { createSlice } from '@reduxjs/toolkit'
import { Cookies } from '../../utils/Cookie'
const { getCook, setCook, deleteCookie } = Cookies()

const AuthSlice = createSlice({
  name: 'AuthSlice',
  initialState: {
    token: getCook('token'),
    auth: getCook('profil')
  },
  reducers: {
    authTrue: (state, action) => {
      setCook('profil', action.payload)
      state.auth = getCook('profil')
    },
    authFalse: state => {
      deleteCookie('profil')
      state.auth = false
    },
    logOutCook: (state, action) => {
      deleteCookie('token')
    }
  }
})

export default AuthSlice.reducer
export const { authTrue, authFalse, logOutCook } = AuthSlice.actions
