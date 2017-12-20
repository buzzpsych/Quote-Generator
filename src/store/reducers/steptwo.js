

const stepTwoReducer = (state={pdfTitle:""}, action) => {

  if (action.type === "CUSTOM_TITLE"){

    return state = {...state, pdfTitle: action.payload}
  }

  return state;

}



export default stepTwoReducer
