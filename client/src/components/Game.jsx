import React, { useState, useEffect, useRef } from "react"
import axios from "axios"
// import { navigate } from "@reach/router"

const Game = props => {

    const { id, statusFlag, setStatusFlag } = props
    const [players, setPlayers] = useState([])

    useEffect( () => {
        axios.get("http://localhost:8000/api/players")
            .then(response => {
                let allPlayers = response.data.Players
                setPlayers(allPlayers)
            })
            .catch(error => console.log("There was an error: ", error))
    }, [statusFlag])

    const getStatus = player => player[`game${id}Status`]

    const onClick = e => {

        if (id === "1"){
            axios.put(`http://localhost:8000/api/player/${e.target.value}`, {
                game1Status: e.target.name                            
            })
                .then(response => {
                    if (statusFlag === false){setStatusFlag(true)}
                    else { setStatusFlag(false) }
                })
                .catch(error => console.log("There was a problem, ", error))
        }
        else if (id === "2"){
            axios.put(`http://localhost:8000/api/player/${e.target.value}`, {
                game2Status: e.target.name                            
            })
                .then(response => {
                    if (statusFlag === false){setStatusFlag(true)}
                    else { setStatusFlag(false) }
                })
                .catch(error => console.log("There was a problem, ", error))
        }
        else if (id === "3"){
            axios.put(`http://localhost:8000/api/player/${e.target.value}`, {
                game3Status: e.target.name                            
            })
                .then(response => {
                    if (statusFlag === false){setStatusFlag(true)}
                    else { setStatusFlag(false) }
                })
                .catch(error => console.log("There was a problem, ", error))
        }
    }

    const getButtons = player => {
        let status = getStatus(player)
        if (status === "playing"){
            return(
                <td>
                    <button onClick={onClick} className="btn btn-sm btn-success" style={{marginRight: "10px"}} value={player._id} name="playing">Playing</button>
                    <button onClick={onClick} className="btn btn-sm btn-outline-secondary" style={{marginRight: "10px"}} value={player._id} name="notPlaying">Not Playing</button>
                    <button onClick={onClick} className="btn btn-sm btn-outline-secondary" value={player._id} name="unclassified">Unclassified</button>
                </td>
            )
        }
        else if (status === "notPlaying"){
            return(
                <td>
                    <button onClick={onClick} className="btn btn-sm btn-outline-secondary" style={{marginRight: "10px"}} value={player._id} name="playing">Playing</button>
                    <button onClick={onClick} className="btn btn-sm btn-danger" style={{marginRight: "10px"}} value={player._id} name="notPlaying">Not Playing</button>
                    <button onClick={onClick} className="btn btn-sm btn-outline-secondary" value={player._id} name="unclassified">Unclassified</button>
                </td>
            )
        }
        else {
            return(
                <td>
                    <button onClick={onClick} className="btn btn-sm btn-outline-secondary" style={{marginRight: "10px"}} value={player._id} name="playing">Playing</button>
                    <button onClick={onClick} className="btn btn-sm btn-outline-secondary" style={{marginRight: "10px"}} value={player._id} name="notPlaying">Not Playing</button>
                    <button onClick={onClick} className="btn btn-sm btn-warning" value={player._id} name="unclassified">Unclassified</button>
                </td>
            )
        }
    }

    return(
        <div className="row">
            <div className="col-12">
                <table className="table table-sm table-hover table-striped table-bordered">
                    <thead className="thead-dark">
                        <tr>
                            <th>Player Name</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            players.map( (player, i) => 
                                <tr key={ i }>
                                    <td>{player.name}</td>
                                    { getButtons(player) }
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Game