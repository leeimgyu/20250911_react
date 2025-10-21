import type {ChangeEvent} from 'react'
import {useState, useCallback, useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {useAuth} from '../../contexts'
import * as U from '../../utils'

type LoginFormType = Record<'email' | 'password', string>
const initialFormState = {email: '', password: ''}

export default function Login() {
  const [{email, password}, setForm] = useState<LoginFormType>(initialFormState)
  const [error, setError] = useState<string>('') // 🔹 에러 메시지 상태

  const changed = useCallback(
    (key: keyof LoginFormType) => (e: ChangeEvent<HTMLInputElement>) => {
      setForm(obj => ({...obj, [key]: e.target.value}))
      setError('') // 입력 중이면 에러 초기화
    },
    []
  )

  const navigate = useNavigate()
  const {login} = useAuth()

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
  }, [email, password])

  const loginAccount = useCallback(() => {
    if (!validate()) return // 🔹 유효성 검사 실패 시 로그인 중단

    login(email, password, () => navigate('/'))
  }, [email, password, navigate, login, validate])

  useEffect(() => {
    U.readObjectP<LoginFormType>('user')
      .then(user => {
        if (user) setForm(user)
      })
      .catch(() => {})
  }, [])

  return (
    <div className="flex flex-col min-h-screen border-gray-300 rounded-xl shadow-xl bg-gray-100 border">
      <div className="flex flex-col items-center justify-center flex-1 max-w-sm px-2 mx-auto">
        <div className="w-full px-6 py-8 text-black bg-white rounded shadow-md">
          <h1 className="mb-8 text-2xl text-center text-primary">Login</h1>

          <input
            type="text"
            name="email"
            className="w-full p-3 mb-4 input input-primary"
            placeholder="Email"
            value={email}
            onChange={changed('email')}
          />

          <input
            type="password"
            name="password"
            className="w-full p-3 mb-4 input input-primary"
            placeholder="Password"
            value={password}
            onChange={changed('password')}
          />

          {/* 🔹 에러 메시지 표시 */}
          {error && <p className="mb-4 text-sm text-red-500">{error}</p>}

          <button type="submit" className="w-full btn btn-primary" onClick={loginAccount}>
            Login
          </button>
        </div>

        <div className="mt-6 text-grey-dark">
          Create account?
          <Link className="btn btn-primary btn-link" to="/signup">
            Join
          </Link>
        </div>
      </div>
    </div>
  )
}
