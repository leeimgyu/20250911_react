import React, { useState } from 'react'

type Gender = 'male' | 'female'

interface MemberData {
  id: string
  pass: string
  name: string
  mobile: string
  birthday: string
  gender: Gender | ''
}

export default function MemberJoin() {
  const [form, setForm] = useState<MemberData>({
    id: '',
    pass: '',
    name: '',
    mobile: '',
    birthday: '',
    gender: 'female',
  })

  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }))
    // 오류 메시지 실시간 제거
    setErrors((prev) => ({
      ...prev,
      [name]: '',
    }))
  }

  const validate = () => {
    const newErrors: Record<string, string> = {}

    if (!form.id.trim()) {
      newErrors.id = '아이디를 입력하세요.'
    } else if (form.id.length < 4) {
      newErrors.id = '아이디는 최소 4자 이상이어야 합니다.'
    }

    if (!form.pass) {
      newErrors.pass = '비밀번호를 입력하세요.'
    } else if (form.pass.length < 6) {
      newErrors.pass = '비밀번호는 최소 6자 이상이어야 합니다.'
    }

    if (!form.name.trim()) {
      newErrors.name = '이름을 입력하세요.'
    }

    if (!form.mobile) {
      newErrors.mobile = '휴대폰 번호를 입력하세요.'
    } else if (!/^\d{10,11}$/.test(form.mobile)) {
      newErrors.mobile = '휴대폰 번호는 숫자 10~11자리여야 합니다.'
    }

    if (!form.birthday) {
      newErrors.birthday = '생년월일을 입력하세요.'
    }

    if (!form.gender) {
      newErrors.gender = '성별을 선택하세요.'
    }

    setErrors(newErrors)

    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validate()) {
      console.log('✅ 유효성 통과, 회원가입 정보:', form)
      alert('회원가입 완료!')
      // resetForm() 등 추가 가능
    } else {
      console.warn('❌ 유효성 검사 실패')
    }
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border border-gray-300 rounded-md shadow-md bg-white">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">회원가입</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* 아이디 */}
        <div>
          <label className="block text-sm font-medium text-gray-700">아이디</label>
          <input
            name="id"
            value={form.id}
            onChange={handleChange}
            className="mt-1 block w-full input input-bordered border-gray-300 rounded-md"
            placeholder="아이디"
          />
          {errors.id && <p className="text-red-500 text-sm mt-1">{errors.id}</p>}
        </div>

        {/* 비밀번호 */}
        <div>
          <label className="block text-sm font-medium text-gray-700">비밀번호</label>
          <input
            type="password"
            name="pass"
            value={form.pass}
            onChange={handleChange}
            className="mt-1 block w-full input input-bordered border-gray-300 rounded-md"
            placeholder="비밀번호"
          />
          {errors.pass && <p className="text-red-500 text-sm mt-1">{errors.pass}</p>}
        </div>

        {/* 이름 */}
        <div>
          <label className="block text-sm font-medium text-gray-700">이름</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            className="mt-1 block w-full input input-bordered border-gray-300 rounded-md"
            placeholder="이름"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>

        {/* 휴대폰 번호 */}
        <div>
          <label className="block text-sm font-medium text-gray-700">휴대폰 번호</label>
          <input
            name="mobile"
            type="tel"
            value={form.mobile}
            onChange={handleChange}
            className="mt-1 block w-full input input-bordered border-gray-300 rounded-md"
            placeholder="01012345678"
          />
          {errors.mobile && <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>}
        </div>

        {/* 생년월일 */}
        <div>
          <label className="block text-sm font-medium text-gray-700">생년월일</label>
          <input
            name="birthday"
            type="date"
            value={form.birthday}
            onChange={handleChange}
            className="mt-1 block w-full input input-bordered border-gray-300 rounded-md"
          />
          {errors.birthday && <p className="text-red-500 text-sm mt-1">{errors.birthday}</p>}
        </div>

        {/* 성별 */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">성별</label>
          <div className="flex gap-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="gender"
                value="male"
                checked={form.gender === 'male'}
                onChange={handleChange}
                className="radio radio-sm mr-2"
              />
              남성
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="gender"
                value="female"
                checked={form.gender === 'female'}
                onChange={handleChange}
                className="radio radio-sm mr-2"
              />
              여성
            </label>
          </div>
          {errors.gender && <p className="text-red-500 text-sm mt-1">{errors.gender}</p>}
        </div>

        {/* 제출 버튼 */}
        <div>
          <button
            type="submit"
            className="w-full btn btn-primary mt-4"
          >
            가입하기
          </button>
        </div>
      </form>
    </div>
  )
}
