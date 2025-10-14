import {combineReducers} from 'redux'
import * as Clock from './clock'
import * as counter from './counter'
import * as R from './remoteUser'
import * as Cards from './cards'

export const rootReducer = combineReducers({
  clock: Clock.reducer,
  counter: counter.reducer,
  remoteUser: R.reducer,
  cards: Cards.reducer
})
