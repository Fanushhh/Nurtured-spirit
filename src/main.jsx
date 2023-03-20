import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';
import './index.scss';
import AboutMePage from './pages/AboutMePage/AboutMe';
import ContactMePage from './pages/ContactMePage/ContactMePage';
import ServicesPage from './pages/ServicesPage/ServicesPage';
import Reiki from './pages/ServicesPage/Reiki/Reiki';
import Kinesiology from './pages/ServicesPage/Kinesiology/Kinesiology';
import {createBrowserRouter, createHashRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/root';
import ErrorPage from './pages/ErrorPage/ErrorPage';


const router = createHashRouter([
  {
    path:'/',
    element:<Root />,
    errorElement: <ErrorPage />,
    children:[{
      index:true, element:<App />
    },
    {
      path: 'services',
      element:<ServicesPage />,
      children:[
        {
          path: 'reiki',
          element:<Reiki />
        },
        {
          path: 'kinesiology',
          element:<Kinesiology />,
        },
        {
          path: '*',
          element:<ErrorPage />,
        }
      ]
    },
    {
      path: 'reiki',
      element:<Reiki />,
    },
    {
      path: 'kinesiology',
      element:<Kinesiology />,
    },
    {
      path: 'about',
      element:<AboutMePage />,
    },
    {
      path: 'contact',
      element:<ContactMePage />,
    },
    {
      path: '*',
      element:<ErrorPage />,
    },
    
  ]
  },
  
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
