import {useState, useCallback} from 'react'
import {Title} from '../components'
import type { ChangeEvent } from 'react'
import {Input} from '../theme/daisyui'

export default function InputTest() {
  // let value = ''
  // let checked = false

  const [value, setValue] = useState<string>('')
  const [checked, setChecked] = useState<boolean>(false)

  const onChangeValue = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      // value = e.target.value
      setValue(e.target.value)
      console.log(value)
    },
    [value]
  )
  const onChangeChecked = useCallback(
    function (e: ChangeEvent<HTMLInputElement>) {
      const checked = e.target.checked
      setChecked(function () {
        return checked
      })
      // setChecked(notUsed => e.target.checked)
      // console.log(checked) // useCallback에서 checked 출력시에는 변하기전 값출력
    },
    [checked]
  )

  return (
    <section className="mt-4">
      <Title>InputTest</Title>
      <div>
        <input
          type="text"
          value={value}
          onChange={onChangeValue}
          className='px-1 py-0.5'
          style={{border: '1px solid black'}}
        />
        <Input
          type="text"
          value={value}
          //defaultValue={value}  // value와 defaultValue를 동시에 사용할 수 없다.
          onChange={onChangeValue}
          className="input-primary input-sm"
        />
        <label>{value}</label>

        <input type="checkbox" onChange={onChangeChecked} />
        <Input type="checkbox" checked={checked} onChange={onChangeChecked} />
        <label>{checked ? 'O' : 'X'}</label>
      </div>
    </section>
  )
}