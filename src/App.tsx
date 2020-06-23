import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Redirect, Route } from 'react-router-dom';

import * as api from './helpers/api';
import { initClub } from './store/clubs';

import './App.css';
import Start from './components/Start';
import Clubs from './components/Clubs';


const getAppData = async (): Promise<Club[]> => {
  const dataFromServer = await api.getDataFromServer();

  return dataFromServer;
};

function App() {
  const dispatch = useDispatch();

  const setClubs = () => {
    getAppData()
      .then(dataFromServer => {
        dispatch(initClub(dataFromServer));
      })
  };

  useEffect (() => {
    setClubs();
  });

  return (
    <div className="App">
      <header className="App-header">
        <Switch>
        <Route path="/" exact>
            <Start />
        </Route>
        <Route path="/clubs">
            <Clubs />
        </Route>
          <Redirect from="/home" to="/" />
        </Switch>
        
      </header>
    </div>
  );
}

export default App;

