document.getElementById('root')?.addEventListener('click', (e:Event) => {
  const {isTrusted, target, bubbles} = e
  console.log('Event occurs : ' , isTrusted, target, bubbles)
})

// ?. :: Optional Chaining은 읽기 전용일 때만 사용 가능. 쓰기(할당)에는 사용할 수 없음.
// API 응답값이 불완전할 수 있을 때, 조건문 없이 안전하게 속성을 접근하고 싶을 때
// obj?.prop :: obj가 null 또는 undefined면 undefined 반환
// arr?.[index] :: 배열 요소 안전하게 접근, func?.() :: 함수가 있을 때만 호출

document.getElementById('root')?.addEventListener('click', (e:Event) => {
  const {isTrusted, target, bubbles} = e
  console.log('Event also occurs: ' , isTrusted, target, bubbles)
})

export default function EventListener() {
  return (
    <div>
      <p>EventListener</p>
    </div>
  )
}
