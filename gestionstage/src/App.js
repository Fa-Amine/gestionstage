import logo from './logo.svg';
import { Provider } from "@/components/ui/provider"
import { FaBeer } from '@chakra-ui/icons';

import './App.css';

function App() {
  return (
    <Provider>
      <div className="App">
        {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
        <div className="container" style={""}>
          <h1>ana</h1>
        </div>
      </div>
    </Provider>
  );
}

export default App;
