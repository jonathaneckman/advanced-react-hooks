// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

/**
 * 
 * @param {*} state 
 * @param {*} newState is the "action"
 * @returns 
 */
function countReducer(currentState, action) {
  switch(action.type) {
    case "INCREMENT":
      return {
        ...currentState,
        count: currentState.count + action.step
      }
    default:
      throw new Error(`Unsupported action type ${action.type}`)
  }
}

function Counter({initialCount = 0, step = 1}) {
  // setState is the dispatch function
  const [state, dispatch] = React.useReducer(countReducer, {
    count: initialCount,
  })
  const {count} = state
  const increment = () => dispatch({type: 'INCREMENT', step})

  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
