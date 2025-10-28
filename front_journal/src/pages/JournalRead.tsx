import {useEffect, useState, useCallback} from 'react'
import {useNavigate, useSearchParams} from 'react-router-dom'
import {useToggle, useToken} from '../hooks'
import defaultImg from '../assets/no-img.gif'
import type * as F from '../types'
import { Modal, ModalAction, ModalContent } from '../theme/daisyui'
import { Subtitle } from '../components'

const BASE_URL = 'http://localhost:8080/api'

export default function JournalRead() {
  const token = useToken()
  const navigate = useNavigate()
  const [query] = useSearchParams()
  const [journal, setJournal] = useState<F.JournalDTO | null>(null)
  const [comments, setComments] = useState<F.CommentsDTO[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const jno = query.get('jno') ?? ''
  const page = query.get('page') ?? '1'
  const type = query.get('type') ?? ''
  const keyword = query.get('keyword') ?? ''

  const fetchComments = useCallback(async () => {
    try {
      const res = await fetch(`${BASE_URL}/comments/all/${jno}`, {
        headers: {Authorization: `Bearer ${token}`}
      })
      if (!res.ok) throw new Error(`HTTP error: ${res.status}`)
      const data = await res.json()
      setComments(data)
    } catch (err) {
      console.error('댓글 불러오기 실패:', err)
    }
  }, [token])

  const formatDate = useCallback((d: string) => {
    if (!d) return ''
    const date = new Date(d)
    const pad = (n: number) => n.toString().padStart(2, '0')
    return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}  `
      + `${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())} `
  }, [])
  const addComment = useCallback(()=>{

  },[])

  // 📌 이미지 오류 시 기본 이미지로 변경
  const handleImgError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = defaultImg
  }

  // 📌 게시글 상세 로드
  useEffect(() => {
    if (!token || !jno) return

    const fetchJournal = async () => {
      try {
        const res = await fetch(
          `${BASE_URL}/journal/read/${jno}`,
          {
            headers: {Authorization: `Bearer ${token}`}
          }
        )
        if (!res.ok) throw new Error(`HTTP error: ${res.status}`)
        const data = await res.json()
        setJournal(data.journalDTO)
      } catch (err) {
        setError('게시글을 불러오는 중 오류가 발생했습니다.')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchJournal()
    fetchComments()
  }, [token, jno, page, type, keyword])

  const [open, toggleOpen] = useToggle()
  const onAccept = useCallback(() => {
    
    toggleOpen()
  }, [toggleOpen])

  const goList = () => navigate(`/list?page=${page}&type=${type}&keyword=${keyword}`)
  const goModify = () =>
    navigate(`/modify?jno=${jno}&page=${page}&type=${type}&keyword=${keyword}`)

  if (loading) return <p className="text-center mt-5">Loading...</p>
  if (error) return <p className="text-center text-danger">{error}</p>
  if (!journal) return <p className="text-center">게시글이 없습니다.</p>

  return (
    <section className="py-5">
      <div className="container px-5 text-center">
        <h2 className="fw-bold mb-4">Journal Read</h2>
        <main className="mb-4">
          <div className="container px-4 px-lg-5">
            <div className="row gx-4 gx-lg-5 justify-content-center">
              <div className="col-md-10 col-lg-8 col-xl-7">
                <div className="my-5">
                  <form>
                    <div className="form-floating mb-3">
                      <input
                        name="jno"
                        type="text"
                        className="form-control"
                        value={journal.jno}
                        readOnly
                      />
                      <label htmlFor="jno">Jno</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        name="title"
                        type="text"
                        className="form-control"
                        value={journal.title}
                        readOnly
                      />
                      <label htmlFor="title">Title</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        name="content"
                        type="text"
                        className="form-control"
                        value={journal.content}
                        readOnly
                      />
                      <label htmlFor="content">Content</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        name="email"
                        type="text"
                        className="form-control"
                        value={journal.membersDTO.email}
                        readOnly
                      />
                      <input
                        name="mid"
                        type="hidden"
                        value={journal.membersDTO.mid}
                        readOnly
                      />
                      <label htmlFor="email">E-mail</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        name="regDate"
                        type="text"
                        className="form-control"
                        value={formatDate(journal.regDate)}
                        readOnly
                      />
                      <label htmlFor="regDate">RegDate</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        name="modDate"
                        type="text"
                        className="form-control"
                        value={formatDate(journal.modDate)}
                        readOnly
                      />
                      <label htmlFor="modDate">ModDate</label>
                    </div>
                    <div className="form-floating mb-3">
                      <h5 className="fw-bold mb-3">
                        첨부 이미지 ({journal.photosDTOList?.length})
                      </h5>
                      {journal.photosDTOList?.length > 0 && (
                        <div className="uploadResult mb-4">
                          <ul className="list-unstyled d-flex flex-wrap gap-3">
                            {journal.photosDTOList.map((photo, idx) => {
                              const imageUrl = photo.path
                                ? `${BASE_URL}/display?fileName=${photo.thumbnailURL}`
                                : defaultImg
                              return (
                                <li key={idx}>
                                  <img
                                    src={imageUrl}
                                    alt={photo.photosName || 'journal photo'}
                                    onError={handleImgError}
                                    style={{
                                      width: '150px',
                                      height: '150px',
                                      objectFit: 'cover',
                                      borderRadius: '8px'
                                    }}
                                  />
                                </li>
                              )
                            })}
                          </ul>
                        </div>
                      )}
                    </div>
                    <div className="form-floating mb-3">
                      <h5 className="fw-bold mb-3 flex justify-evenly">Comments ({comments.length})
                        <button className='btn btn-info btn-xs' onClick={addComment}><span className='text-xs/8'>댓글 추가</span></button>
                      </h5>
                      {comments.length === 0 ? (
                        <p className="text-muted">댓글이 없습니다.</p>
                      ) : (
                        comments.map(comment => (
                          <div
                            key={comment.cno}
                            className="border rounded p-3 mb-2 shadow-sm">
                            <p className="mb-1">{comment.text}</p>
                            <small className="text-muted">
                              {comment.nickname} / {comment.email} —{' '}
                              {formatDate(comment.regDate)}
                            </small>
                          </div>
                        ))
                      )}
                    </div>
                    <div className="form-floating mb-3 d-flex justify-evenly">
                      <button onClick={goList} className="btn btn-info px-4 mr-5">
                        Back
                      </button>
                      <button onClick={goModify} className="btn btn-primary px-4">
                        Modify
                      </button>
                    </div>
                  </form>
                  <Modal open={open} >
                    <ModalContent closeIconClassName="btn-primary" onCloseIconClicked={toggleOpen}>
                      <Subtitle>Comment 등록</Subtitle>
                      <input type="hidden" name="mid" value={journal.membersDTO?.mid} />
                      <label id="grade">Likes</label>
                      <span className="likes">👍👎</span><br />
                      <input type="text" className="form-control" name="text" placeholder="Review..." />
                      <label>회원 Email</label>
                      <input type="text" className="form-control" name="email" value={journal.membersDTO?.email}></input>
                      <ModalAction>
                        <button className="btn btn-primary" onClick={onAccept}>Accept</button>
                        <button className="btn" onClick={toggleOpen}>Close</button>
                      </ModalAction>
                    </ModalContent>
                  </Modal>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </section>
  )
}