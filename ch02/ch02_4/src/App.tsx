import './App.css'
import P from './components/P'

function App() {
  // key 속성 1
  // const texts = [<p key="1">hello</p>, <p key={2}>world</p>]
  // return (
  //   <div>
  //     {/* key 속성은 배열의 요소처럼 같은 이름의 컴포넌트가 여러개일 때 구분하기 위해 사용 */}
  //     {texts}
  //   </div>
  // )

  // key 속성 2
  // const texts = ['hello', 'world'].map((text, idx) => <p key={idx}>{text}</p>)
  // return (
  //   <div>{texts}</div>
  // )

  // children 속성 1 :: 자식요소를 포함하는 컴포넌트에서만 사용. 자식으로 사용할 수 있는 속성
  // const texts = ['hello', 'world'].map((text, idx) => <p key={idx} children={text} />)
  // return (
  //   <div children={texts} />
  // )

  // children 속성 2 :: 사용자 컴포넌트에 children 속성 전달하기
  const texts = ['hello', 'world'].map((text, idx) => <P key={idx} children={text} />)
  return (
    <div children={texts} />
  )
}

export default App