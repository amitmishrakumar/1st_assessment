
import './App.css'
import RegisterPage from './RegisterPage'
import Login from './Login'
import { Routes, Route } from 'react-router-dom';
function App() {
  return (

    <>
     <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>

  )
}

export default App
