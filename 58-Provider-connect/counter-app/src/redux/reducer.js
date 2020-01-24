const initialState = {
  count: 55
}

function reducer (oldState=initialState, action){
  switch (action.type) {
    case "INCREMENT_COUNT":
      return {
        ...oldState,
        count: oldState.count + action.payload
      } //newState
    case "DECREMENT_COUNT":
      return {
        ...oldState,
        count: oldState.count - action.payload
      }
    default:
      return oldState
  }
}

export default reducer
