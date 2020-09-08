import React from 'react';
import './App.css';
import Home from './containers/Home/Home';
import { Switch, Route } from 'react-router';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
