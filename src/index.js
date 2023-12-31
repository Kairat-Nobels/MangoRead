import { createRoot } from 'react-dom/client'
import './mainStyle/index.css'
import App from './App'

import reportWebVitals from './reportWebVitals'

const root = createRoot(document.getElementById('root'))
root.render(
  <App />
)

reportWebVitals()
