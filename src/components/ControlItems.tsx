import { Box, IconButton, TextField } from '@mui/material'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Add } from '@mui/icons-material'
import { todoAdded } from '../features/todos/todosSlice'

export const ControlItems = () => {
  const dispatch = useDispatch()
  const [title, setTitle] = useState<string>()

  const onCreateTask = () => {
    if (title) {
      dispatch(todoAdded({ title }))
    }
    setTitle('')
  }

  return (
    <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
      <TextField
        value={title}
        onChange={(e) => setTitle(e.target.value)} sx={{ minWidth: 300 }} label="Write task title" variant="standard"
      />
      <IconButton onClick={onCreateTask}><Add /></IconButton>
    </Box>
  )
}
