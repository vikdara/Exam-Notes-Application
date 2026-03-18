import React, { useEffect } from 'react'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import Home from './pages/Home'
import Auth from './pages/Auth';
import { getcurrentUser } from './services/api';

export const serverUrl = "http://localhost:8000"

function App() {
  useEffect(() => {
    getcurrentUser();
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </>
  );
}

export default App
