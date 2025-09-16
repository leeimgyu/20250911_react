import {Component} from 'react'

// 속성 있는 클래스 컴포넌트
export type ClassComponent2Props = {
  href: string
  text: string
}

export default class ClassComponent2 extends Component<ClassComponent2Props> {
  render() {
    // 로직 추가
    const isLoading = false
    if (isLoading) return <p>Loading.......</p>
    const {href, text, ...rest} = this.props
    return (
      <li>
        <a href={href}>{text}</a>
      </li>
    )
  }
}