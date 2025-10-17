import {useCallback, useRef, useState, type ChangeEvent, type FormEvent} from 'react'
import {useSearchParams} from 'react-router-dom'

type FormType = {name: string; id: string; pass: string; mobile: string; birth: string}

function Join() {
  const [search] = useSearchParams() // 쿼리 스트링으로 넘어오는 값을 받기 위한 객체 선언
  const formRef = useRef<HTMLFormElement | null>(null)
  const nameRef = useRef<HTMLInputElement | null>(null)
  const idRef = useRef<HTMLInputElement | null>(null)
  const passRef = useRef<HTMLInputElement | null>(null)
  const mobileRef = useRef<HTMLInputElement | null>(null)
  const birthRef = useRef<HTMLInputElement | null>(null)

  const [form, setForm] = useState<FormType>({
    name: '',
    id: '',
    pass: '',
    mobile: '',
    birth: ''
  })
  const [error, setError] = useState<string | null>(null)

  const onChangeName = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setForm(prev => ({...prev, name: e.target.value}))
    setError(null)
  }, [])
  const onChangeId = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setForm(prev => ({...prev, id: e.target.value}))
    setError(null)
  }, [])
  const onChangePass = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setForm(prev => ({...prev, pass: e.target.value}))
    setError(null)
  }, [])
  const onChangeMobile = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setForm(prev => ({...prev, mobile: e.target.value}))
    setError(null)
  }, [])
  const onChangeBirth = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setForm(prev => ({...prev, birth: e.target.value}))
    setError(null)
  }, [])

  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      if (!form.name.trim()) {
        setError('이름을 입력하세요')
        nameRef.current?.focus()
        return
      }
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
      if (!form.mobile.trim()) {
        setError('전화번호를 입력하세요')
        mobileRef.current?.focus()
        return
      }
      if (!form.birth.trim()) {
        setError('생년월일을 입력하세요')
        birthRef.current?.focus()
        return
      }
      formRef.current?.submit()
    },
    [form]
  )
  return (
    <div>
      <h4>Join</h4>
      <div>
        {/* prettier-ignore */}
        <form action="/join" onSubmit={onSubmit} ref={formRef}>
          <span className="inline-block mb-4 w-12">이름:</span><input type="text" name="name" className="input mb-4" 
            onChange={onChangeName} ref={nameRef} value={form.name} /><br />
          <span className="inline-block mb-4 w-12">ID:</span><input type="text" name="id" className="input mb-4" 
            onChange={onChangeId} ref={idRef} value={form.id} /><br />
          <span className="inline-block mb-4 w-12">Pass:</span><input type="password" name="pass" className="input mb-4" 
            onChange={onChangePass} ref={passRef} value={form.pass} /><br />
          <span className="inline-block mb-4 w-12">Mobile:</span><input type="text" name="mobile" className="input mb-4" 
            onChange={onChangeMobile} ref={mobileRef} value={form.mobile} /><br />
          <span className="inline-block mb-4 w-12">Birth:</span><input type="date" name="birth" className="input mb-4" 
            onChange={onChangeBirth} ref={birthRef} value={form.birth} /><br />
          {error && (
            <p style={{ color: 'red', marginTop: '0.5rem' }}>{error}</p>
          )}
          <button type="submit" className="btn btn-primary">Register</button>
        </form>
        <p>useSearchParams: 쿼리 스트링 파라미터를 가져 올 때 사용</p>
        <p>name: {search.get('name')}</p>
        <p>id: {search.get('id')}</p>
        <p>pass: {search.get('pass')}</p>
        <p>mobile: {search.get('mobile')}</p>
        <p>birth: {search.get('birth')}</p>
      </div>
    </div>
  )
}

export default Join