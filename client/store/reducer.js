import counterReducer, { INITIAL_STATE as COUNTER_INITIAL_STATE } from './counterReducer'

const INITIAL_STATE = [
  COUNTER_INITIAL_STATE,
  COUNTER_INITIAL_STATE,
  COUNTER_INITIAL_STATE,
  COUNTER_INITIAL_STATE
]

const reducer = (state = INITIAL_STATE, action) => {
  if (action.type.startsWith('counter/')) {
    
    return Object.assign(
      [...state],
      { [action.index]: Object.assign({}, counterReducer(state[action.index], action)) }
    )
    
//     return [
//       ...state.slice(0, action.index),
//       counterReducer(state[action.index], action),
//       ...state.slice(action.index + 1)
//     ]
    
  }
  return state
}

export default reducer
