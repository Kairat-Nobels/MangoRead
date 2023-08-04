import { useCallback, useRef } from 'react'

const useDebounce = (callBack, delay) => {
  const timer = useRef()
  const debouncedCB = useCallback(
    (...args) => {
      if (timer.current) {
        clearTimeout(timer.current)
      }
      timer.current = setTimeout(() => {
        callBack(...args)
      }, delay)
    },
    [callBack, delay]
  )
  
  return debouncedCB
}
export default useDebounce
