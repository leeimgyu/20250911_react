import * as T from './types'

const initialState: T.State = []

export const reducer = (state: T.State = initialState, action: T.Actions) => {
  switch (action.type) {
    case '@cards/addCard':
      return [action.payload, ...state]
    case '@cards/removeCard':
      // 지우려는 카드의 uuid만 제외하고 나머지 목록으로 제공  :: 순수함수
      return state.filter(card => card.uuid !== action.payload)
  }
  return state
}
