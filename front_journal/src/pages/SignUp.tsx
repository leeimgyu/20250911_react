import type {ChangeEvent} from 'react'
import {useState, useCallback} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {useAuth} from '../contexts'
import * as D from '../data'

type SignUpFormType = Record<'email' | 'password' | 'confirmPassword', string>
const initialFormState = {email: D.randomEmail(), password: '1', confirmPassword: '1'}

export default function SignUp() {
  const [{email, password, confirmPassword}, setForm] = useState<SignUpFormType>(initialFormState)
  const [error, setError] = useState<string>('') // 🔹 에러 메시지 상태

  const changed = useCallback(
    (key: string) => (e: ChangeEvent<HTMLInputElement>) => {
      setForm(obj => ({...obj, [key]: e.target.value}))
      setError('') // 입력 중이면 에러 초기화
    },
    []
  )

  const navigate = useNavigate()
  const {signup} = useAuth()

  // ✅ 유효성 검사 함수
  const validate = useCallback(() => {
    if (!email.trim() || !password.trim()) {
      setError('이메일과 비밀번호를 모두 입력하세요.')
      return false
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setError('유효한 이메일 주소를 입력하세요.')
      return false
    }

    if (password.length < 6) {
      setError('비밀번호는 6자 이상이어야 합니다.')
      return false
    }

    return true
  }, [email, password, confirmPassword])

  const createAccount = useCallback(() => {
    console.log(email, password, confirmPassword)
    if (!validate()) return // 🔹 유효성 검사 실패 시 로그인 중단
    if (password === confirmPassword) {
      signup(email, password, () => navigate('/login'))
    } else {
      alert('Password is not equal to confirmPassword')
      return
    }
  }, [email, password, confirmPassword, navigate, signup])

  return (
    <div className="flex flex-col">
      <div className="flex flex-col flex-1 max-w-sm px-2 mx-auto">
        <div className="w-full px-6 py-8 text-black bg-white">
          <h1 className="mb-8 text-2xl text-center text-primary">Sign Up</h1><p></p>
          <input type="text" name="email" className="w-full p-3 mb-4 input input-primary"
            placeholder="Email" value={email} onChange={changed('email')} />
          <input type="password" name="password" className="w-full p-3 mb-4 input input-primary"
            placeholder="Password" value={password} onChange={changed('password')} />
          <input type="password" name="confirmPassword" className="w-full p-3 mb-4 input input-primary"
            placeholder="Confirm Password" value={confirmPassword} onChange={changed('confirmPassword')} />
          <div className="h-8">{error && <p style={{color: 'red'}}>{error}</p>}</div>
          <button type="submit" className="w-full btn btn-primary" onClick={createAccount}>
            Create Account
          </button>
        </div>
        <div className="mt-6 text-grey-dark">
          Already have an account?
          <Link className="btn btn-primary btn-link" to="/login/">
            Login
          </Link>
        </div>
      </div>
    </div>
  )
}
