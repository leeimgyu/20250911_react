import type {FormEvent, ChangeEvent} from 'react'
import {useCallback, useEffect, useRef, useState} from 'react'
import {useToken} from '../hooks'
import {useNavigate, useSearchParams} from 'react-router-dom'

interface PhotosDTO {
  uuid: string
  photosName: string
  path: string
  thumbnailURL?: string
  fileURL?: string
}

const JournalRegister: React.FC = () => {
  const token = useToken()
  const [query] = useSearchParams()
  const navigate = useNavigate()

  const refFile = useRef<HTMLInputElement | null>(null)
  const refTitle = useRef<HTMLInputElement | null>(null)
  const refContent = useRef<HTMLTextAreaElement | null>(null)
  const [mid, setMid] = useState('')
  const [photos, setPhotos] = useState<PhotosDTO[]>([])
  const [inputHiddens, setInputHiddens] = useState('')

  useEffect(() => {
    const email = sessionStorage.getItem('email')
    const url = 'http://localhost:8080/api/members/get'
    if (token && email) {
      fetch(`${url}?email=${email}`, {
        method: 'GET',
        headers: {Authorization: `Bearer ${token}`}
      })
        .then(res => {
          if (res.status !== 200) throw new Error(`HTTP error! status: ${res.status}`)
          return res.json()
        })
        .then(data => {
          setMid(data.mid)
        })
        .catch(console.error)
    }
  }, [token])

  const checkExtension = useCallback((fileName: string, fileSize: number) => {
    const maxSize = 1024 * 1024 * 10
    if (fileSize >= maxSize) {
      alert('파일사이즈 초과 (최대 10MB)')
      return false
    }
    const regex = new RegExp('(.*?)\\.(jpg|jpeg|png|gif|bmp|pdf)$', 'i')
    if (!regex.test(fileName)) {
      alert('해당 파일 형식은 업로드할 수 없습니다.')
      return false
    }
    return true
  }, [])

  const fileChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const fileList = e.target.files
      if (!fileList || fileList.length === 0) return

      const formData = new FormData()
      for (const file of fileList) {
        if (!checkExtension(file.name, file.size)) {
          e.target.value = ''
          return
        }
        formData.append('uploadFiles', file)
      }

      if (token) {
        fetch('http://localhost:8080/api/uploadAjax', {
          method: 'POST',
          body: formData,
          headers: {Authorization: `Bearer ${token}`}
        })
          .then(res => res.json())
          .then((json: any[]) => {
            const mapped = json.map(item => ({
              uuid: item.uuid,
              photosName: item.fileName,
              path: item.folderPath,
              thumbnailURL: item.thumbnailURL,
              fileURL: item.imageURL
            }))
            setPhotos(prev => [...prev, ...mapped])
          })
          .catch(console.error)
      }
    },
    [token, checkExtension]
  )

  const handleRemove = useCallback(
    (target: PhotosDTO) => {
      if (!token) return
      const removeUrl = `http://localhost:8080/api/removeFile?fileName=${target.fileURL}`
      fetch(removeUrl, {
        method: 'POST',
        headers: {Authorization: `Bearer ${token}`}
      })
        .then(res => res.json())
        .then(json => {
          if (json === true) {
            setPhotos(prev => prev.filter(p => p.uuid !== target.uuid))
            if (refFile.current) refFile.current.value = ''
          }
        })
        .catch(console.error)
    },
    [token]
  )

  const journalSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const page = query.get('page') ?? '1'
    const type = query.get('type') ?? ''
    const keyword = query.get('keyword') ?? ''

    const title = refTitle.current?.value.trim()
    const content = refContent.current?.value.trim()

    if (!title) {
      alert('제목을 입력하세요.')
      refTitle.current?.focus()
      return
    }
    if (!content) {
      alert('내용을 입력하세요.')
      refContent.current?.focus()
      return
    }

    const hiddenStr = photos.map((photo, i) => `
          <input type="hidden" name="photosDTOList[${i}].uuid" value="${photo.uuid}" />
          <input type="hidden" name="photosDTOList[${i}].photosName" value="${photo.photosName}" />
          <input type="hidden" name="photosDTOList[${i}].path" value="${photo.path}" />
        `).join('')
    setInputHiddens(hiddenStr)

    const formDataObj = {
      title,
      content,
      membersDTO: {mid},
      photosDTOList: photos
    }

    if (token) {
      fetch('http://localhost:8080/api/journal/register', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(formDataObj)
      })
        .then(res => res.text())
        .then(resMessage => {
          navigate(`/list?page=${page}&type=${type}&keyword=${keyword}&msg=${resMessage}`)
        })
        .catch(console.error)
    } else {
      navigate('/')
    }
  }

  return (
    <section className="py-5">
      <div className="container px-5 text-center">
        <h2 className="fw-bold mb-4">Journal Register</h2>
        <main className="mb-4">
          <div className="container px-4 px-lg-5">
            <div className="row gx-4 gx-lg-5 justify-content-center">
              <div className="col-md-10 col-lg-8 col-xl-7">
                <div className="my-5">
                  <form onSubmit={journalSubmit}>
                    <div className="form-floating mb-3">
                      <input
                        ref={refTitle}
                        id="title"
                        name="title"
                        type="text"
                        className="form-control"
                        placeholder="Input Title"
                      />
                      <label htmlFor="title">Title</label>
                    </div>

                    <div className="form-floating mb-3">
                      <textarea
                        ref={refContent}
                        id="content"
                        name="content"
                        className="form-control"
                        placeholder="Enter your Content here..."
                        style={{height: '15rem'}}
                      />
                      <label htmlFor="content">Content</label>
                    </div>

                    <div className="form-floating mb-3">
                      <input
                        ref={refFile}
                        id="fileInput"
                        type="file"
                        accept="image/*"
                        multiple
                        className="file-input w-full"
                        onChange={fileChange}
                      />
                    </div>

                    <div className="uploadResult mb-3">
                      <ul className="list-unstyled d-flex flex-wrap justify-content-center gap-3">
                        {photos.map(photo => (
                          <li key={photo.uuid} className="position-relative">
                            <button
                              type="button"
                              className="btn btn-sm btn-danger position-absolute top-0 end-0"
                              onClick={() => handleRemove(photo)}>
                              ×
                            </button>
                            <img
                              src={`http://localhost:8080/api/display?fileName=${photo.thumbnailURL}`}
                              alt={photo.photosName}
                              style={{
                                width: '64px',
                                height: '64px',
                                objectFit: 'cover',
                                borderRadius: '8px'
                              }}
                            />
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div
                      className="d-none"
                      dangerouslySetInnerHTML={{__html: inputHiddens}}></div>

                    <button className="btn btn-primary text-uppercase p-1" type="submit">
                      Send
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </section>
  )
}

export default JournalRegister
