import type { DragEvent} from "react"

export default function FileDrop() {
  const onDragOver = (e: DragEvent) => e.preventDefault()
  const onDrop = (e: DragEvent) => {
    e.preventDefault() // image 파일이 브라우저에 보이는 것 방지 
    const files: FileList | null = e.dataTransfer.files
    if (files) {
      for (let i = 0; i < files.length; i++) {
        // const file : File | null files[i]
        const file: File | null = files.item(i)
        console.log(`files[${i}]`, file)
      }
    }
  }
  return (
    <div>
      <p>FileDrop</p>
      <div onDrop={onDrop} onDragOver={onDragOver}>
        <h1>Drop image files Over Me</h1>
      </div>
    </div>
  )
}
