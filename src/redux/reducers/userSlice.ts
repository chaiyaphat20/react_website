import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import store from '../store'

// createAsyncThunk
export const fetchUserAPI = createAsyncThunk('auth/fetchUser', async () => {
  try {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users')
    return res.data
  } catch (error) {
    throw Error(error)
  }
})
// createAsyncThunk

interface Users {
  id: number
  name: string
  username: string
  email: string
  address: {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: {
      lat: number
      lng: number
    }
  }
}

interface UsersSliceState {
  users: Users[]
  loading: boolean
  error: null
}

const initialState: UsersSliceState = {
  users: [
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org',
      address: {
        street: 'Hoeger Mall',
        suite: 'Apt. 692',
        city: 'South Elvis',
        zipcode: '53919-4257',
        geo: {
          lat: 29.4572,
          lng: -164.299,
        },
      },
    },
  ],
  loading: false,
  error: null,
}

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<Users>) => {
      const { id, address, email, name, username } = action.payload
      const { city, street, suite, zipcode, geo } = address
      const { lat, lng } = geo
      state.users = [
        ...state.users,
        {
          id,
          name,
          username,
          email,
          address: {
            street,
            suite,
            city,
            zipcode,
            geo: {
              lat,
              lng,
            },
          },
        },
      ]
    },
  },
  // createAsyncThunk
  //https://github.com/reduxjs/redux-toolkit/issues/478
  extraReducers: {
    //รอกำลังโหลด
    [fetchUserAPI.pending.toString()]: (state, action) => {
      state.loading = true
    },
     //โหลดเสร็จและ สำเร็จ
    [fetchUserAPI.fulfilled.toString()]: (state, action) => {
      state.users.push(...action.payload)
      state.loading = false
    },
    //โหลดแต่ error
    [fetchUserAPI.rejected.toString()]: (state, action) => {
      state.loading = false
      state.error = action.error
    },
  },
})
type RootState = ReturnType<typeof store.getState>

export const selectUser = (state: RootState) => state.userStore.users
export const loading = (state: RootState) => state.userStore.loading
export const error = (state: RootState) => state.userStore.error
export const { addUser } = userSlice.actions
export default userSlice.reducer   // createAsyncThunk
