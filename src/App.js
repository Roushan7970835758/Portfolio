import "./App.css";
import Layout from "./components/layouts/Layout";
import About from "./pages/About/About";
import Techstack from "./pages/Techstack/Techstack";
import Projects from "./pages/Projects/Projects";
import Education from './pages/Education/Education.js';
import WorkExp from './pages/WorkExp/WorkExp.js';
import Contact from './pages/Contact/Contact.js';
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from "./context/ThemeContext";

function App() {
  const[theme] = useTheme()
  return (
    <>
    <div id={theme} className="bgColor">
    <Layout />
      <div className="container">
        <About />
        <Techstack />
        <Projects/>
        <Education/>
        <WorkExp/>
        <Contact/>
      </div>
      <div className="footer mb-3 ms-3">
        <h4 className="text-center">Made By 😍 Roushan Verma</h4>
      </div>
    </div>
      <ScrollToTop color="#f29f67" smooth style={{backgroundColor:"#1e1e2c",borderRadius:"80px"}} />
    </>
  );
}

export default App;
