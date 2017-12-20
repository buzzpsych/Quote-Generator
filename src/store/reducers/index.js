import stepOneReducer from './stepone'
import stepTwoReducer from './steptwo'
import stepThreeReducer from './stepthree'
import stepFiveReducer from './stepfive'
import { combineReducers } from 'redux'

const reducers = combineReducers({
  stepOneReducer: stepOneReducer,
  stepTwoReducer: stepTwoReducer,
  stepThreeReducer: stepThreeReducer,
  stepFiveReducer: stepFiveReducer,
})

export default reducers
