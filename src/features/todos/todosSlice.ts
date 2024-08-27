/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { makeid } from '../../utils/makeId'

export interface TodoItem {
  id: string
  title: string
  completed: boolean
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
    todoAdded(state, action: PayloadAction<Omit<TodoItem, 'completed' | 'id'>>) {
      state.list.push({
        id: makeid(),
        title: action.payload.title,
        completed: false,
      })
    },
    changeItem(state, action: PayloadAction<TodoItem>) {
      const list = state.list.map((t) => {
        if (t.id === action.payload.id) {
          return action.payload
        } return t
      })
      state.list = list
    },
  },
})

export const { todoAdded, changeItem } = todosSlice.actions
export default todosSlice.reducer
