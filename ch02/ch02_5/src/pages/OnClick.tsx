const rootDiv = document.getElementById('root')
if (rootDiv) {
  rootDiv.onclick = (e: Event) => {
    const {isTrusted, target, bubbles} = e
    console.log('OnClick also occurs : ', isTrusted, target, bubbles)
  }
  rootDiv.onclick = (e: Event) => {
    const {isTrusted, target, bubbles} = e
    console.log('OnClick occurs : ', isTrusted, target, bubbles)
  }
}

export default function OnClick() {
  return (
    <div>
      <p>OnClick</p>
    </div>
  )
}
