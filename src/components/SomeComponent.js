import { useState } from 'react'

import './some-component.scss'

export default function SomeComponent() {
  const [count, setCount] = useState(0)

  const handleIncrement = () => {
    setCount(count + 1)
  }

  const handleDecrement = () => {
    setCount(count - 1)
  }

  return (
    <div className="some-component">
      <h1>Some Component</h1>

      <br />
      
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      
      <br />
      
      <span>Count: {count}</span>
    </div>
  )
}