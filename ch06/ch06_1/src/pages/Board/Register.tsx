import {useCallback, useRef, useState, type ChangeEvent, type FormEvent} from 'react'
import {useSearchParams} from 'react-router-dom'
import {Title} from '../../components'
import toast from 'react-hot-toast'

type FormType = {title: string; content: string}

function Register() {
  const [search] = useSearchParams()
  const titleRef = useRef<HTMLInputElement | null>(null)
  const contentRef = useRef<HTMLInputElement | null>(null)

  const [form, setForm] = useState<FormType>({title: '', content: ''})

  const onChangeTitle = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setForm(prev => ({...prev, title: e.target.value}))
  }, [])

  const onChangeContent = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setForm(prev => ({...prev, content: e.target.value}))
  }, [])

  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      if (!form.title.trim()) {
        toast.error('제목을 입력하세요')
        titleRef.current?.focus()
        return
      }
      if (!form.content.trim()) {
        toast.error('내용을 입력하세요')
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