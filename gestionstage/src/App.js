import logo from './logo.svg';
import { Flex,Text } from '@chakra-ui/react';

import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Login from './components/Login';

function App() {
  return (
    <>
      <div className="App">
      <Header />
      {/* <Main /> */}
      <Login />
       
      </div>
    </>
  );
}

export default App;
