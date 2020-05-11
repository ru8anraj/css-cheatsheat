import React from 'react';
import {
  Route,
  HashRouter,
} from 'react-router-dom';
import {
  Home,
} from './screens/index';

const app = () => (
  <HashRouter>
    <Route exact path="/" component={Home} />
  </HashRouter>
);

export default app;
