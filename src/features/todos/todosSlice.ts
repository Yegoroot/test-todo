/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { makeid } from '../../utils/makeId'

export interface EditedProps {
  id: string,
  isEditing: boolean
}

export interface TodoItem {
  id: string
  title: string
  completed: boolean
  isEditing: boolean
}

export interface TodoState {
  list: TodoItem[]
}

const initialState: TodoState = {
  list: [],
}

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    deleteTodo(state, action: PayloadAction<string>) {
      const list = state.list.filter((t) => t.id !== action.payload)
      state.list = list
    },
    todoAdded(state, action: PayloadAction<Omit<TodoItem, 'completed' | 'id' | 'isEditing'>>) {
      state.list.push({
        title: action.payload.title,
        id: makeid(),
        isEditing: false,
        completed: false,
      })
    },
    changeItem(state, action: PayloadAction<Omit<TodoItem, 'isEditing'>>) {
      const list = state.list.map((t) => (t.id === action.payload.id ? { ...action.payload, isEditing: false } : t))
      state.list = list
    },
    setEditedTodo(state, { payload: { id, isEditing } }: PayloadAction<EditedProps>) {
      const list = state.list.map((t) => (t.id === id ? { ...t, isEditing } : t))
      state.list = list
    }
  },
})

export const { todoAdded, changeItem, deleteTodo, setEditedTodo } = todosSlice.actions
export default todosSlice.reducer
