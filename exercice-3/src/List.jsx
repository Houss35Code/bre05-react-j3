import { useState } from 'react'

function List() {
  const [fruits, setFruits] = useState(["banane", "orange", "pomme", "citron", "mangue"])

  const removeLastFruit = () => {
    setFruits(fruits.slice(0, -1))
  }

  return (
    <>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
      <button onClick={removeLastFruit}>Supprimer le dernier fruit</button>
    </>
  )
}

export default List