import { Outlet, Route, Routes } from 'react-router-dom'
import './App.css'
import IndexPage from './pages/IndexPage'
import LoginPage from './pages/LoginPage'
import Layout from './Layout'
import RegisterPage from './pages/RegisterPage'
import axios from 'axios'
import { useContext } from 'react'
import { UserContext } from './UserContext'

axios.defaults.baseURL = "http://localhost:4000"

function App() {

  const {user,setUser} = useContext(UserContext);

  return (
    <Routes> 
      <Route path='/' element={<Layout />}>
      <Route index  element={<IndexPage />}/>
      <Route path='/login'  element={<LoginPage />}/>
      <Route path='/register'  element={<RegisterPage />}/>
      </Route>
    </Routes>
  )
}

export default App
