import React from 'react';
import './App.css';
import Home from './containers/Home/Home';
import { Switch, Route } from 'react-router';
import CoverView from './containers/CoverView/CoverView';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/coverview" component={CoverView} />
      </Switch>
    </div>
  );
}

export default App;
