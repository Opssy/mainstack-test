import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import logo from './logo.svg';
import Dashboard from './Dashboard';
import Analytic from './dashboard/analytic';
import { routes } from './utils/routes';
function App() {
  return (
    <div className="App">
      <Dashboard title='Dashboard'>
      <Router>
            <Routes>
                <Route path={routes.analytic} element={<Analytic/>}/>
              </Routes>
        </Router>
      </Dashboard>
    </div>
  );
}

export default App;
