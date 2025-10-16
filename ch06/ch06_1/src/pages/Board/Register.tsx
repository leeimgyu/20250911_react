import {useCallback, useRef, useState, type ChangeEvent, type FormEvent} from 'react'
import {useSearchParams} from 'react-router-dom'
import {Title} from '../../components'

type FormType = {title: string; content: string}

function Register() {
  const [search] = useSearchParams()
  const titleRef = useRef<HTMLInputElement | null>(null)
  const contentRef = useRef<HTMLInputElement | null>(null)

  const [form, setForm] = useState<FormType>({title: '', content: ''})
  const [error, setError] = useState<string | null>(null)

  const onChangeTitle = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setForm(prev => ({...prev, title: e.target.value}))
    setError(null)
  }, [])

  const onChangeContent = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setForm(prev => ({...prev, content: e.target.value}))
    setError(null)
  }, [])

  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      if (!form.title.trim()) {
        setError('제목을 입력하세요')
        titleRef.current?.focus()
        return
      }
      if (!form.content.trim()) {
        setError('내용을 입력하세요')
        contentRef.current?.focus()
        return
      }
    },
    [form]
  )

  return (
    <section className="w-full max-w-md p-8 mx-auto mt-4 space-y-4 bg-white rounded-lg shadow-lg">
      <Title>Register</Title>
      <form onSubmit={onSubmit} className="space-y-4">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Title</span>
          </label>
          <input
            type="text"
            name="title"
            className="w-full input input-bordered"
            ref={titleRef}
            onChange={onChangeTitle}
            value={form.title}
            placeholder="Enter title"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Content</span>
          </label>
          <input
            type="text"
            name="content"
            className="w-full input input-bordered"
            onChange={onChangeContent}
            ref={contentRef}
            value={form.content}
            placeholder="Enter content"
          />
        </div>
        {error && (
          <div className="alert alert-error">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 stroke-current shrink-0"
              fill="none"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>{error}</span>
          </div>
        )}
        <div className="flex items-center justify-center">
          <button type="submit" className="w-full btn btn-primary">
            Register
          </button>
        </div>
      </form>
      <div className="p-4 mt-4 text-sm rounded-lg bg-gray-50">
        <h3 className="font-bold">useSearchParams Debug:</h3>
        <p>Title: {search.get('title')}</p>
        <p>Content: {search.get('content')}</p>
      </div>
    </section>
  )
}

export default Register