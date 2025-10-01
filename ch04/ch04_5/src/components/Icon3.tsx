import type {FC, DetailedHTMLProps, HTMLAttributes} from 'react'

// HTMLAttributes<HTMLSpanElement>::React가 기본적으로 제공하는 타입, 단, ref, key 같은 React-specific 속성은 포함하지 않음
// DetailedHTMLProps<Props, Element>::내부적으로 HTMLAttributes를 확장, ref, key, children같은 추가적인 React-specific 속성도 허용
// Icon2처럼 일일히 다 지정하지 않아도 됨.
type ReactSpanProps = DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> 

// & 여러 타입을 합쳐서 하나의 타입으로 만듦, | 기호는 둘 중에 하나면 됨
export type IconProps3 = ReactSpanProps & {name: string}

export const Icon3: FC<IconProps3> = function (iconProps3: IconProps3) {
  const {name, className: _className, ...props} = iconProps3
  const className = ['material-symbols-outlined', _className].join(' ')
  return (
    <span className={className} {...props}>
      {name}
    </span>
  )
}