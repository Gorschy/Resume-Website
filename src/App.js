import './App.css';
import './style.css';
import Navbar from './components/navbar/Navbar';
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Profile from './pages/home/home';
import Projects from './pages/projects/projects';


/*  TODO
- Navbar component
- Projects component
- Landing Page (Profile) page
- Education page
- Skills page
- Projects page
*/

function App() {
  return (
    <Router>
      <div className='main-div'>
        <Navbar></Navbar>
        <main>
        </main>
      </div>
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;
