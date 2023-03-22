import Header from "./Header"
import { Outlet, } from "react-router-dom";
import Footer from "./Footer";
import { useAppSelector } from "../app/hooks";

const App = () => {
  const [headerHeight, footerHeight] = useAppSelector((state) => [state.theme.headerHeight, state.theme.footerHeight]);

  return (
    <div className="min-h-screen bg-stone-100">
      <Header />
      <div className="transition-all" style={{
        paddingTop: headerHeight,
        minHeight: `calc(100vh - ${footerHeight}px)`
      }}>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default App
