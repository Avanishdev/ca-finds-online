import React, { useState, useEffect } from 'react';
import './App.css'

import HomePage from './pages/HomePage'
import DetailsPage from './pages/DetailsPage'

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('/?name=John&age=30')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, [input]);

  return (
    <>
      {/* <HomePage/> */}
      <div>
      <h1>Users</h1>
      <input placeholder='Search' />
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
    </>
  )
}

export default App
