import React from 'react';
import { Router, Link } from '@reach/router';

import Exercise01 from './exercises/Exercise01'
import Exercise02 from './exercises/Exercise02'
import Exercise03 from './exercises/Exercise03'

const Welcome = () => {
  return <div>
    <h2>Welcome!</h2>
    <p>
      Please take a look at the 3 exercises, each of them contain instructions.
    </p>
  </div>
}

const App = () => {

  const NavLink = props => (
    <Link
      {...props}
      getProps={({ isCurrent }) => {

        return {
          style: {
            color: isCurrent ? "blue" : "black"
          }
        };
      }}
    />
  );

  return <div className="container">
    
    <h1 className="py-4">
      <Link to="/">
      FrontEnd Interview Exercises
      </Link>
    </h1>
        

    <ul className="nav nav-tabs">
      <li className="nav-item">
      </li>
      <li className="nav-item">
        <NavLink  to="/exercise01" className="nav-link">Exercise 01</NavLink >
      </li>
      <li className="nav-item">
        <NavLink  to="/exercise02" className="nav-link">Exercise 02</NavLink >
      </li>
      <li className="nav-item">
        <NavLink  to="/exercise03" className="nav-link">Exercise 03</NavLink >
      </li>
    </ul>

    <Router className="mt-5 mb-5">
      <Welcome path="/" default />
      <Exercise01 path="/exercise01" />
      <Exercise02 path="/exercise02" />
      <Exercise03 path="/exercise03" />
    </Router>

  </div>
}

export default App;
