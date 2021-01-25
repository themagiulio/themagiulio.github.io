import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Home from './Pages/Home'
import NotFound from './Pages/NotFound'
import './App.css'
import AboutMe from './Components/AboutMe'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/notfound" component={NotFound} />
        <Redirect to="/"/>
      </Switch>
    </Router>
  );
}

export default App;
