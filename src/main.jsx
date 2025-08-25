import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// import App from './01_welcome/App'
// import App from './02_componentReuse/App'
// import App from './03_properties/App.jsx' 
// import App from './04_events/App'
// import App from './05_state/App'
import App from './01_Assignment/01_Assignment/App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
