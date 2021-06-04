import {createSlice, PayloadAction } from "@reduxjs/toolkit";
import store from '../store'
interface Todo {
  id: number;
  done: boolean;
  text: string;
}

interface TodosSliceState {
  todos: Todo[];
}

const initialState: TodosSliceState = {
  todos: [],
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.todos = [
        ...state.todos,
        {
          id: state.todos.length,
          text: action.payload,
          done: false,
        },
      ];
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter(({ id }) => id !== action.payload);
    },
  },
});
type RootState = ReturnType<typeof store.getState>

export const selectTodos = (state: RootState) => state.todosStore.todos
export const { addTodo, removeTodo } = todosSlice.actions;