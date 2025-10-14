import * as Clock from './clock'
import * as counter from './counter'
import * as R from './remoteUser'
import * as Cards from './cards'

export type AppState = {
  clock: Clock.State
  counter: counter.State
  remoteUser: R.State
  cards: Cards.State
}
