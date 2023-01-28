import React, { useEffect } from 'react';
import { AboutUs, Footer, Founder, Gallery, Header, Intro } from './container';
import { Navbar } from './components';
import { useTranslation } from 'react-i18next';
import './App.css';

const App = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage('en');
  }, []);

  return (
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
};

export default App;
