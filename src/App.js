import About from "./components/About";
import Contact from "./components/Contact";
import PastEvents from "./components/PastEvents";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Team from "./components/Team";
import { Route, Routes } from 'react-router-dom'
import UpcomingEvents from "./components/UpcomingEvents";

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/upcoming" element={<UpcomingEvents />} />
        <Route path="/past" element={<PastEvents />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
      </Routes> 
      <Footer />
    </>
  )
}

export default App