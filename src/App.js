import logo from './logo.svg';
import './App.css';
import { FclickCounter, FclickCounterTwo } from './FclickCounter';
import { List } from './List';


const names = ['Vitalii', 'David', 'John', 'Cristian', 'Alexandr'];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <FclickCounter />
        <FclickCounterTwo />
        <List items={names}/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
