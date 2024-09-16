import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <App />
  // </StrictMode>,

  //Strict mode will run your code 2 times first for checking and then actually.
  //if you are using useEffect and facing that components are rendering 2 times then uh can disable strictmode.
)
