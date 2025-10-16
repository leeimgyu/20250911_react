import {configureStore} from '@reduxjs/toolkit'

import {useMemo} from 'react'
import {rootReducer} from './rootReducer'
import logger from './logger'  // 사용자가 만든 로거
// import logger from 'redux-logger' // 리덕스에서 제공하는 로거
// redux thunk는 라이브러리에 포함 되었기 때문에 별도 추가 없다.

const useLogger = process.env.NODE_ENV !== 'production'

const initializeStore = () => {
  const middleware: any[] = []
  if(useLogger){middleware.push(logger)} // useLogger 생성시 middleware 탑재
  const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(middleware)
  })
  return store
}

export function useStore() {
  const store = useMemo(() => initializeStore(), [])
  return store
}
