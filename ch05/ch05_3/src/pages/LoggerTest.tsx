import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { Title } from "../components"

export default function LoggerTest() {
  const dispatch = useDispatch()
  useEffect(()=>{dispatch({type:'hello', payload: 'world'})},[dispatch])
  return (
    <div>
      <Title>LoggerTest</Title>
    </div>
  )
}
