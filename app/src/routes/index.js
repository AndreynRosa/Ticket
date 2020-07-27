import React from 'react';
import { Switch } from 'react-router-dom';

import { Route as ReactDOMRoute } from 'react-router-dom';
import Home from '../pages/Home';

export default function routes() {
  return (
    <Switch>
      <ReactDOMRoute path="/" exact component={Home} />
    </Switch>
  );
}
