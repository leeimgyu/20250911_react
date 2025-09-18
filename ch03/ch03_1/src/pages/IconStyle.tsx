import { Icon1 } from "../components"

// 속성에 name과 style만 처리할 때
export default function IconStyle() {
  return (
    <div>
      <p>3. Icon Style</p>
      <Icon1 name="bolt" style={{color: 'red', fontSize: '50px'}}/>
    </div>
  )
}