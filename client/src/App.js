import React, { useState } from 'react';
import "./bootstrap.css"
import { Router } from "@reach/router"

import Header from "./components/Header"

import ListAddView from "./views/ListAddView"
import PlayerList from "./components/PlayerList"
import AddPlayerForm from "./components/AddPlayerForm"

import PlayerStatusView from "./views/PlayerStatusView"
import Game from "./components/Game"

function App() {

  const [flag, setFlag] = useState(false)
  const [statusFlag, setStatusFlag] = useState(false)


  return (
    <div className="App container">
      <Header />
      <Router>
        <ListAddView path="/players" >
          <PlayerList flag={flag} setFlag={setFlag} path="/list"/>
          <AddPlayerForm flag={flag} setFlag={setFlag} path="/addplayer"/>
        </ListAddView>
        <PlayerStatusView path="/status">
          <Game statusFlag={statusFlag} setStatusFlag={setStatusFlag} path="/game/:id" />
        </PlayerStatusView>
      </Router>
    </div>
  );
}
  
export default App;
    
