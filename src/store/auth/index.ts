import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface authState {
  name: string
  email: string
  password: string
  token: string
}

const initialState: authState = {
  name: '',
  email: '',
  password: '',
  token: '',
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload
    },
  },
})

export const { setName, setEmail, setPassword } = authSlice.actions
