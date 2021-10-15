import types from '../constant'

const initialState = {
  language: navigator.language
}

console.log('initialState :>> ', initialState);
const rootReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.CHANGE_LANGUAGE:
      return { language: action.value }
    default:
      return state
  }
}
export default rootReducers

