import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { postSignUp } from '~/api/postSignUp'
import { AppDispatch, RootState } from '~/store'

const tokenLocalStorageKey = 'API_TOKEN' as const

interface authState {
  token: string | null
}

const initialState: authState = {
  token: localStorage.getItem(tokenLocalStorageKey),
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoginToken: (state, action: PayloadAction<string | null>) => {
      const token = action.payload
      state.token = token

      if (!token) {
        localStorage.removeItem(tokenLocalStorageKey)
        return
      }
      localStorage.setItem(tokenLocalStorageKey, token)
    },
  },
})

export const { setLoginToken } = authSlice.actions

export const signUp = createAsyncThunk<
  void,
  {
    name: string
    email: string
    password: string
  },
  { dispatch: AppDispatch; state: RootState }
>('auth/signup', async ({ name, email, password }, thunkApi) => {
  // MEMO: ここの良い書き方を知りたい
  const { success, error } = await postSignUp(name, email, password)
  try {
    if (error) {
      throw new Error(error.ErrorMessageJP)
    }
    if (success === null || success.token === undefined) {
      throw new Error('新規登録に失敗しました')
    }

    thunkApi.dispatch(setLoginToken(success.token))
  } catch (e) {
    return thunkApi.rejectWithValue(e)
  }
})
