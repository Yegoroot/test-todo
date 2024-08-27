import { Check } from '@mui/icons-material'
import { ToggleButton } from '@mui/material'
import { useState } from 'react'

function App() {
  const [selected, setSelected] = useState(false)
  return (

    <div className="App">
      <ToggleButton
        value="check"
        selected={selected}
        onChange={() => {
          setSelected(!selected)
        }}
      >
        <Check />
      </ToggleButton>

    </div>
  )
}

export default App
