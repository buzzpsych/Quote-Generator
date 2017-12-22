import stepOneReducer from './stepone'
import stepTwoReducer from './steptwo'
import stepThreeReducer from './stepthree'
import stepThreeHelpers from './stepthreehelpers'
import stepFiveReducer from './stepfive'
import { combineReducers } from 'redux'

const reducers = combineReducers({
  stepOneReducer: stepOneReducer,
  stepTwoReducer: stepTwoReducer,
  stepThreeReducer: stepThreeReducer,
  stepThreeHelpers: stepThreeHelpers,
  stepFiveReducer: stepFiveReducer,
})

export default reducers
