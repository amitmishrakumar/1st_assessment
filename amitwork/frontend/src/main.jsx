import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';



//googal
import { GoogleOAuthProvider } from '@react-oauth/google'
const clientId = "119903607680-q915vjgtb1t263bnfkpmah3nc0a8uqkl.apps.googleusercontent.com"


createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <GoogleOAuthProvider clientId={clientId}>
     <BrowserRouter>
      <App/>
    </BrowserRouter>
    </GoogleOAuthProvider>
  </StrictMode>,
)
