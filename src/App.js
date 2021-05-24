import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home/Home';
import './App.css';

const App = () => {

  return (
      <div className="site-container">
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
      </div>
  )
};

export default App;
