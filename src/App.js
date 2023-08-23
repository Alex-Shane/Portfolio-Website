import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LineupCard from './LineupCard'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/">
          {<LineupCard />}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
