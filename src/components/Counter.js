import React from 'react'

const Counter = (props) => {
  return (
    <div class = "counter">
      <h2 class = "titles">Counter</h2>
      <div className="insideCounter">
      <h3>{props.counter}</h3>
      <button onClick = {props.dec}>-</button>
      <button onClick = {props.inc}>+</button>
      </div>
    </div>
  )
}

export default Counter