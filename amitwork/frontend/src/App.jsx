
import './App.css'
import RegisterPage from './RegisterPage'
import Login from './Login'
import HomePage from '../HomePage';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (

    <>
     <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/homepage" element={<HomePage />} />
      </Routes>
    </>

  )
}

export default App
