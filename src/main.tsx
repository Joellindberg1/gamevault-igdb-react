import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import '@/styles/reset.scss';
import '@/styles/main.scss';
import App from './App.tsx'
import '@fortawesome/fontawesome-free/css/all.min.css';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
