import {useEffect, useState, useCallback, useRef} from 'react'
import type {ChangeEvent} from 'react'
import {useNavigate, useSearchParams} from 'react-router-dom'
import {useToggle, useToken} from '../hooks'
import defaultImg from '../assets/no-img.gif'
import type * as F from '../types'

const BASE_URL = 'http://localhost:8080/api'

export default function JournalRead() {
  const token = useToken()
  const navigate = useNavigate()
  const [query] = useSearchParams()
  const [journal, setJournal] = useState<F.JournalDTO | null>(null)
  const [comments, setComments] = useState<F.CommentsDTO[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [open, toggleOpen] = useToggle()
  const [email, setEmail] = useState('')
  const [likes, setLikes] = useState(1)

  const refText = useRef<HTMLTextAreaElement | null>(null)
  const refModalBtns = useRef<HTMLDivElement | null>(null)

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
    return (
      `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}  ` +
      `${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())} `
    )
  }, [])

  const handleImgError = useCallback((e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = defaultImg
  },[])

  useEffect(() => {
    if (!token || !jno) return
    const email = sessionStorage.getItem('email') ?? ''
    setEmail(email)

    const fetchJournal = async () => {
      try {
        const res = await fetch(`${BASE_URL}/journal/read/${jno}`, {
          headers: {Authorization: `Bearer ${token}`}
        })
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
  }, [token, jno, page, type, keyword, open, email])

  const addComment = useCallback(() => {
    toggleOpen()
  }, [toggleOpen])
  const onAccept = useCallback(() => {
    toggleOpen()
  }, [toggleOpen])
  const changeLikes = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const selected = parseInt(e.target.value)
      setLikes(selected)
      console.log('선택된 좋아요 상태:', selected)
    },
    [likes]
  )

  const saveComment = useCallback(async () => {
    try {
      const text = refText.current?.value.trim()
      const comment = {jno, text, email: email, likes: likes}

      console.log('댓글 등록 데이터:', comment)

      const commentRes = await fetch(`http://localhost:8080/api/comments/${jno}`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(comment)
      })

      if (!commentRes.ok) throw new Error(`댓글 등록 실패: ${commentRes.status}`)
      await fetchComments()
    } catch (err) {
      console.error('댓글 등록 중 오류:', err)
    } finally {
      toggleOpen()
    }
  }, [token, email, jno, likes])

  const detailComment = useCallback((cno:number, text:string, likes:number, regDate: string)=>{
    
    toggleOpen()
  }, [])

  const goList = useCallback(() => navigate(`/list?page=${page}&type=${type}&keyword=${keyword}`),[])
  const goModify = useCallback(() =>
    navigate(`/modify?jno=${jno}&page=${page}&type=${type}&keyword=${keyword}`),[])

  if (loading) return <p className="text-center mt-5">Loading...</p>
  if (error) return <p className="text-center text-danger">{error}</p>
  if (!journal) return <p className="text-center">게시글이 없습니다.</p>
  const commentlikes = `댓글수:${journal.commentsCnt}    👎: ${journal.likes}    👍: ${
    journal.commentsCnt - journal.likes
  }`
  return (
    <>
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
                          name="commentlikes"
                          type="text"
                          className="form-control"
                          value={commentlikes}
                          readOnly
                        />
                        <label htmlFor="likes">Likes of Comments</label>
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
                                // console.log(photo)
                                const imageUrl = photo.path
                                  ? `${BASE_URL}/display?fileName=${photo.getThumbnailURL}`
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
                        <h5 className="fw-bold mb-3 flex justify-evenly">
                          Comments ({comments.length})
                          <button
                            type="button"
                            className="btn btn-info h-8 text-5/8"
                            onClick={()=>addComment()}>댓글 추가</button>
                        </h5>
                        {comments.length === 0 ? (
                          <p className="text-muted">댓글이 없습니다.</p>
                        ) : (
                          comments.map(comment => (
                            <div
                              key={comment.cno}
                              onClick={()=> detailComment(comment.cno, comment.email, comment.likes, comment.regDate)}
                              className="border rounded p-3 mb-2 shadow-sm cursor-pointer">
                              <p className="mb-1">{comment.text}</p>
                              <small className="text-muted">
                                {comment.nickname} / {comment.email} —{' '}
                                {formatDate(comment.regDate)}
                              </small>
                              <span>
                                {comment?.likes == 0 ? '👎' : '👍'}
                              </span>
                            </div>
                          ))
                        )}
                      </div>
                      <div className="form-floating mb-3 d-flex justify-evenly">
                        <button onClick={()=>goList()} className="btn btn-info px-4 mr-5">
                          Back
                        </button>
                        <button onClick={()=>goModify()} className="btn btn-primary px-4">
                          Modify
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </section>
      {open && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999 // 다른 요소 위에 확실히 표시되도록 높은 값 설정
          }}>
          <div style={{padding: '20px', backgroundColor: 'white', borderRadius: '8px'}}>
            <h1>Comment</h1>
            <div className="py-4">
              <div className="mb-3">
                <label className="label">
                  <span className="label-text">작성자 Email</span>
                </label>
                <input
                  type="text"
                  className="input input-bordered w-full"
                  name="email"
                  defaultValue={email}
                />
              </div>

              <div className="mb-5">
                <label className="label">
                  <span className="label-text">댓글 내용</span>
                </label>
                <textarea
                  ref={refText}
                  className="textarea textarea-bordered h-24 w-full"
                  name="text"
                  placeholder="여기에 댓글 내용을 입력하세요..."
                />
                <div className="mt-2">
                  <label className="label cursor-pointer justify-start gap-2">
                    <input
                      type="radio"
                      name="likes"
                      value={1} // 👍 좋아요 → 1
                      checked={likes === 1} // 현재 likes가 1일 때 선택됨
                      onChange={changeLikes}
                      className="radio checked:bg-blue-500"
                    />
                    <span className="label-text">👍 좋아요</span>
                  </label>
                  <label className="label cursor-pointer justify-start gap-2">
                    <input
                      type="radio"
                      name="likes"
                      value={0} // 👎 싫어요 → 0
                      checked={likes === 0} // 현재 likes가 0일 때 선택됨
                      onChange={changeLikes}
                      className="radio checked:bg-red-500"
                    />
                    <span className="label-text">👎 싫어요</span>
                  </label>
                </div>
              </div>
            </div>
            <div className="flex justify-evenly" ref={refModalBtns}>
              <button type="button" className="btn btn-primary" onClick={()=>saveComment()}>
                등록
              </button>
              <button type="button" className="btn btn-primary" onClick={()=>onAccept()}>
                닫기
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
