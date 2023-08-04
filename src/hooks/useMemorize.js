import { useEffect, useRef, useState } from 'react'
import { Cookies } from '../utils/Cookie'

export function useMemorize(state = false) {
  const { getCook, setCook, deleteCookie } = Cookies()
  const form = useRef()

  const start = () => setCook('check', { bul: false })
  useEffect(() => {
    start()
  }, [])
  const [check, setCheck] = useState(
    getCook('check') !== null && getCook('check').bul
  )
  const [user, setUser] = useState(getCook('user') !== null && getCook('user'))

  const handleCheck = () => {
    setCheck(!check)
    const forma = new FormData(form.current)
    const obj = {}
    forma.forEach((item, i) => (obj[i] = item))

    if (getCook('check').bul === false) {
      setCook('user', obj)
      setUser(obj)
    } else {
      deleteCookie('user')
    }
  }
  const changeToCheck = () => setCook('check', { bul: check })
  useEffect(() => {
    changeToCheck()
  }, [check])
  return {
    check,
    handleCheck,
    form,
    user
  }
}
