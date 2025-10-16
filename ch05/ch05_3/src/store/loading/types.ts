import type {Action} from 'redux'


// State 선언
export type State = boolean

// User action 선언
export type SetLoadingAction = Action<'@loading/setLoadingAction'> & {payload: State}

export type Actions = SetLoadingAction