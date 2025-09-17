import type { SyntheticEvent } from "react"

export default function ReactOnClick() {
  const onClick = (e:SyntheticEvent) => {
    const {isTrusted, target, bubbles} = e
    console.log('OnClick occurs : ', isTrusted, target, bubbles)
  }
  return (
    <div>
      <p>ReactOnClick</p>
      <button onClick={onClick}>OnClick Me</button>
    </div>
  )
}
