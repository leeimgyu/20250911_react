import { useState } from "react"
import { useInterval } from "./useInterval"

export const useClock = () => {
  // 익명 함수를 사용
  const [today, setToday] = useState(new Date())
  useInterval(() => setToday(new Date())) // () => setToday(new Date()) :: 매개변수
  return today
}