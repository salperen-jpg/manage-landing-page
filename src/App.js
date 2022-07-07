import React from 'react';
import { useEffect } from 'react';
import Hero from './components/Hero';
import Manage from './components/Manage';
import Sidebar from './components/Sidebar';
import Simplify from './components/Simplify';

function App() {
  return (
    <>
      <Hero />
      <Manage />
      <Simplify />
      <Sidebar />
    </>
  );
}

export default App;
