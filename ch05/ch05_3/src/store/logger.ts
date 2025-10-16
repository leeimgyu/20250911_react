import type {Action, Dispatch} from 'redux'

// getState :: 리덕스에 담긴 모든 상태값을 가져옴
export default function logger<S = any>({getState}: {getState: () => S}) {
  return (next: Dispatch) => (action: Action) => {

    // log가 자주출력되는 관계로 주석처리함.
    // console.log('state before next', getState())
    // console.log('action', action)
    const returnedAction = next(action)  // 기준 
    // console.log('state after next', getState)

    return returnedAction
  }
}
