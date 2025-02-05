import Navigation from './components/Navigation_bar';
import Header from './components/Header';
import Cards from './components/Cards';
import WhatWeDo from './components/WhatWeDo';
import Footer from './components/Footer';
import ScrollWatcher from './components/ScrollWatcher';
import Projects from './components/Projects';
import Beta from './components/Beta';
import './App.css';

function App() {
  return (
    <>
      <Beta/>
      <ScrollWatcher/>
      <Navigation/>
      <Header/>
      <WhatWeDo/>
      <Projects/>
      <Cards/>
      <Footer/>
    </>
  );
}

export default App;
