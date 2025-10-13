// Action이 정의 되어 있지 않을 때 같은 Action 타입선언하기 위해 사용
// import type {Action} from 'redux'

import type {Actions} from './actions'
import type {AppState} from './AppState'

const initialAppState = {
  today: new Date()
}

// state: AppState = initialAppState :: 이전 설정
export const rootReducer = function (state: AppState = initialAppState, action: Actions) {
  switch (action.type) {
    case 'setToday': {
      return {...state, today: action.today} // 새로운 설정
    }
  }
  return state
}
