import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './Components/Dashboard'
import Users from './Components/Users'
import Form from './Components/Form'
import Login from './Components/Login'
const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Dashboard/>}/>
      <Route path="/Users" element={<Users/>}/>
      <Route path="/Form" element={<Form/>}/>
     <Route path="/Login" element={<Login/>}/>



    

    </Routes>
    </>
  )
}

export default App