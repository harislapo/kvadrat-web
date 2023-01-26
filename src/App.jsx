import React from 'react';
import { AboutUs, Footer, Founder, Gallery, Header, Intro } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <Intro />
    <Founder />
    <Gallery />
    <Footer />
  </div>
);

export default App;
