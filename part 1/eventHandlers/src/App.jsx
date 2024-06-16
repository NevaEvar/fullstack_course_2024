
import { useState } from 'react'

const App = () => {
  
  const [clicks, setClicks] = useState({
    left: 0, right: 0
  })
  
  const [allClicks, setAll] = useState([])

  const [total, setTotal] = useState(0)

  const handleLeftClick = () => { 
    const newClicks = {
      ...clicks, 
      left: clicks.left + 1
    }
    setAll(allClicks.concat('L'))
    setClicks(newClicks)
    setTotal(clicks.left + clicks.right)
  }

  const handleRightClick = () => {
    const newClicks = {
      ...clicks, 
      right: clicks.right + 1
    }
    setAll(allClicks.concat('R'))
    setClicks(newClicks)
    setTotal(clicks.left + clicks.right)
  }

  return (
    <div>
      {clicks.left}
      <button onClick={() => handleLeftClick(clicks.left + 1)}>
        left
      </button>
      <button onClick={() => handleRightClick(clicks.right + 1)}>
        right
      </button>
      {clicks.right}

      <p>{allClicks.join(' ')}</p>

      <p>total {total}</p>
    </div>
  )
}


export default App

