import { createSlice } from "@reduxjs/toolkit"

import { IUser } from "../../entities/User/IUser"

export interface IAuth {
  isLogged: boolean,
  user: IUser
}
const initialState:IAuth = {
  isLogged: false,
  user: {
    uid: null,
    email: null,
    firstName: null,
    lastName: null
  }
}

const AuthSlice = createSlice({
  name: 'Auth',
  initialState,
  reducers: {
    authSetUser(state, action) {
      state.isLogged = true,
      state.user.uid = action.payload.id,
      state.user.email = action.payload.email
    },
    authLoginUser(state, action) {
      state.isLogged = true,
      state.user.uid = action.payload.id,
      state.user.email = action.payload.email
    },
    authLogoutUser(state) {
      state = initialState
    }
  }
})

export const {authSetUser, authLoginUser, authLogoutUser} = AuthSlice.actions

export default AuthSlice.reducer