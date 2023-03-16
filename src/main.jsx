import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.scss'
import {Routes, Route, BrowserRouter } from 'react-router-dom';
import SharedLayout from './components/SharedLayout/SharedLayout';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/Nurtured-spirit-project' element={<SharedLayout />}>
          <Route index element={<App />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
