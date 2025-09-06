import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

/*************************************************** */

import 'bootstrap/dist/css/bootstrap.min.css'; // Only for bootstrap 

// import App from './01_welcome/App'
// import App from './02_componentReuse/App'
// import App from './03_properties/App.jsx' 
// import App from './04_events/App'
// import App from './05_state/App'
// import App from './01_Assignment/01_Assignment/App'
// import App from './06_ref/App'
// import App from './07_defaultProps/App'
// import App from './08_componentLifeCycle/App'
// import App from './09_composableComponents/App'
// import App from './09a_composableComponents/App'
// import App from './10_hoc/App'
// import App from './02_Assignment/App'
// import App from './11_renderProps/App'
// import App from './12_formHandling/App'
// import App from './13_errorBoundary/App'
// import App from './14_hooks_useState/App'
// import App from './15_hooks_useEffect/App'
// import App from './15a_hooks_useEffect/App'
// import App from './16_reactrouter/App'
// import App from './17_transition/App'
import App from './18_css_bootstrap/App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
