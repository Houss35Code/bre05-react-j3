import { useState } from 'react'

function User({ firstName, lastName, loggedIn }) {
  const [user, setUser] = useState({
    firstName: firstName,
    lastName: lastName,
    isConnected: loggedIn
  })

  const toggleConnection = () => {
    setUser(Object.assign({}, user, { isConnected: !user.isConnected }))
  }

  return (
    <li>
      <article>
        <h2>{user.firstName} {user.lastName}</h2>
        <p>{user.isConnected ? 'En Ligne' : 'Hors Ligne'}</p>
        <button onClick={toggleConnection}>
          {user.isConnected ? 'Déconnexion' : 'Connexion'}
        </button>
      </article>
    </li>
  )
}

export default User