
import './App.css';
import Navigation from '../Navigation/Navigation';
import Work from '../Work/Work';
import Social from '../Social/Social';
import SelfCare from '../SelfCare/SelfCare';
import Study from '../Study/Study';
import Play from '../Play/Play';
import Exercise from '../Exercise/Exercise';
import React from 'react';
import { TimeframeProvider } from '../ContextManager/ContextManager';

function App() {

  

  return (
    <TimeframeProvider>
      <main className="App">
        <Navigation/>
        <Work/>
        <Play/>
        <Study/>
        <Exercise/>
        <Social/>
        <SelfCare/>
      </main>
    </TimeframeProvider>

  );
}

export default App;
