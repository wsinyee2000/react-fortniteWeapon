import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header';
import Home from './components/Home';
import ShowWeapons from './components/ShowWeapons';
import WeaponDetail from './components/WeaponDetail';


function App() {


  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/weapons' exact component={ShowWeapons} />
          <Route path='/weapons/:id' component={WeaponDetail} />
        </Switch>
      </Router>


    </div>
  );
}

export default App;
