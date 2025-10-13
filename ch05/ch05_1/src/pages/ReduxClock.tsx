import { useDispatch, useSelector } from "react-redux"
import type { AppState } from "../store"
import { Div, Subtitle, Title } from "../components"
import { useInterval } from "../hooks"

export default function ReduxClock() {
  const today = new Date(useSelector<AppState, Date>(state => state.today))
  const dispatch = useDispatch()

  useInterval(() => {
    dispatch({type: 'setToday', today: new Date().toISOString()})
  })

  return (
    <Div className="flex flex-col items-center justify-center mt-16">
      <Title className="text-5xl">ReduxClock</Title>
      <Title className="mt-4 text-3xl">{today.toLocaleTimeString()}</Title>
      <Subtitle className="mt-4 text-2xl">{today.toLocaleDateString()}</Subtitle>
    </Div>
  )
}