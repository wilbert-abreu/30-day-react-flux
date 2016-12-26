import React from 'react';
import './App.css';

import { Router, Route, hashHistory } from 'react-router'

import { Index } from './containers/Index';

const Home = () => (  <div><h1>Welcome home</h1></div> )
const About = () => (<div><h1>About</h1></div> )

export class App extends React.Component {
  render() {
    return (
      <Router history={ hashHistory }>
        <Route path="/" component={ Index }>
          <Route path="home" component={ Home } />
          <Route path="about" component={ About } />
        </Route>
      </Router>
    )
  }
}

export default App;
