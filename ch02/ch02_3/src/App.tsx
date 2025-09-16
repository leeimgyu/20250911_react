import './App.css'
import ClassComponent1 from './components/ClassComponent1'
import FunctionComponent1 from './components/FunctionComponent1'
import ClassComponent2 from './components/ClassComponent2'
import FunctionComponent2 from './components/FunctionComponent2'

function App() {
  return (
    <>
      <h2>사용자 컴포넌트 :: 클래스 컴포넌트와 함수형 컴포넌트 비교</h2>
      <p>
        다양한 로직 추가와 속성들을 이용할 수 있도록 별도의 사용자화된 컴포넌트를 사용할 경우
      </p>
      <ul> 기본 컴포넌트
        <ClassComponent1 /> 사용자 컴포넌트의 클래스 컴포넌트
        <FunctionComponent1 /> 사용자 컴포넌트의 함수 컴포넌트 
        <ClassComponent2 href="www.naver.com" text="ClassComponent2 :: Naver" />
        <FunctionComponent2 href="www.google.com" text="FunctionComponent2 :: Google" />
      </ul>
    </>
  )
}

export default App