import type {FC} from 'react'

export type FunctionComponent2Props = {href: string; text: string}

// this.props가 아니라 함수의 매개변수로 props를 획득한다.
const FunctionComponent2: FC<FunctionComponent2Props> = function (props) {
  const {href, text} = props // 구조분해할당
  return (
    <li><a href={href}>{text}</a></li>
  )
}

export default FunctionComponent2