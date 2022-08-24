import logo from './logo.svg';
import Header from './components/header'
import Splash from './components/splash'
import About from './components/about';
import Platform from './components/platform';
import Contact from './components/contact';
import React from 'react';


import './sass/common.scss'
function App() {
  const aboutRef= React.createRef();
  const platformRef = React.createRef();
  const contactRef = React.createRef();


  return (
    <div className="App">
      <Header aboutRef={aboutRef} platformRef={platformRef} contactRef={contactRef}></Header>
      <Splash aboutRef={aboutRef}></Splash>
      <About aboutRef={aboutRef}></About>
      <Platform platformRef={platformRef}></Platform>
      <Contact contactRef={contactRef}></Contact>
    </div>
  );
}

export default App;
