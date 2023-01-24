import React from 'react';
import { AboutUs, Footer, Gallery, Header, Intro, Awards } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <Awards />
    <Intro />
    <Gallery />
    <Footer />
  </div>
);

export default App;
