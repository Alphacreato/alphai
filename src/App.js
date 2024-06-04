import React from 'react'

import { Footer, Blog, Possibility, Features, WhatALPHA, Header} from './containers';
import { CTA, Brand, Navbar } from './components';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className="gradient_bg">
        <Navbar />
        <Header />
      </div>
     <Brand />
     <WhatALPHA />
     <Features />
     <Possibility />
     <CTA />
     <Blog />
     <Footer />
    </div>
  )
}

export default App