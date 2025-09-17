import type {CSSProperties, FC} from 'react'

export type IconProps = {name: string; style?: CSSProperties}

// 속성에 name과 style만 처리할 때 
// export const Icon: FC<IconProps> = function (props: IconProps) {
//   const {name, style} = props
//   return <span className="material-symbols-outlined" style={style}>{name}</span>
// }

// 속성에 name과 그 나머지 속성 모두를 처리할 때
export const Icon: FC<IconProps> = function (props: IconProps) {
  const {name, ...remainProps} = props
  return <span className="material-symbols-outlined" {...remainProps}>{name}</span>
}