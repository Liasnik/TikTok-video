import React from 'react'
import {createRoot} from 'react-dom/client'
import App from './components/app/App'
import { BrowserRouter } from 'react-router-dom'
import './styles/index.css'

const root = createRoot(document.getElementById('root'))

root.render(
    <BrowserRouter>
      <App/>
    </BrowserRouter>
)