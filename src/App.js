import React from 'react'
import { useState,useEffect } from 'react'

const App = () => {
  const [count, setCount] = useState(0)
  useEffect(() => {
    document.title=`Chats(${count})`
  })
  
  const increment=()=>{
    setCount(count+1);
  }
  const decrement=()=>{
    count>0?setCount(count-1):setCount(0);
  }
  return (
   <>
   <div className="container">
    <p>{count}</p>
    <button onClick={()=>increment()}>INCR</button>
    <button onClick={()=>decrement()}>DECR</button>
   </div>
  </>
  )
}

export default App