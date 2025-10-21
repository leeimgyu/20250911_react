import {Icon3, Title} from '../../components'
import useStore from '../../store/store'
import {CounterA} from './CounterA'
import {CounterB} from './CounterB'

export default function Counters() {
  const count = useStore(state => state.count)
  const increment = useStore(state => state.increment)
  const decrement = useStore(state => state.decrement)
  return (
    <section className="mt-4">
      <Title>Count: {count}</Title>
      <div className="flex justify-center p-4 mt-4">
        <div className="flex items-center justify-around w-1/3 text-blue-500 text-bold">
          <Icon3
            name="add_circle"
            className="cursor-pointer text-5xl select-none"
            onClick={increment}
          />
          <Icon3
            name="remove_circle"
            className="cursor-pointer text-5xl select-none"
            onClick={decrement}
          />
        </div>
      </div>
      <CounterA />
      <CounterB />
    </section>
  )
}