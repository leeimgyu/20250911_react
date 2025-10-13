//import { useDispatch, useSelector } from "react-redux"
import type { AppState, SetTodayAction } from "../store"
import { Div, Subtitle, Title } from "../components"
import { useInterval } from "../hooks"
import { useReducer } from "react"

export default function UseReducerClock() {
  // useReducer() 통해 reducer를 생성하고 상태에 접근 하기 위한 dispatch 생성
  const [{today}, dispatch] = useReducer(
    // reducer 생성
    (state: AppState, action: SetTodayAction) => {
      switch (action.type) {
        case 'setToday':
          return {...state, today: new Date()} //새로운 설정으로 갱신
      }
      return state
    },
    // 상태 초깃값
    {
      today: new Date() 
    }
  )
  useInterval(()=>{
    // 데이터를 보내는 부분
    dispatch({type:'setToday', today: new Date()})
  })

  return (
    <Div className="flex flex-col items-center justify-center mt-16">
      <Title className="text-5xl">UseReducerClock</Title>
      <Title className="mt-4 text-3xl">{today.toLocaleTimeString()}</Title>
      <Subtitle className="mt-4 text-2xl">{today.toLocaleDateString()}</Subtitle>
    </Div>
  )
}