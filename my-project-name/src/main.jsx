import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UserPosts from "./UserPosts.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
      <UserPosts />
  </StrictMode>,
)
