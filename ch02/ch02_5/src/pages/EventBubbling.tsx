import type {SyntheticEvent} from 'react'

export default function EventBubbling() {
  const onDivClick = (e: SyntheticEvent) => {
    const {isTrusted, target, bubbles, currentTarget} = e
    console.log('onDivClick occurs : ', isTrusted, target, bubbles, currentTarget)
  }
  // React나 DOM에서 이미 발생한 event의 bubbles 속성은 읽기 전용이라서 직접 수정 불가능=>eventStopPropgation을 사용
  const onEventBubbling = (e: SyntheticEvent) => {
    const {isTrusted, target, bubbles} = e
    console.log('onEventBubbling occurs : ', isTrusted, target, bubbles)
  }
  return (
    <div onClick={onDivClick}>
      <p>EventBubbling</p>
      <button onClick={onEventBubbling}>EventBubbling</button>
    </div>
  )
}