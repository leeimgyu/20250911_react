import './App.css'
import Bootstrap from './pages/Bootstrap'
import SpanStyle from './pages/SpanStyle'
import IconStyle from './pages/IconStyle'
import IconStyleSpread from './pages/IconStyleSpread'
import IconStyleDetailed from './pages/IconStyleDetailed'

function App() {
  return (
    <>
      <IconStyleDetailed /> {/* 사용자컴포넌트에 리액트 속성과 ref, key, children등을 함께 적용 */}
      <IconStyleSpread />  {/* 사용자컴포넌트에 지정하는 복수의 스타일 ...으로 받기 */}
      <IconStyle /> {/* 사용자컴포넌트에 지정하는 스타일 적용 방식 */}
      <SpanStyle /> {/* 기본컴포넌트에 스타일 적용하는 방식 */}
      <Bootstrap />  {/* 리액트에서 스타일 적용시 주의사항 3가지  */}
    </>
  )
}
export default App