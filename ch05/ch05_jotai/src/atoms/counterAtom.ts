import {atom} from 'jotai'

// jotai는 기본적으로 Provider를 안써도 전역으로 공유
export const counterAtom = atom(0)

// Jotai에서 '함수 atom(액션)' 생성시 첫 번째 인자를 null, 두 번째 인자에 (get, set)을 사용
export const incrementCounter = atom(
  null, // 읽을 때는 값 없음
  (get, set) => {
    set(counterAtom, get(counterAtom) + 1)
  }
)

export const decrementCounter = atom(
  null, // 읽을 때는 값 없음
  (get, set) => {
    set(counterAtom, get(counterAtom) - 1)
  }
)
