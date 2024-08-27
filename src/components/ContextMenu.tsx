import { Box, Menu, MenuItem } from '@mui/material'
import { useState, PropsWithChildren } from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodo, setEditedTodo } from '../features/todos/todosSlice'

interface Props {
  id: string
}

export const ContextMenu = ({ children, id }: PropsWithChildren<Props>) => {
  const dispatch = useDispatch()
  const [contextMenu, setContextMenu] = useState<{
    mouseX: number;
    mouseY: number;
  } | null>(null)

  const handleContextMenu = (event: MouseEvent) => {
    event.preventDefault()
    setContextMenu(
      contextMenu === null
        ? {
          mouseX: event.clientX + 2,
          mouseY: event.clientY - 6,
        }
        : null,
    )
  }

  const handleClose = () => {
    setContextMenu(null)
  }

  const handleEdit = () => {
    dispatch(setEditedTodo({ id, isEditing: true }))
    setContextMenu(null)
  }
  const handleDelete = () => {
    setContextMenu(null)
    dispatch(deleteTodo(id))
  }

  return (
    <Box>
      <Menu
        open={contextMenu !== null}
        onClose={handleClose}
        anchorReference="anchorPosition"
        anchorPosition={
          contextMenu !== null
            ? { top: contextMenu.mouseY, left: contextMenu.mouseX }
            : undefined
        }
      >
        <MenuItem onClick={handleEdit}>Edit</MenuItem>
        <MenuItem onClick={handleDelete}>Delete</MenuItem>
      </Menu>
      {/* @ts-ignore */}
      <Box onContextMenu={handleContextMenu} style={{ cursor: 'context-menu' }}>
        {children}
      </Box>
    </Box>
  )
}
