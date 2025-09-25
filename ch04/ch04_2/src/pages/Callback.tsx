import {useCallback, useMemo} from 'react'
import {Title} from '../components'
import * as D from '../data'
import {Button} from '../theme/daisyui'

export default function Callback() {
  // 일반 함수를 캐시(전역선언)하더라도 리렌더링할 때 마다 다시 생성되어 비효율적
  // const onClick = () => alert('button clicked')

  // 아래처럼 사용하는 것도 비권장
  // const callback = () => alert('button clicked')
  // const onClick = useCallback(callback, [])

  // 일반 함수를 캐시(useCallback)하더라도 퍼포먼스측면에서 효율적
  const onClick = useCallback(() => alert('button clicked'), [])

  const buttons = useMemo(
    () =>
      D.makeArray(3)
        .map(D.randomName)
        .map((name, index) => (
          <Button key={index} onClick={onClick} className="btn-primary btn-wide btn-xs">
            {name}
          </Button>
        )),
    [onClick]
  )
  return (
    <div>
      <Title>useCallback 훅을 활용하여 함수를 캐시하는 기능 구현</Title>
      <div className="flex justify-evenly mt-4">{buttons}</div>
    </div>
  )
}