import logo from './logo.svg';
import { Flex,Text } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route ,useNavigate} from "react-router-dom";

import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Login from './components/Login';
import Signup from './components/Signup';


function App() {
  return (
    <>
      <div className="App">
      
      <Router>
      <Header />
      <Routes>
      
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
      {/* <Main /> */}
      {/* <Login /> */}
       
      </div>
    </>
  );
}

export default App;
