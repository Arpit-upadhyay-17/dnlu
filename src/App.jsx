import { Routes , Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Footer from "./Components/footer";
import About from "./Pages/About";
import Notfound from "./Pages/notfound";

const App = () => {

  return (
    <div className='Main' >
      <Navbar />

      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/about" element={ <About /> } />
        <Route path="/*" element={ <Notfound /> } />
      </Routes>

      <Footer />

    </div>
  )
}

export default App