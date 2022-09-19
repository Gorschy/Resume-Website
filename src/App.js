import './App.css';
import './style.css';
import Navbar from './components/navbar/Navbar';
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Profile from './pages/home/home';
import Education from './pages/education/education';
import Skills from './pages/skills/skills';
import Projects from './pages/projects/projects';

/*  TODO
- Navbar component
- Projects component
- Landing Page (Profile) page
- Education page
- Skills page
- Projects page
        <Route path="/themify" element={<Themify />} />
        <Route path="/*" element={<PageNotFound />} />



Color Palette
Background_Primary - #16161a
Button - #7f5af0
Headline - #fffffe 
Button Text - #fffffe
Paragraph - #94a1b2

Background_Secondary - #242629
Card_Background - #16161a
Sub_Heading - #94a1b2
Card_Paragraph - #94a1b2

*/

function App() {
  return (
    <Router>
        <Navbar></Navbar>
      <Routes>
        <Route exact path="/" element={<Profile />} />
        <Route path="/education" element={<Education />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />

      </Routes>
    </Router>
  );
}

export default App;
