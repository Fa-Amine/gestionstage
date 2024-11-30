import logo from './logo.svg';
import { Flex,Text } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route ,useNavigate} from "react-router-dom";

import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Login from './components/Login';
import Signup from './components/Signup';
import Profile from './pages/profile';
import GlobalProvider, { globalProvider } from './context/AppContext';
import { useContext } from 'react';


function App() {
  const { user } = useContext(globalProvider);
  return (
<<<<<<< HEAD
    <>
      
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
    </>
=======
    <GlobalProvider>
      <Router>
        <Header />
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path={"/login" } element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </GlobalProvider>
>>>>>>> fd36a2a77f8d894c008bd54927205c51dffb838d
  );
}

export default App;
