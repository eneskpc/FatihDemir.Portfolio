import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App'
import Home from './Home'
import GeneralPage from './GeneralPage'
import './index.css'

const router = createBrowserRouter([{
  path: "/",
  element: <App />,
  children: [{
    index: true,
    element: <Home />
  }, {
    path: "/:page",
    element: <GeneralPage />
  }]
}]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
