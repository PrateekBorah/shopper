import { Routes, Route } from "react-router-dom"
import Layout from "./Layout"
import Login from "./components/Login/Login"
import Home from "./components/HomePage/Home"
import Feedback from "./components/Feedback/Feedback"
import LandingPage from "./components/LandingPage/LandingPage"
import Register from "./components/Login/Register"



function App() {
  return (
    <div className="main">
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route path="/" element={<LandingPage/>}/>
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
