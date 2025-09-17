import type {DragEvent} from 'react'

export default function DragDrop() {
  const onDragStart = (e: DragEvent<HTMLInputElement>) => {
    // dataTransfer :: 파일을 드롭할때 파일의 정보를 알수 있게 함.
    console.log('onDragStart', e.dataTransfer)
  }
  const onDragEnd = (e: DragEvent<HTMLInputElement>) => {
    // dataTransfer :: 파일을 드롭할때 파일의 정보를 알수 있게 함.
    console.log('onDragEnd', e.dataTransfer)
  }
  const onDragOver = (e: DragEvent) => e.preventDefault
  const onDrop = (e: DragEvent) => {
    e.preventDefault()
    console.log('onDrop', e.dataTransfer)
  }
  return (
    <div>
      <p>DragDrop</p>
      <div draggable onDragStart={onDragStart} onDragEnd={onDragEnd}>
        <h1>Drag Me</h1>
      </div>
      {/* onDrop과 onDragOver는 같이 있어야 drop을 할 수 있다 */}
      <div onDrop={onDrop} onDragOver={onDragOver}>
        <h1>Drop Over Me</h1>
      </div>
    </div>
  )
}
