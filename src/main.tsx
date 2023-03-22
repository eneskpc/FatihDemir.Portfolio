import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './components/App'
import Home from './components/Home'
import GeneralPage from './components/GeneralPage'
import store from './app/store'
import { Provider } from 'react-redux'
import './index.css'
import Videos from './components/Videos'
import moment from "moment";
import "moment/dist/locale/tr";

moment.locale("tr")

const router = createBrowserRouter([{
  path: "/",
  element: <App />,
  children: [{
    index: true,
    element: <Home />
  }, {
    path: "/videolar",
    element: <Videos />
  }, {
    path: "/:page",
    element: <GeneralPage />
  }]
}]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
