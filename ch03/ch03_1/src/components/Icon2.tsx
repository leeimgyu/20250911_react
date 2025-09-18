import type {CSSProperties, FC} from 'react'

// ?: 없는 경우에 사용
export type IconProps2 = {
  name: string // 태그의 속성으로 가는 name이 아니라서 명시적으로 선언
  style?: CSSProperties // style의 모든 속성을 받기 위해 필요
  className?: string  // className은 일반적인 html태그 속성이 아니기 때문에 반드시 명시해야 함
  //nick?: string // 주석해도 상관 없음 props에서 받을 수 있기 때문
}

export const Icon2: FC<IconProps2> = (props: IconProps2) => {
  const {name, ...remainProps} = props
  return <span {...remainProps}>{name}</span>
}