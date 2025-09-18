export default function SpanStyle() {
  return (
    <div>
      <p>2. SpanStyle</p> 
      {/* // 리액트 기본 컴포넌트에 스타일을 줄때는 {{}}를 두번 넣는다 */}
      <span className="material-symbols-outlined" style={{color: 'blue'}}>home</span>
      <span className="material-symbols-outlined" style={{fontSize:'50px', color: 'red'}}>check_circle</span>
    </div>
  )
}