import type {Action} from 'redux'
import {configureStore} from '@reduxjs/toolkit'
import {Provider as ReduxProvider} from 'react-redux'

import ReduxClock from './pages/ReduxClock'
import UseReducerClock from './pages/UseReducerClock'

// 1. AppState라는 변수의 type을 선언
type AppState = {
  today: Date
}

// 2. 초기화
const initialAppState = {today: new Date()}

// 3. reducer 생성(상태와 액션으로 구성된 reducer 선언)
const rootReducer = function (state: AppState = initialAppState, action: Action) {
  return state
}

// 4. 저장소 생성
const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware()
})

function AppIncludeRedux() {
  return (
    <ReduxProvider store={store}>
      <main className="p-8">
        <UseReducerClock />
        <ReduxClock />
      </main>
    </ReduxProvider>
  )
}

export default AppIncludeRedux