import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Navbar from 'components/Navbar';
import Content from 'components/Content';
import Home from 'pages/home';
import About from 'pages/about';
import Works from 'pages/works';
import ThemeContextProvider from 'context/ThemeContext';
import 'sass/style.scss';
import 'sass/toggle.scss';


const App = () => {

  return (
  <Router>
    <ThemeContextProvider>
      <Content />
      <Navbar />
    </ThemeContextProvider>
    <main>
      <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/works">
            <Works />
          </Route>
        </Switch>
    </main>
  </Router>
)};

ReactDOM.render(<App />, document.getElementById('root'));
