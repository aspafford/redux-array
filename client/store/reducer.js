import sliderReducer, { INITIAL_STATE as SLIDER_INITIAL_STATE } from './sliderReducer' 

const INITIAL_STATE = [
  SLIDER_INITIAL_STATE,
  SLIDER_INITIAL_STATE,
  SLIDER_INITIAL_STATE,
  SLIDER_INITIAL_STATE
]

const reducer = (state = INITIAL_STATE, action) => {
  if (action.type.startsWith('slider/')) {

    return Object.assign(
      [...state],
      { [action.index]: Object.assign({}, sliderReducer(state[action.index], action)) }
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
