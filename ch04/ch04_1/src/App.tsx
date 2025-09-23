// 리액트 훅 (함수 컴포넌트에서만 사용가능)

import {useEffect, useRef, useState} from 'react'
import './App.css'
import Clock from './pages/Clock'
import { useClock } from './hooks'

// 공통적으로 사용됨 : function App() {
function App() {
  // 1. 갱신없는 날짜 시간 설정
  //   let today = new Date()

  // 2. 자바스크립트만으로 날짜 시간 갱신, 갱신 안됨
  // let today = new Date();
  // const id = setInterval(() => {
  //   today = new Date()
  //   console.log(today.toLocaleTimeString())
  // }, 1000)

  // 3. useEffect 훅 적용, 생성시 한번만 호출, 갱신 안됨
  // let today = new Date()
  // useEffect(()=>{
  //   console.log('useEffect called')
  //   const duration = 1000
  //   const id = setInterval(() => {
  //     today = new Date()
  //   }, duration)
  //   return () => clearInterval(id) // 메모리 누수 방지
  // }, [])

  // 4. useRef 훅, 메서드 호출, 갱신 안됨
  //  let today = useRef(new Date())
  //   useEffect(() => {
  //     const duration = 1000
  //     const id = setInterval(() => {
  //       today.current = new Date()
  //     }, duration)
  //     return () => clearInterval(id)  // 메모리 누수 방지
  //   }, [])

  // 5. useState 훅 , 상태값을 공유 (최종본 : 이걸 사용하면 됨)
  // const [today, setToday] = useState(new Date())
  // useEffect(() => {
  //   const duration = 1000
  //   const id = setInterval(() => {
  //     setToday(new Date())
  //   }, duration)
  //   return () => clearInterval(id)
  // }, [])

  // 6. 커스텀 훅 함수(useClock) 활용 :: 복합된 훅들을 사용하기 때문 (사용하기 편리함)
  const today = useClock()

  return <Clock today={today} />
}
export default App
