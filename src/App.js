import logo from './logo.svg';
import Header from './components/header'
import Splash from './components/splash'
import About from './components/about';
import Platform from './components/platform';
import Contact from './components/contact';

import './sass/common.scss'
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Splash></Splash>
      <About></About>
      <Platform></Platform>
      <Contact></Contact>
    </div>
  );
}

export default App;
