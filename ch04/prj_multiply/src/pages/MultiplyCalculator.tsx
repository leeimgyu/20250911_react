import {useState, useEffect, useRef, useCallback, useMemo} from 'react'

export default function MultiplyCalculator() {
  const [num1, setNum1] = useState('')
  const [num2, setNum2] = useState('')
  const [result, setResult] = useState<number | null>(null)
  const input1Ref = useRef<HTMLInputElement>(null)

  useEffect(() => input1Ref.current?.focus(), [])

  const cachedResult = useMemo(() => {
    const a = parseFloat(num1)
    const b = parseFloat(num2)
    if (isNaN(a) || isNaN(b)) return null
    return a * b
  }, [num1, num2])

  const calculate = useCallback(() => {
    const a = parseFloat(num1)
    const b = parseFloat(num2)

    if (isNaN(a) || isNaN(b)) {
      alert('숫자를 모두 입력하세요.')
      input1Ref.current?.focus()
      return
    }

    setResult(a * b)
  }, [num1, num2])

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded shadow">
      <h2 className="text-xl font-bold mb-4">🧮 곱셈 계산기</h2>

      <div className="flex flex-col gap-3">
        <input
          type="number"
          placeholder="숫자 1"
          className="input input-bordered"
          ref={input1Ref}
          value={num1}
          onChange={e => setNum1(e.target.value)}
        />
        <input
          type="number"
          placeholder="숫자 2"
          className="input input-bordered"
          value={num2}
          onChange={e => setNum2(e.target.value)}
        />
        <button className="btn btn-primary" onClick={calculate}>
          계산하기
        </button>

        <div className="mt-4">
          <p>
            📌 계산 결과: <strong>{result !== null ? result : '없음'}</strong>
          </p>
          <p>
            🧠 캐시된 결과 (useMemo):{' '}
            <strong>{cachedResult !== null ? cachedResult : '없음'}</strong>
          </p>
        </div>
      </div>
    </div>
  )
}
