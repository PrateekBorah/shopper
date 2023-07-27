import { Routes, Route } from "react-router-dom"
import Layout from "./Layout"
import Index from "./components/LandingPage"
import Login from "./components/Login/Login"
import Register from "./components/Login/register"
import Home from "./components/HomePage/Home"
import Feedback from "./components/Feedback/Feedback"


function App() {
  return (
    <div className="main">
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route path="/" element={<Index/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/feedback" element={<Feedback/>}/>
      </Route>
    </Routes>
    </div>
  )
}

export default App
