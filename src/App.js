import React from 'react';
import {Switch, Route } from 'react-router-dom';
import Layout from './components/layout';
import Home from './pages/Home';
import Login from './pages/Login';
import NewPlant from './pages/Newplant';
import './App.css';

function App() {

  return (
    <div className="App">
      <Layout>
        <div className='container'>
            <Switch>
              <Route path='/login'>
                <Login/>
              </Route>
              <Route path='/newplant'>
                <NewPlant />
              </Route>
              <Route path='/'>
                <Home/>
              </Route>
            </Switch>
        </div>
      </Layout>
    </div>
  );
}

export default App;
