import React, { useState } from 'react';
import "./bootstrap.css"
import { Router } from "@reach/router"

import Header from "./components/Header"

import ListAddView from "./views/ListAddView"
import PlayerList from "./components/PlayerList"
import AddPlayerForm from "./components/AddPlayerForm"


function App() {
  return (
    <div className="App container">
      <Header />
      <Router>
        <ListAddView path="/players" >
          <PlayerList path="/list"/>
          <AddPlayerForm path="/addplayer"/>
        </ListAddView>
      </Router>
    </div>
  );
}
  
export default App;
    
