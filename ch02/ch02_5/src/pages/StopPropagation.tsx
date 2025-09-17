import type {SyntheticEvent} from 'react'

export default function StopPropagation() {
  const onDivClick = (e: SyntheticEvent) => {
    const {isTrusted, target, bubbles, currentTarget} = e
    console.log('onDivClick occurs : ', isTrusted, target, bubbles, currentTarget)
  }
  const onStopPropogation = (e: SyntheticEvent) => {
    const {isTrusted, target, bubbles} = e
    console.log('onStopPropogation occurs : ', isTrusted, target, bubbles)
    e.stopPropagation()
  }
  return (
    <div onClick={onDivClick}>
      <p>StopPropogation</p>
      <button onClick={onStopPropogation}>Click and stop event propgation</button>
    </div>
  )
}