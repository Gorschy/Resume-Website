import './global.css'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/footer';
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";

import Home from './pages/home/home';
import Education from './pages/education/education';
import Skills from './pages/skills/skills';


function App() {
  return (
    <main>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/education" element={<Education />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects"  />
          </Routes>
          <Footer />
      </Router>
    </main>
  );
}

export default App;
