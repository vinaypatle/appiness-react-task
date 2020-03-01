import React from 'react';
import { Switch, Route, Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Dashboard from './containers/Dashboard/Dashboard';
import Auth from './containers/Auth/Auth';
import './App.css';

function App(props) {
  return (
    <div className="App">
      <nav className="NavBar">
        <Link to="/login">LOGIN</Link>
        <Link to="/">HOME</Link>
      </nav>
      {!props.isAuth ? (
        <Switch>
          <Route path="/login">
            <Auth />
          </Route>
          <Redirect to={"/login"} />
        </Switch>
      ) : (
          <Switch>
            <Route path="/login">
              <Auth />
            </Route>
            <Route path="/">
              <Dashboard />
            </Route>
          </Switch>
        )}
    </div>
  );
}

const mapStateToProps = state => ({
  isAuth: state.isAuth
});

export default connect(mapStateToProps)(App);
