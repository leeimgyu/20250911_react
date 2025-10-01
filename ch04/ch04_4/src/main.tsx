import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  // 브릿지 역활을 함
  <StrictMode>   
    <App />
  </StrictMode>,
)
