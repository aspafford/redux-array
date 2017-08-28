const UPDATE = 'slider/UPDATE' 

const update = (state, mutations) =>
  Object.assign({}, state, mutations)

export const sliderAction = (event, index) => {
  let value = parseInt(event.target.value)
  const thunk = (dispatch, getState) => {
    dispatch(updateSlider(index, value))
  }
  thunk.meta = {
    debounce: {
      time: 16,
      key: 'SLIDER_ACTION'
    }
  }
  return thunk
}

export const updateSlider = (index, value) => {
  return { 
    type: UPDATE, 
    index: index, 
    payload: value
  }
}

export const INITIAL_STATE = {
  value: 0,
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE:
      state = update(state, { value: state.value + (action.payload - state.value) })
      break
  }
  return state
}

export default reducer
