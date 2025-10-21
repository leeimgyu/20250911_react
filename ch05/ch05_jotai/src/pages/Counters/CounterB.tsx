import {useAtom} from 'jotai'
import {counterAtom} from '../../atoms'
import type {FC} from 'react'

export type CountBProps = {}
export const CounterB: FC<CountBProps> = () => {
  const [count, setCount] = useAtom(counterAtom)

  return (
    <div>
      <p>Count B: {count}</p>
    </div>
  )
}
