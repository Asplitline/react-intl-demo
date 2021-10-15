import types from '../constant'

export default {
  [types.CHANGE_LANGUAGE] (value) {
    return (dispatch, state) => {
      dispatch({
        type: types.CHANGE_LANGUAGE,
        value
      })
    }
  }
}