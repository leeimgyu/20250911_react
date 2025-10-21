import { Title } from '../../components'
import useStore from '../../store/store'
import type {FC} from 'react'

export type CountAProps = {}
export const CounterA: FC<CountAProps> = () => {
  const count = useStore(state => state.count)

  return (
    <div>
      <Title>Count A: {count}</Title>
    </div>
  )
}