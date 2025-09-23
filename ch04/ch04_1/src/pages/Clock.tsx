// 리액트 훅 (함수 컴포넌트에서만 사용가능)
import type {FC} from 'react'
import {Div, Subtitle, Title} from '../components'

export type ClockProps = {today: Date}

const Clock: FC<ClockProps> = ({today}) => {
  return (
    // Div는 사용자 컴포넌트
    <Div className="flex flex-col items-center justify-center h-screen bg-primary text-white">
      <Title className='text-5xl'>{today.toLocaleTimeString()}</Title>
      <Subtitle className='mt-4 text-2xl'>{today.toLocaleDateString()}</Subtitle>
    </Div>
  )
}
export default Clock