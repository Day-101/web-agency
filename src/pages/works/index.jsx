import React from 'react';
import { Route,Switch } from 'react-router-dom';

import NavWorks from 'components/NavWorks';
import WorkDetail from 'components/WorkDetail';

const Works = () => {
return (
  <>
    <h1>Works</h1>
    <NavWorks />
    <Switch>
      <Route path="/works/:slug">
        <WorkDetail />
      </Route>
    </Switch>
  </>
)}

export default Works;
