import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.scss'
import { HashRouter, Routes, Route } from 'react-router-dom';
import SharedLayout from './components/SharedLayout/SharedLayout';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<App />} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>,
)
