import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import store from './app/store'
import { Provider } from 'react-redux'
import './index.css'
import moment from "moment";
import "moment/dist/locale/tr";
import LoadingIndicator from './components/LoadingIndicator'

const App = React.lazy(() => import("./components/App"))
const Home = React.lazy(() => import("./components/Home"))
const Videos = React.lazy(() => import("./components/Videos"))
const GeneralPage = React.lazy(() => import("./components/GeneralPage"))

moment.locale("tr")

const router = createBrowserRouter([{
  path: "/",
  element: (
    <React.Suspense fallback={<LoadingIndicator />}>
      <App />
    </React.Suspense>
  ),
  children: [{
    index: true,
    element: (
      <React.Suspense fallback={<LoadingIndicator />}>
        <Home />
      </React.Suspense>
    )
  }, {
    path: "/videolar",
    element: (
      <React.Suspense fallback={<LoadingIndicator />}>
        <Videos />
      </React.Suspense>
    )
  }, {
    path: "/:page",
    element: (
      <React.Suspense fallback={<LoadingIndicator />}>
        <GeneralPage />
      </React.Suspense>
    )
  }]
}]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
