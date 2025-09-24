import { useEffect, useState } from 'react'
import './App.css'

function App() {
  let [users, setUsers] = useState([])
  let [loading, setLoading] = useState(true)
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        setLoading(false)
        return response.json()
      })
      .then((data) => setUsers(data))
  }, [])
  return (
    <>
      {
        loading ? "Loading..." :
          <div>
            <h1>Display list of users' and emails</h1><br /><br />
            {
              users.map((user) => (
                <li key={user.id}>Name: {user.name} AND {user.email}</li>
              ))
            }
          </div>
      }

    </>
  )
}

export default App
