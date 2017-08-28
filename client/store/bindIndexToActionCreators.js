const transformObjectValues = (obj, fn) => {
  var transformed = {}
  Object.keys(obj).forEach(key => {
    transformed[key] = fn(obj[key])
  })
  return transformed
}

const bindActionCreator = (actionCreator, index) => {
  // console.log('act 1:', actionCreator, index);
  return (...args) => Object.assign(actionCreator(...args), { index })
}

const bindActionCreatorMap = (creators, index) => {
  // console.log('act 2:', creators, index);
  return transformObjectValues(creators, actionCreator => bindActionCreator(actionCreator, index))
}

const bindIndexToActionCreators = (actionCreators, index) => {
  // console.log('bindIndexToActionCreators:', index, actionCreators, typeof actionCreators === 'function')
  return bindActionCreatorMap(actionCreators, index)
}

export default bindIndexToActionCreators