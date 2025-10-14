import { useCallback } from 'react'
import {Subtitle, Title} from '../components'
import type {AppState} from '../store'
import * as C from '../store/counter'
import {useDispatch, useSelector} from 'react-redux'
import { Icon } from '../theme/daisyui'

export default function counterTest() {
  const dispatch = useDispatch()
  const counter = useSelector<AppState, C.State>(({counter})=> counter)
  const increase = useCallback(() => dispatch(C.increaseCounter()), [dispatch])
  const decrease = useCallback(() => dispatch(C.decreaseCounter()), [dispatch])



  return (
    <section className="mt-4" style={{background:'blue'}}>
      <Title>counterTest</Title>
      <div className="flex justify-center p-4 mt-4">
        <div className="flex items-center justify-around w-1/3 text-blue-500 text-bold">
          <Icon name="add_circle" className='cursor-pointer text-5xl select-none' onClick={increase} />
          <Subtitle>{counter}</Subtitle>
          <Icon name="remove_circle" className='cursor-pointer text-5xl select-none' onClick={decrease} />
        </div>
      </div>
    </section>
  )
}