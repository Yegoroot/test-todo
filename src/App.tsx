import { useDispatch, useSelector } from 'react-redux'
import { Box, Button, TextField } from '@mui/material'
import { useState } from 'react'
import { RootState } from './store'
import { TodoItem } from './components/TodoItem'
import { todoAdded } from './features/todos/todosSlice'

function App() {
  const list = useSelector((state: RootState) => state.todos.list)
  const dispatch = useDispatch()
  const [title, setTitle] = useState<string>()

  const onCreateTask = () => {
    if (title) {
      dispatch(todoAdded({ title }))
    }
    setTitle('')
  }

  return (
    <Box sx={{ p: 2 }}>
      <Box sx={{ mb: 4 }}>
        {list.map((t) => <TodoItem item={t} key={t.id} />)}
      </Box>

      <Box sx={{ display: 'flex', gap: 1 }}>
        <TextField
          value={title}
          onChange={(e) => setTitle(e.target.value)} sx={{ minWidth: 300 }} label="Write task title" variant="standard"
        />
        <Button variant="contained" onClick={onCreateTask}>Add</Button>
      </Box>
    </Box>
  )
}

export default App
