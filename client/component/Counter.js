import React from 'react'

const Counter = props =>
  <button onClick={props.counterAction}>{props.counter.value}</button>

export default Counter