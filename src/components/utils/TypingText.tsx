import { useState, useEffect } from 'react'

type Props = {
  texts: string[]
  className: string;
  speed?: number
  eraseSpeed?: number
}

const TypingText = ({ texts, className, speed = 80, eraseSpeed = 50 }: Props) => {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = texts[index]

    // CASO 1: ESCRIBIR
    if (!isDeleting && text.length < current.length) {
      const timeout = setTimeout(() => {
        setText(current.slice(0, text.length + 1))
      }, speed)
      return () => clearTimeout(timeout)
    }

    // CASO 2: ESPERAR AL FINAL
    if (!isDeleting && text.length === current.length) {
      const timeout = setTimeout(() => {
        setIsDeleting(true)
      }, 1000)
      return () => clearTimeout(timeout)
    }

    // CASO 3: BORRAR
    if (isDeleting && text.length > 0) {
      const timeout = setTimeout(() => {
        setText(current.slice(0, text.length - 1))
      }, eraseSpeed)
      return () => clearTimeout(timeout)
    }

    // CASO 4: PASAR AL SIGUIENTE TEXTO
    if (isDeleting && text.length === 0) {
      const timeout = setTimeout(() => {
        setIsDeleting(false)
        setIndex(prev => (prev + 1) % texts.length)
      }, 200)
      return () => clearTimeout(timeout)
    }
  }, [text, isDeleting, index, texts, speed, eraseSpeed])

  return (
    <p className={className}>
      {text}
      <span className="animate-pulse">|</span>
    </p>
  )
}

export default TypingText
