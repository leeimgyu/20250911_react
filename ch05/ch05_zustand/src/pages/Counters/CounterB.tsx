import { Title } from '../../components'
import useStore from '../../store/store'
import type {FC} from 'react'

export type CountBProps = {}
export const CounterB: FC<CountBProps> = () => {
  const count = useStore(state => state.count)

  return (
    <div>
      <Title>Count B: {count}</Title>
    </div>
  )
}