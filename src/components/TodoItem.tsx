import { Check } from '@mui/icons-material'
import { Box, ToggleButton, Typography } from '@mui/material'
import { useDispatch } from 'react-redux'
import { changeItem, TodoItem as ITodoItem } from '../features/todos/todosSlice'

export const TodoItem = ({ item }:{item: ITodoItem}) => {
  const { completed, id, title } = item
  const dispatch = useDispatch()

  return (
    <Box
      onClick={() => dispatch(changeItem({ completed: !completed, title, id }))}
      sx={{ p: 1, display: 'flex', gap: 1, alignItems: 'center' }}
    >
      <ToggleButton
        value="check"
        selected={completed}
        sx={{ borderRadius: '50%', minHeight: 48, minWidth: 48 }}
      >
        {completed && <Check /> }
      </ToggleButton>
      {' '}
      <Typography sx={{ textDecoration: completed ? 'line-through' : 'none' }}>
        {title}
      </Typography>
    </Box>
  )
}
