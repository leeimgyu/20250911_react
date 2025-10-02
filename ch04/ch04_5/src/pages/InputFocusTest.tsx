import {Title} from '../components'
import {useRef, useEffect, useCallback} from 'react'

export default function InputFocusTest() {
  const inputRef = useRef<HTMLInputElement>(null)
  useEffect(() => inputRef.current?.focus(), [])
  const onDivClick = useCallback(() => {   // useCallback 사용 
    inputRef.current?.focus()
  }, [])

  // prettier-ignore
  return (
    <section className="mt-4">
      <Title>InputFocusTest</Title>
      <div className="flex justify-center mt-4 bg-amber-200" onClick={onDivClick}>
        <input className="input input-primary" ref={inputRef} placeholder="enter some text"/>
      </div>
    </section>
  )
}