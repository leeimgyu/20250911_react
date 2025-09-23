import { useEffect } from "react"

export const useInterval = (callback: () => void, duration:number = 1000) => {  // 타입스크립트 -> 자바스크립트로 바뀜
  //collback함수 : 매개변수 값이 들어오는게 아니고 함수가 들어오는 것
  useEffect(()=>{
    const id = setInterval(callback, duration)
    return ()=> clearInterval(id)
  },[callback, duration])
}