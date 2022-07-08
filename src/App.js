import React from 'react';
import { useEffect } from 'react';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Manage from './components/Manage';
import Sidebar from './components/Sidebar';
import Simplify from './components/Simplify';
import WhatTheyHaveSaid from './components/WhatTheyHaveSaid';

function App() {
  return (
    <>
      <Hero />
      <Manage />
      <WhatTheyHaveSaid />
      <Simplify />
      <Sidebar />
      <Footer />
    </>
  );
}

export default App;
