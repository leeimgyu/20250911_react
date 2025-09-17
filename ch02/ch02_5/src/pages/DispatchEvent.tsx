

export default function DispatchEvent() {
  const onCallDispatchEvent = function () {
    console.log('onCallDispatchEvent')
    document.getElementById('root')?.dispatchEvent(new Event('click', {bubbles: false}))
  }
  const onCallClick = function () {
    console.log('onCallClick')
    document.getElementById('root')?.click()
  }
  return (
    <div>
      <p>DispatchEvent</p>
      <button onClick={onCallDispatchEvent}>call DispatchEvent</button>
      <button onClick={onCallClick}>call click</button>
    </div>
  )
}
