
const pdf = (state={}, action) => {

  if (action.type === "SAVE_PATH"){
    return state = {...state, path: action.payload}
  }
  return state;
}

export default pdf
