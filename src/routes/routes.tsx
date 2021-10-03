import { Switch, BrowserRouter, Route } from 'react-router-dom';

import { Home } from '../pages/Home/index';

export function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Home} path="/" exact />
        <Route path="/404">404</Route>
      </Switch>
    </BrowserRouter>
  );
}
