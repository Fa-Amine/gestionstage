import logo from './logo.svg';
import { Flex,Text } from '@chakra-ui/react';

import './App.css';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  return (
    <>
      <div className="App">
      <Header />
      <Main />
        {/* <div className="container" >
          <h1>ana</h1>
        </div> */}
      </div>
    </>
  );
}

export default App;
