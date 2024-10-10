import { useState } from 'react'
import './App.css'
import NavBar from "./components/NavBar/index.jsx";
import Layout from "./components/Layout"
import UserContext from './components/UserContext'

function App() {
    const [user, setUser] = useState('Matt')

  return (
    <UserContext.Provider value={{
        user: user,
        changeUser: setUser
    }}>
        <NavBar />
        <Layout />
    </UserContext.Provider>
  )
}

export default App
