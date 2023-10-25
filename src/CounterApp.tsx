import React from 'react'
import { useState } from 'react';

interface Prop {
  value: number;
}


const CounterApp: React.FC<Prop> = ({value}) => {
  let [counter, setcounter] = useState(value)
  const handleAdd = () => {
    setcounter(counter + 1) 
  }

  const handleDecrement = () => {
    setcounter(counter - 1) 
  }

  return (
    <>
      <h1>CouterApp</h1>
      <h2>{counter}</h2>
      <button onClick={handleAdd}> add 1</button>
      <button onClick={handleDecrement}> decrement 1</button>
    </>
  )
}

export default CounterApp
