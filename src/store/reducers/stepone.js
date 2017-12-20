
const stepOneReducer = (state={hasUploaded:false}, action) => {

  if (action.type === "UPLOAD_LOGO"){
    return state = {...state, hasUploaded: action.payload}
  }
  return state;
}

export default stepOneReducer
