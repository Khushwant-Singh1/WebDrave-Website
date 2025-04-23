import React from 'react';
import Navbar from './components/Navbar';
import Landingpage from './components/Landingpage';
import ScrollVelocity from './components/ScrollVelocity';

function App() {
  return (
    <>
      <Navbar />
      <Landingpage />
      <ScrollVelocity
        texts={['DESIGNING THE FUTURE -']}
        velocity={200}
        className="custom-scroll-text "
      />

    </>
  );
}

export default App;
