import { Box, Button, TextField } from '@mui/material'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
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
    <Box sx={{ display: 'flex', gap: 1 }}>
      <TextField
        value={title}
        onChange={(e) => setTitle(e.target.value)} sx={{ minWidth: 300 }} label="Write task title" variant="standard"
      />
      <Button variant="contained" onClick={onCreateTask}>Add</Button>
    </Box>
  )
}
