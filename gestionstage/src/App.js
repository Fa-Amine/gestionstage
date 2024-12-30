import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { Suspense, lazy, useContext } from "react";

import './App.css';
import Header from './components/Header';
import PublicRoute from './routes/PublicRoute';
import ProtectedRoute from './routes/ProtectedRoute';
import { AuthContext } from "./context/AppContext";
import { Spinner } from "@chakra-ui/react";
import GestionStagiaires from "./pages/gestionStagiaires";
import Unauthorized from "./components/Unauthorized";
import DeclarerStage from "./pages/declarerStage";
import GestionStages from "./pages/gestionStages";

const Main = lazy(() => import('./components/Main'));
const Login = lazy(() => import('./components/Login'));
const Signup = lazy(() => import('./components/Signup'));
const Profile = lazy(() => import('./pages/profile'));

function App() {
  const {isAuthenticated} = useContext(AuthContext);

  return (
    <>
      <Router>
        <Header />
        <Suspense fallback={<Spinner color="blue.500" borderWidth="4px" />}>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route
              path="/login"
              element={
                <PublicRoute>
                  <Login />
                </PublicRoute>
              }
            />
            <Route
              path="/register"
              element={
                <PublicRoute>
                  <Signup />
                </PublicRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
            <Route
              path="/gestionStagiaires"
              element={
                <ProtectedRoute roles={"ROLE_ADMIN"}>
                  <GestionStagiaires />
                </ProtectedRoute>
              }
            />
            <Route
              path="/gestionStages"
              element={
                <ProtectedRoute roles={"ROLE_ADMIN"}>
                  <GestionStages />
                </ProtectedRoute>
              }
            />
            <Route
              path="/declarerStage"
              element={
                <ProtectedRoute roles={"ROLE_STAGIAIRE"}>
                  <DeclarerStage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/unauthorized"
              element={
                  <Unauthorized />
              }
            />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
