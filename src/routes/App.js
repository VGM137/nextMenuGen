import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../pages/index';
import Order from '../pages/order';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" element={<Home />} />
      <Route path="/order" element={<Order />} />
    </Switch>
  </BrowserRouter>
);

export default App;
