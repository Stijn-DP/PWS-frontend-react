import Navbar from "./Navbar.js"
import Live_feed from "./pages/Live_feed.js"
import Add_faces from "./pages/Add_faces.js"
import Account from "./pages/Account.js"
import Home from "./pages/Home.js"
import {Route, Routes} from "react-router-dom"



function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/account" element={<Account />} />
          <Route path="/live_feed" element={<Live_feed />} />
          <Route path="/add_faces" element={<Add_faces />} />
        </Routes>
      </div>
    </>   
  )
}

export default App;
