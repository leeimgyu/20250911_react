import {useState, useCallback} from 'react'

// prettier-ignore
export const useToggle = function (initialChecked: boolean = false): [boolean, () => void] {
  const [checked, setChecked] = useState<boolean>(initialChecked)
  const toggleChecked = useCallback(() => setChecked(checked => !checked), [])
  return [checked, toggleChecked]
}
