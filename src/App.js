import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Emad Armoun
        </p>

        <a
          className="App-link"
          href="http://www.EmadArmoun.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          My Website
        </a>
      </header>
    </div>
  );
}

export default App;
