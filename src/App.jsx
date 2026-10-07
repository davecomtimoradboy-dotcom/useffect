  import {Routes,Route,Link} from "react-router-dom"
  import Home from "./Pages/Home"
  import About from "./Pages/About"
  import Students from "./Pages/Student"
  import Courses from "./Pages/Courses"
  import Navigation from "./Navigation"



function App() {
 
 

  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/students" element={<Students/>}/>
      <Route path="/courses" element={<Courses/>}/>
      <Route path="/Navigation" element={<Navigation/>}>
    </Routes>
    </>
    
  );
}

export default App
