const INCREMENT = 'counter/INCREMENT'

const update = (state, mutations) =>
  Object.assign({}, state, mutations)

export const counterAction = () => ({
  type: INCREMENT
})

export const INITIAL_STATE = {
  value: 0,
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INCREMENT:
      state = update(state, { value: state.value + 1 })
      break
  }
  return state
}

export default reducer