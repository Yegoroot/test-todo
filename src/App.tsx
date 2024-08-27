import { useSelector } from 'react-redux'
import { Box, } from '@mui/material'
import { RootState } from './store'
import { TodoItem } from './components/TodoItem'
import { ControlItems } from './components/ControlItems'
import { ContextMenu } from './components/ContextMenu'

function App() {
  const list = useSelector((state: RootState) => state.todos.list)

  return (
    <Box sx={{ p: 2 }}>

      <Box sx={{ mb: 4 }}>
        {list.map((t) => (
          <ContextMenu id={t.id} key={t.id}>
            <TodoItem item={t} />
          </ContextMenu>
        ))}
      </Box>

      <ControlItems />
    </Box>
  )
}

export default App
