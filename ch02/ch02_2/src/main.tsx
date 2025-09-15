import './index.css'
import {createRoot} from 'react-dom/client'
import * as D from './data'

// JSX :: JavaScript XML 자바스크립트 언어를 확장하는 방식으로 구현
// const virtualDOM = (
//   <ul>
//     <li>
//       <a href="http://www.google.com" target='_blank'>
//         <p>go to Google</p>
//       </a>
//     </li>
//   </ul>
// )
// createRoot(document.getElementById('root')!).render(virtualDOM)

// 부모요소 아래 같은 컴포넌트가 중복될 경우 key로 구분 시켜줄것!
const children = [
  <li key={1}>
    <a href="http://www.google.com" target="_blank">
      <p>go to Google</p>
    </a>
  </li>,
   <li key={2}>
    <a href="http://www.facebook.com" target="_blank">
      <p>go to Facebook</p>
    </a>
  </li>,
   <li key={3}>
    <a href="http://www.naver.com" target="_blank">
      <p>go to Naver</p>
    </a>
  </li>,
]

const children2 = [0,1,2].map((n:number) => <h3 key={n}> Child Node {n}</h3>)
const children3 = D.range(0,3).map((n:number) => <h3 key={n}> D Child Node {n}</h3>)
// 반드시 부모 root가 있어야 함: XML 형식을 따르기 때문
const children4 = D.makeArray(10).map((notUsed, index) => (
  <div key={index}>
    <p>{D.randomId()}</p>
    <p>{D.randomName()}</p>
    <p>{D.randomJobTitle()}</p>
    <p>{D.randomSentence()}</p>
    <img src={D.randomAvatar()} width={100} height={100} />
  </div>
))

const rootvirtualDOM = (
  <div>
    <ul>{children}</ul>
    {children2}
    {children3}
    {children4}
  </div>
)

// const rootvirtualDOM = <ul>{children4}</ul> 

const root = createRoot(document.getElementById('root') as HTMLElement)
root.render(rootvirtualDOM)