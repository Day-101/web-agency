import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Navbar from 'components/Navbar';
import Home from 'pages/home';
import About from 'pages/about';
import Works from 'pages/works';
import Contact from 'pages/contact';
import Plus from 'components/Plus';
import 'sass/style.scss'

const App = () => (
  <Router>
    <Navbar />
    <main>
      <Switch>
          <Route path="/plus" exact>
            <Plus />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/works">
            <Works />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
    </main>
  </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));
