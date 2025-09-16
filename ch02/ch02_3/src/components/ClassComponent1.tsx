import {Component} from 'react'

// 속성없는 컴포넌트 :: 다양한 로직을 추가 할 수 있다.
export default class ClassComponent extends Component {
  render() {
    // 가장 기본적인 형태
    return (
      <li>
        <a href="https://www.meta.com">ClassComponent1 :: Meta</a>
      </li>
    )

    // 로직 추가 형태
    // const isLoading = false
    // if (isLoading) return <p>Loading.......</p>

    // return (
    //   <li>
    //     <a href="https://www.meta.com">ClassComponent1 :: Meta</a>
    //   </li>
    // )

    // 단축 평가 형태
    // const isLoading = true
    // const children = (
    //   <li>
    //     <a href="https://www.meta.com">ClassComponent1 :: Meta</a>
    //   </li>
    // )
    // return (
    //   <>
    //     {isLoading && <p>loading...</p>}
    //     {isLoading && {children}}
    //   </>
    // )

    // 삼항 연산자 형태
    // const isLoading = true
    // const children = isLoading ? (
    //   <p>loading...</p>
    // ) : (
    //   <li>
    //     <a href="https://www.meta.com">ClassComponent1 :: Meta</a>
    //   </li>
    // )
    // return children
  }
}