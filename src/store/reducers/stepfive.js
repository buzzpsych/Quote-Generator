
const stepFiveReducer = (state={showPreview:false}, action) => {

  if (action.type === "SHOW_PREVIEW"){
    return state = {...state, showPreview: action.payload}
  }
  return state;
}

export default stepFiveReducer
