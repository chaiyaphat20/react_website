import { configureStore } from '@reduxjs/toolkit'

import { todosSlice } from './reducers/todosReducer'

const store = configureStore({
  reducer: {
    todos: todosSlice.reducer,
  },
})



export default store
