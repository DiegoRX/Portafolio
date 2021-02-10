import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../container/Layout';
import Home from '../page/home';
import ExpandingCards from '../page/expandingCards';

const App = () => {
  return (
    <BrowserRouter basename='/'>
      <Switch>
        <Layout>
          <Route exact path='/' component={Home} />
          <Route exact path='/ExpandingCards' component={ExpandingCards} />
        </Layout>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
