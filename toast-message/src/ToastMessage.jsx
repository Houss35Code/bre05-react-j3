import { useState } from 'react'
import './ToastMessage.css'

function ToastMessage() {
  const [isVisible, setIsVisible] = useState(true)

  const dismiss = () => {
    setIsVisible(false)
  }

  return (
    <article className={isVisible ? "toastMessage" : "dismissed"}>
      <p>Ceci est le texte de mon message</p>
      <button onClick={dismiss}>X</button>
    </article>
  )
}

export default ToastMessage