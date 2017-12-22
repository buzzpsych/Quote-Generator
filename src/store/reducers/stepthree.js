
const stepThreeReducer = (state={}, action) => {

  switch(action.type) {
      case 'ADD_PRODUCT' : {
             return state = [...state,
      	 { product: action.payload

       }]
     }
          

     default : return state;
  }
}

export default stepThreeReducer
