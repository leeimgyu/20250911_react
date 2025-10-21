import {combineReducers} from 'redux'

// 기본 reducer (state를 그대로 반환) 요구되는 리듀서 생성시 삭제
const dummyReducer = (state = {}) => state

export const rootReducer = combineReducers({
  dummy: dummyReducer
})
