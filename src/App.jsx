import Form from "./pages/form"
import Home from "./pages/home"
import Projects from "./pages/projects"
import ProjectDetails from "./pages/projectsDeails"
import NotFound from "./pages/notFound"
import Navbar from "./components/navbar"

import { Routes,Route } from "react-router-dom"


function App() {
 

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />   
        <Route path="/form" element={<Form />} />  
        <Route path="/edit_task/:id" element={<Form />} />  
        <Route path="/projects" element={<Projects />} /> 
        <Route path="/projects/:id" element={<ProjectDetails />} /> 
        <Route path="/notFound" element={<NotFound />} />  

      </Routes>

      
   </div>
   
  )
}

export default App
