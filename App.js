import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Profile from './Profile';

const App = () => {
  return (
    <Router>
      <div>
        {/* Navigation Bar */}
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          </ul>
        </nav>

        <hr />

        {/* Routing Configuration */}
        <Route exact path="/" component={Home} />
        <Route path="/profile" component={Profile} />
      </div>
    </Router>
  );
};
