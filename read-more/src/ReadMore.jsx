import { useState } from 'react'

function ReadMore() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <article>
      <header>
        <h2>Le titre de l'article</h2>
      </header>
      {isOpen && (
        <section>Le corps de l'article</section>
      )}
      <footer>
        <button onClick={toggleOpen}>
          {isOpen ? 'Voir moins' : 'Voir plus'}
        </button>
      </footer>
    </article>
  )
}

export default ReadMore