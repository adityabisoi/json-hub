import React from 'react';
import { Route, Switch } from 'react-router-dom';
import address from '../api/routes';
import animals from '../api/routes';
import books from '../api/routes';
import comments from '../api/routes';
import foodphotos from '../api/routes';
import home from '../api/routes';
import movies from '../api/routes';
import photos from '../api/routes';
import products from '../api/routes';
import shows from '../api/routes';
import songs from '../api/routes';
import sports from '../api/routes';
import tasks from '../api/routes';
import users from '../api/routes';
import usertest from '../api/routes';
import vehicles from '../api/routes';


const Routes = () => {
  return (
    <section className="container">
      <Alert />
      <Switch>
        <Route exact path="/address" component={address} />
        <Route exact path="/animals" component={animals} />
        <Route exact path="/books" component={books} />
        <Route exact path="/comments" component={comments} />
        <Route exact path="/foodphotos" component={foodphotos} />
        <Route exact path="/home" component={home} />
        <Route exact path="/movies" component={movies} />
        <Route exact path="/photos" component={photos} />
        <Route exact path="/products" component={products} />
        <Route exact path="/shows" component={shows} />
        <Route exact path="/songs" component={songs} />
        <Route exact path="/sports" component={sports} />
        <Route exact path="/tasks" component={tasks} />
        <Route exact path="/users" component={users} />
        <Route exact path="/usertest" component={usertest} />
        <Route exact path="/vehicles" component={vehicles} />
      </Switch>
    </section>
  );
};

export default Routes;
