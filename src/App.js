import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Header from './Header';
import BookingPage from './BookingPage';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/booking">
            <BookingPage />
          </Route>
          <Route path="/">
            <h1>Welcome to Little Lemon</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
