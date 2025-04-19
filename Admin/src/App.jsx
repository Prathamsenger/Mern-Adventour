import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './Components/Dashboard'
import User from './Components/User'
import Form from './Components/Form'
import Login from './Components/Login'
const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Dashboard/>}/>
      <Route path="/User" element={<User/>}/>
      <Route path="/Form" element={<Form/>}/>
      <Route path="/Login" element={<Login/>}/>
            <Route path="/Login" element={<Login/>}/>



    

    </Routes>
    </>
  )
}

export default App