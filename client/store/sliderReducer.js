const INCREMENT = 'counter/INCREMENT'

const update = (state, mutations) =>
  Object.assign({}, state, mutations)

// export const sliderAction = () => ({
//   type: INCREMENT
// })


export const sliderAction = (index) => {
  console.log('index', index, typeof index);
  const thunk = (dispatch, getState) => {
    console.log('getState', getState());
    dispatch(sliderActionx(index))
  }
  return thunk
}

export const sliderActionx = (x) => {
  console.log('X!!', x);
  return { type: INCREMENT }
}

// export function sliderAction2(event) {

//   // console.log('event', event);

//   // let sliderValue = parseInt(event.target.value);

//   // console.log('sliderval', sliderValue);

//   const thunk = (dispatch, getState) => {

//     // console.log('getstate', getState());

//     // let change = sliderValue - getState();

//     // console.log('change', change);
//     // dispatch(updateSlider(change))
//     dispatch(updateSlider())
//   };

//   return thunk;
// }

export const INITIAL_STATE = {
  value: 0,
}

const reducer = (state = INITIAL_STATE, action) => {


  console.log('sliderReducer.js', 'action', action, 'state', state);


  switch (action.type) {
    case INCREMENT:
      state = update(state, { value: state.value + 1 })
      break
  }
  return state
}

export default reducer





// export const updateSlider = (value) => {
//   return {
//     type: 'UPDATE_SLIDER',
//     payload: { value: value }
//   }
// }

