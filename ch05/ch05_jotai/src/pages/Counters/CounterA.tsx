import {useAtom} from 'jotai'
import {counterAtom} from '../../atoms'
import type {FC} from 'react'

export type CountAProps = {}
export const CounterA: FC<CountAProps> = () => {
  const [count, setCount] = useAtom(counterAtom)

  return (
    <div>
      <p>Count A: {count}</p>
    </div>
  )
}
