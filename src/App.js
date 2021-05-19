import React from 'react'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Form from './Form'
import Welcome from './Welcome'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Form />
        </Route>
        <Route path="/welcome" exact>
          <Welcome />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
