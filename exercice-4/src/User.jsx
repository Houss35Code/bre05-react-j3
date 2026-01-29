import { useState } from 'react'

function User() {
  const [user, setUser] = useState({
    firstName: "Mari",
    lastName: "Doucet",
    isConnected: false
  })

  const toggleConnection = () => {
    setUser(Object.assign({}, user, { isConnected: !user.isConnected }))
  }

  return (
    <article>
      <h2>{user.firstName} {user.lastName}</h2>
      <p>{user.isConnected ? 'En Ligne' : 'Hors Ligne'}</p>
      <button onClick={toggleConnection}>
        {user.isConnected ? 'Déconnexion' : 'Connexion'}
      </button>
    </article>
  )
}

export default User