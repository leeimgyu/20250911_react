import type {ChangeEvent} from 'react'
import {useState} from 'react'
import Select from 'react-select'

// npm i react-select

export default function OnChange() {

  const onChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
    // event.stopPropagation()
    // event.preventDefault()
    console.log('onChangeValue', event.target.value)
  }
  const onChangeChecked = (event: ChangeEvent<HTMLInputElement>) => {
    // event.stopPropagation()
    // event.preventDefault()
    const newChecked = event.target.checked
    console.log('onChangeChecked', newChecked)
  }
  const onChangeFiles = (event: ChangeEvent<HTMLInputElement>) => {
    // event.stopPropagation()
    // event.preventDefault()
    console.log('onChangeFiles', event.target.files) // 선택된 파일의 목록을 볼수 있음 
  }

  // react 기본 컴포넌트의 select start (리액트 컴포넌트)
  const [choice, setChoice] = useState('mango')
  const fruits = [
    {value: 'apple', label: '사과'},
    {value: 'banana', label: '바나나'},
    {value: 'mango', label: '망고'}
  ]
  const optFruits = fruits.map((item, index) => (
    <option key={index} value={item.value}>
      {item.label}
    </option>
  ))
  const handleFruit = (e: any) => {
    setChoice(e.target.value)
    console.log(e.target.value) // option value
    console.log(e.target.selectedIndex) // option index
    console.log(e.target.options[e.target.selectedIndex].text) // text
  }
  // react 기본 컴포넌트의 select end

  // react-select 관련 start (커스텀 컴포넌트)
  const options = [
    {value: 'front', label: '프론트엔드'},
    {value: 'back', label: '백엔드'},
    {value: 'full-stack', label: '풀스택'}
  ]
  const placeholder = '카테고리 선택'
  const [changeSelected, setChangeSelected] = useState('back')
  const onChangeSelect = (e: any) => {
    if (e) {
      setChangeSelected(e.value)
      console.log(e.value, e.label)
    } else setChangeSelected('')
  }
  // react-select 관련 end

  return (
    <div>
      <p>OnChange</p>
      {/* prettier-ignore */}
      <input type="text" name="" id="" onChange={onChangeValue} />
      <input type="checkbox" name="changeCheck" onChange={onChangeChecked} />
      <input type="file" onChange={onChangeFiles} multiple accept="images/*" />
      <select key="2" value={choice} onChange={handleFruit}>
        {optFruits}
      </select>
      <Select
        key="1"
        onChange={onChangeSelect}
        options={options}
        placeholder={placeholder}></Select>
    </div>
  )
}