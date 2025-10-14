import type {Action} from 'redux'
import * as D from '../../data'

// State 선언
export type State = D.IRandomUser

// User action 선언
export type SetUserAction = Action<'@remoteUser/setUser'> & {payload: D.IRandomUser}

// email action 선언
export type ChangeEmailAction = Action<'@remoteUser/changeEmail'> & {payload: string}

// name action 선언
export type NameType = {
  title: string
  first: string
  last: string
}
export type ChangeNameAction = Action<'@remoteUser/changeName'> & {payload: NameType}

// picture action 선언
export type PictureType = {large: string}
export type ChangePictureAction = Action<'@remoteUser/changePicture'> & {
  payload: PictureType
}

// Actions라는 이름으로 위에서 선언된 action들을 대표하게 됨.
export type Actions =
  | SetUserAction
  | ChangeEmailAction
  | ChangeNameAction
  | ChangePictureAction
