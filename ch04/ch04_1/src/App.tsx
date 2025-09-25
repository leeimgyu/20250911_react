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


//   //     리액트 훅 함수의 특징
//   // 1. 같은 리액트 훅을 여러번 호출할 수 있다.
//   const [x,setX] = useState(0)
//   const [y,setY] = useState(0)
//   useEffect(()=>{},[])
//   useEffect(()=>{},[])

//   // 2. 함수 몸 통이 아닌 몸통 안 {}에서 호출할 수 없다.
//   export function App2() {
//     {//지역변수 블록
//       const[x,setX] = useState<number>(0) // 이렇게 구현 불가
//   }
// }
//   export function App3() {
//     if(true) {
//       const[x, setX] = useState<number>(0) // 이렇게 구현 불가
//     }
//   }
//   // 3. 비동기 함수 콜백 함수로 사용할 수 없다.
//   export function App4() {
//     useEffect(async () => {    // 이렇게 구현 불가 
//       await Promise.resolve(1)
//     }, [])
//   }