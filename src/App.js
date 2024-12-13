import Navbar from "./components/Navbar.js"
import Live_feed from "./components/pages/Live_feed.js"
import Add_faces from "./components/pages/Add_faces.js"
import Login from "./components/Login.js"
import Home from "./components/pages/Home.js"
import Footer from "./components/Footer.js"
import {Route, Routes} from "react-router-dom"



function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/live_feed" element={<Live_feed />} />
          <Route path="/add_faces" element={<Add_faces />} />
        </Routes>
      </div>
    </div>   
  )
}

export default App;
