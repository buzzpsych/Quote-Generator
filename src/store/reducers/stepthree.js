
const stepThreeReducer = (state={}, action) => {

  switch(action.type) {
      case 'ADD_PRODUCT' : {
             return state = [...state,
      	 { product: action.payload

       }]
     }
          
    
      case 'INCLUDE_DESCRIPTION' : { 
             return state = {...state,
        include_descr: action.payload
      }
          }

      case 'INCLUDE_PRICE' : { 
             return state = {...state,
        include_price: action.payload
      }
          }

     default : return state;
  }
}

export default stepThreeReducer
