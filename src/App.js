import React from 'react';
import './App.css';

import {
  Router, Route, hashHistory, IndexRoute
} from 'react-router';
import { Index } from './containers/Index';
import { Home } from './views/Home/Home.js';
import { About } from './views/About/About.js';

export class App extends React.Component {
  render() {
    return (
      <Router history={ hashHistory }>
        <Route path="/" component={ Index }>
          <IndexRoute component={ Home } />
          <Route path="home" component={ Home } />
          <Route path="about" component={ About } />
        </Route>
      </Router>
    )
  }
}

export default App;
