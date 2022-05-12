import { useState } from 'react'
import TestComponent from './components/TestComponent'

import './styles/App.css'
 

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <TestComponent/>
    </div>
  )
}

export default App
