import * as React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Header from '../header';
import Footer from '../footer';
import Main from '../../../../pages/main';
import Film from '../../../../pages/film';
import NotFound from '../../../../pages/not-found';

import './app.css';

const App:React.FC = () => {
  return (
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route exact path='/' component={Main} />
          <Route path='/search' component={Main} />
          <Route path='/film/:filmId' component={Film} />
          <Route component={NotFound} />
        </Switch>
        <Footer/>
      </BrowserRouter>
  );
}

export default App;
