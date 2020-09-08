import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router';
import ViewManager from './containers/ViewManager/ViewManager';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={ViewManager} />
      </Switch>
    </div>
  );
}

export default App;
