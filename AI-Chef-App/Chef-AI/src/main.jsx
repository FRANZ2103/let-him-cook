import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import '../chef components/components/index.css'
// import '../contact-components/Contact.css'
// import '../sound pad components/soundpad.css'
// import '../form-data-components/form.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App darkMode = {false}/>
  </StrictMode>,
)
