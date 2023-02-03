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
	<div className="bottom"><h3>Copyright © 2022-2023 by Katharine</h3></div>
    </div>
  );
}

export default App;
