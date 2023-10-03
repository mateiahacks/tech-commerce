import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/register' element={<h1>mate</h1>}/>
      </Routes>
    </Router>
  );
}

export default App;
