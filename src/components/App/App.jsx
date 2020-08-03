import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import rout from '../../rout/rout';
import Reader from '../Reader/Reader';

const App = () => (
  <BrowserRouter>
    <>
      <Switch>
        <Route path={rout.READER} component={Reader} />
        <Redirect to={`${rout.ITEM}`} />
      </Switch>
    </>
  </BrowserRouter>
);

export default App;
