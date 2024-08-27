import { Check, Save } from '@mui/icons-material'
import { Box, IconButton, TextField, ToggleButton, Typography } from '@mui/material'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { changeItem, TodoItem as ITodoItem } from '../features/todos/todosSlice'

export const TodoItem = ({ item }:{item: ITodoItem}) => {
  const { completed, id, title, isEditing } = item
  const [changedTitle, setChangedTitle] = useState<string>(title)
  const dispatch = useDispatch()

  const onToggleItem = () => {
    dispatch(changeItem({ completed: !completed, title, id }))
  }
  const onEditItem = () => {
    dispatch(changeItem({ completed, title: changedTitle, id }))
  }

  return (
    <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
      <ToggleButton
        onClick={onToggleItem}
        value="check"
        selected={completed}
        sx={{ borderRadius: '50%', minHeight: 48, minWidth: 48 }}
      >
        {completed && <Check /> }
      </ToggleButton>
      {' '}
      {isEditing ? (
        <TextField
          value={changedTitle}
          defaultValue={title}
          onChange={(e) => setChangedTitle(e.target.value)} sx={{ minWidth: 300 }} label="Write task title" variant="standard"
        />
      ) : (
        <Typography onClick={onToggleItem} sx={{ textDecoration: completed ? 'line-through' : 'none' }}>
          {title}
        </Typography>
      )}
      {isEditing && <IconButton onClick={onEditItem}><Save /></IconButton>}
    </Box>
  )
}
