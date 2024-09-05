
import Home from "./Components/Home/Home"
import Navbar from "./Components/Navbar/Navbar"
import About from "./Components/About/About"
import Experince from "./Components/Experience/Experince"
import Projects from "./Components/Projects/Projects"
import Footer from "./Components/Footer/Footer"
function App() {
  

  return (
  <div className="bg-blue-900 h-auto w-full overflow-hidden">
    <Navbar/>
    <Home/>
   < About/>
   <Experince/>
   <Projects/>
   <Footer/>
  </div>
  )
}

export default App
