import {type FC, type PropsWithChildren, type ReactNode} from 'react'

// ?: (optional property syntax) :: 있으면 ReactNode 적용, 없으면 타입 에러가 나지 않는다.
export type PProps = {children?: ReactNode}

// 리액트 17버전까지일때 사용자 컴포넌트에 children 속성을 전달하려고 할 경우
// const P:FC<PProps> = function (props) {
//   const {children} = props  // 구조분해할당
//   return <p children={children} />
// }
// export default P

// 리액트 18버전부터는 FC타입에서 children속성을 제거, PropsWithChildren을 대신 사용
// children 속성을 별도로 적용하지 않고 처리 가능하여 코드가 깔끔해짐.
const P:FC<PropsWithChildren<PProps>> = props => {
  return <p {...props} />
}
export default P