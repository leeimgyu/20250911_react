import {Icon2} from '../components'

// 속성에 name과 그 나머지 속성 모두를 처리할 때(... spread 연산자 활용:: data-set 처리가능)
export default function IconStyleSpread() {
  return (
    <div>
      <p>4. Icon Style Spread</p>
      <Icon2
        name="home"
        className="material-symbols-outlined"
        style={{fontSize: '30px'}}
        data-nick="material-symbols-outlined"
      />
    </div>
  )
}