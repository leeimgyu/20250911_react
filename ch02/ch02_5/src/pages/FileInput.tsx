import type { ChangeEvent } from "react"

export default function FileInput() {
  let formData = new FormData()
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files : FileList | null = e.target.files
    if(files){
      for (let i = 0; i < files.length; i++) {
        const file : File | null  = files[i];
        console.log(`files[${i}]`, file)
        formData.append('uploadFiles', file)
      }
    }
    
  }
  return (
    <div>
      <p>FileInput</p>
      <input type="file" onChange={onChange} multiple accept="image/*" />
    </div>
  )
}
