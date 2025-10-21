import {useAtom} from 'jotai'
import {counterAtom, incrementCounter} from '../../atoms'
import {CounterA} from './CounterA'
import {CounterB} from './CounterB'

export default function Counters() {
  // const [count] = useAtom(counterAtom)
  const [count, setCount] = useAtom(counterAtom)
  const [, increment] = useAtom(incrementCounter)
  return (
    <div>
      <h3>Count: {count}</h3>
      <button onClick={increment}>+</button>
      <button onClick={() => setCount(c => c - 1)}>-</button>
      <CounterA />
      <CounterB />
    </div>
  )
}