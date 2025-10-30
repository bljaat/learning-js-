import React, { useState } from 'react'

function App() {

  const [count, setcount] = useState(0)

  function dec() {
    return count > 0 ? setcount(count - 1) : setcount(0)
  }

  return (
    <div className='counterapp'>
      <h2>counter app</h2>
      <button onClick={() => { setcount(count + 1) }}>Inc</button>

      <p>count: {count}</p>
      <button onClick={dec}>Dec</button>
      {/* <button onClick={() => {count < 0 ? setcount(count - 1): setcount(0)}}>dec</button> */}
    </div>

  )
}

export default App

