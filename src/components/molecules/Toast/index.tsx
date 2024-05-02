import React, { useState, useEffect } from 'react'
import * as S from './styles'

interface ToastProps {
  message: string
  duration?: number // Duração do Toast em milissegundos (opcional)
}

const Toast: React.FC<ToastProps> = ({ message, duration = 3000 }) => {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false)
    }, duration)

    return () => clearTimeout(timer)
  }, [duration])

  return visible ? <S.ToastContainer>{message}</S.ToastContainer> : null
}

export default Toast
