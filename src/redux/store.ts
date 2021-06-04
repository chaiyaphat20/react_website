import { configureStore } from '@reduxjs/toolkit'

import { todosSlice } from './reducers/todosSlice'
import { userSlice } from './reducers/userSlice'

const store = configureStore({
  reducer: {
    todosStore: todosSlice.reducer,
    userStore: userSlice.reducer,
  },
})

export default store
