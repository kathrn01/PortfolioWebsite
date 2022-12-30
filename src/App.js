import logo from './logo.svg';
import './index.css';
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
	<Navbar />
      <header className="App-header">
      </header>
	<Main />
	<Projects />
    </div>
  );
}

export default App;
