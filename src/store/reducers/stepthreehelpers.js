
const stepThreeHelpers = (state={}, action) => {

  switch(action.type) {

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

export default stepThreeHelpers
