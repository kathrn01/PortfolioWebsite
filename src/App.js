import './index.css';
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <div className="App">
	<Main />
	<Projects />
	<AboutMe />
    </div>
  );
}

export default App;
