import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RegistrationForm from './components/Registrationform'
import LoginForm from './components/login'
import ProfileForm from './components/profile'
import { Link ,Route,Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/updateprofile" element={<ProfileForm />} />
      </Routes>

    </div>

 

 
  )
}

export default App
