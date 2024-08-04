// import React, { useState, useEffect } from 'react';
// import './App.css';
// import Homepage from './components/Homepage'


// function App() {
  

//   return (
//     <div className="App h-screen overflow-hidden">
//       <Homepage />
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Room from './components/Room';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/room/:roomId" element={<Room />} />
      </Routes>
    </Router>
  );
};

export default App;

