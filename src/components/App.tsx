import Header from "./Header"
import { Outlet, } from "react-router-dom";
import Footer from "./Footer";
import { useEffect, useReducer } from "react";
import { useAppSelector } from "../app/hooks";

const App = () => {
  const headerHeight = useAppSelector((state) => state.theme.headerHeight)

  return (
    <div className="min-h-screen bg-stone-100">
      <Header />
      <div className="transition-all" style={{
        paddingTop: headerHeight
      }}>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default App
