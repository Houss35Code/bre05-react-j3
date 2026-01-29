import { useState } from 'react'

function User() {
  const [status, setStatus] = useState(false)

  const toggleStatus = () => {
    setStatus(!status)
  }

  return (
    <article>
      <h2>Mari Doucet</h2>
      <p>{status ? 'En Ligne' : 'Hors Ligne'}</p>
      <button onClick={toggleStatus}>
        {status ? 'Déconnecter' : 'Connecter'}
      </button>
    </article>
  )
}

export default User