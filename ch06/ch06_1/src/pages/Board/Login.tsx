import {useCallback, useRef, useState, type ChangeEvent, type FormEvent} from 'react'
import {useSearchParams} from 'react-router-dom'

// 1) 입력 양식의 갯수 대로 객체 선언
type FormType = {id: string; pass: string}

function Login() {
  const [search] = useSearchParams() // 쿼리 스트링으로 넘어오는 값을 받기 위한 객체 선언

  // 2) 각각의 입력양식태그에 접근하기 위한 ref 선언
  const idRef = useRef<HTMLInputElement | null>(null)
  const passRef = useRef<HTMLInputElement | null>(null)
  const formRef = useRef<HTMLFormElement | null>(null)

  // 3) useState()를 통해서 입력 양식의 속성들을 form 변수에 객체로 할당
  const [form, setForm] = useState<FormType>({id: '', pass: ''})
  const [error, setError] = useState<string | null>(null)

  // 4) 속성의 값을 반영하기 위한 이벤트 함수 선언
  const onChangeId = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setForm(prev => ({...prev, id: e.target.value}))
    setError(null)
  }, [])
  const onChangePass = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setForm(prev => ({...prev, pass: e.target.value}))
    setError(null)
  }, [])

  //5) 유효성 검사 및 전송
  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      if (!form.id.trim()) {
        setError('ID를 입력하세요')
        idRef.current?.focus()
        return
      }
      if (!form.pass.trim()) {
        setError('비밀번호를 입력하세요')
        passRef.current?.focus()
        return
      }
      formRef.current?.submit()
    },
    [form]
  )
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h4>Login</h4>
      <div>
        <form action="/login" onSubmit={onSubmit} ref={formRef}>
          <div className="flex flex-row">
            <span className="inline-block mb-4 w-15">ID:</span>
            <input
              type="text"
              name="id"
              className="input mb-4"
              onChange={onChangeId}
              ref={idRef}
            />
          </div>
          <div className="flex flex-row">
            <span className="inline-block mb-4 w-15">Pass:</span>
            <input
              type="password"
              name="pass"
              className="input mb-4"
              onChange={onChangePass}
              ref={passRef}
            />
          </div>
          <div className="h-8">
            {error && <p style={{color: 'red'}}>{error}</p>}
          </div>
          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </form>
      </div>
      <div>
        <p>useSearchParams: 쿼리 스트링 파라미터를 가져 올 때 사용</p>
        <p>id: {search.get('id')}</p>
        <p>pass: {search.get('pass')}</p>
      </div>
    </div>
  )
}

export default Login