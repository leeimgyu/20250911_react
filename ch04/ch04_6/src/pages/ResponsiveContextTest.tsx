import {useContext} from 'react'
import {Title, Subtitle} from '../components'
import {ResponsiveContext, useResponsive} from '../contexts'

export default function ResponsiveContextTest() {
  const breakpoint = useResponsive()  // 사용자 훅 함수를 활용해서 context의 값을 가져옴
  // const {breakpoint} = useContext(ResponsiveContext) // 직접 가져올 경우
  return (
    <section className="mt-4">
      <Title>ResponsiveContextTest</Title>
      <div className="mt-4">
        <Subtitle>breakpoint: {breakpoint}</Subtitle>
      </div>
    </section>
  )
}
