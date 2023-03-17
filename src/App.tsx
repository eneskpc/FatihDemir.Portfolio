import Header from "./Header"
import { Outlet, } from "react-router-dom";
import Footer from "./Footer";

const App = () => {
  return (
    <div className="min-h-screen bg-stone-100">
      <Header />
      <div className="pt-72 md:pt-44">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default App
