import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Navbar from 'components/Navbar';
import Home from 'pages/home';
import About from 'pages/about';
import Works from 'pages/works';
import WorkDetail from 'pages/workdetail'
import ThemeContextProvider from 'context/ThemeContext';
import 'sass/style.scss';
import 'sass/toggle.scss';

const App = () => {

  return (
  <Router>
    <ThemeContextProvider>
      <div className='container'>
        <Navbar />
        <main>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/works" exact>
              <Works />
            </Route>
            <Route path="/works/:slug">
              <WorkDetail />
            </Route>
          </Switch>
        </main>
      </div>
    </ThemeContextProvider>
  </Router>
)};

ReactDOM.render(<App />, document.getElementById('root'));
